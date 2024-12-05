# Islamic Tesbi7 Discord Bot (تسبيح)

A Discord bot designed to help Muslims track their daily remembrance (Dhikr/ذكر) and seeking forgiveness (Istighfar/استغفار). The bot provides an interactive interface with Arabic language support for spiritual practices.

## ✨ Features

### 1. Tasbih (تسبيح) Command
- Interactive digital counter for Islamic remembrances
- Four preset dhikr phrases:
  - سبحان الله (SubhanAllah)
  - الحمد لله (Alhamdulillah)
  - الله أكبر (Allahu Akbar)
  - لا إله إلا الله (La ilaha illa Allah)
- Button-based interaction
- Individual user tracking
- Displays virtues of each dhikr

### 2. Istighfar (استغفار) Command
- Three preset istighfar phrases:
  - أستغفر الله (Astaghfirullah)
  - أستغفر الله وأتوب إليه (Astaghfirullah wa atubu ilayh)
  - رب اغفر لي (Rabbi ighfir li)
- Interactive counting system
- Personal progress tracking
- Virtue information display

### 3. Statistics (احصائياتي) Command
- Daily tracking of:
  - Tasbih count
  - Istighfar count
  - Total interactions
  - Estimated good deeds (حسنات)
- Daily streak system
- Detailed breakdown of specific phrases used

## 🚀 Getting Started

### Prerequisites
- Node.js (v16.9.0 or higher)
- Discord.js (v14)
- A Discord account and application

### Installation
1. Clone the repository:
```bash
git clone https://github.com/esslm/Tesbi7.git
cd Tesbi7
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Discord bot credentials:
```env
TOKEN=Your_Discord_Bot_Token
CLIENT_ID=Your_Discord_Bot_Client_ID
```

4. Start the bot:
```bash
node .
```

## 📝 Usage

### Bot Commands
- `/تسبيح` - Start a tasbih session
- `/استغفار` - Start an istighfar session
- `/احصائياتي` - View your daily statistics

## 🛠️ Technical Details

### Dependencies
- discord.js
- @discordjs/builders
- dotenv

### Project Structure
```
├── index.js           # Main bot configuration
├── commands/
│   ├── tasbih.js     # Tasbi7 command implementation
│   ├── istighfar.js  # Istighfar command implementation
│   └── stats.js      # Statistics tracking
├── .env              # Environment variables
└── package.json      # Project dependencies
```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Current Limitations
- In-memory statistics (reset on bot restart)
- No persistent database (More Stars = Version Pro)
- Single-server functionality

## 🔮 Future Plans
- Database integration for persistent storage
- Multi-server support
- Additional dhikr options
- Enhanced statistics and reporting
- Customizable dhikr phrases

## 🙏 Acknowledgments
- Thanks to Allah for the guidance
- Discord.js community for the excellent documentation

## 🌠 Contact
`Discord :` @61z.
`Instagram :` @ia1q_
`X :` @ia1q_

---
*May Allah accept our deeds and make this tool beneficial.*
