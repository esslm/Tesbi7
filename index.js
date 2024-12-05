const { Client, GatewayIntentBits, Partials, Events, Collection, REST, Routes } = require("discord.js");
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
    intents: Object.values(GatewayIntentBits),
    partials: Object.values(Partials),
    shards: "auto"
});

client.commands = new Collection();

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
    }
}

async function deployCommands() {
    const rest = new REST().setToken(process.env.TOKEN);
    
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Error:', error);
    }
}

client.once(Events.ClientReady, async () => {
    console.log('Bot is starting...');
    console.log('Updating commands...');
    await deployCommands();
    console.log('Bot is ready!');
});

client.on(Events.InteractionCreate, async interaction => {
    try {
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`Command not found: ${interaction.commandName}`);
                return;
            }

            await command.execute(interaction);
        } else if (interaction.isButton()) {
            const [commandName] = interaction.customId.split('_');
            const command = client.commands.get(commandName);

            if (!command || !command.handleButton) {
                console.error(`Button handler not found: ${interaction.customId}`);
                return;
            }

            await command.handleButton(interaction);
        }
    } catch (error) {
        console.error(error);
        const errorMessage = { content: 'An error occurred!', ephemeral: true };
        
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp(errorMessage);
        } else {
            await interaction.reply(errorMessage);
        }
    }
});

client.login(process.env.TOKEN);