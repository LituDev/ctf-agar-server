module.exports = Object.seal({
// MultiOgarII Tournament Configuration
// Optimized for 70-80 players, 15-minute matches

// [LOGGING]
"logVerbosity": 4,
"logFileVerbosity": 5,

// [SERVER]
// Tournament settings: 15-minute auto-restart, FFA mode
"serverTimeout": 300,
"serverMaxConnections": 100,           // Limit to ~80 players + spectators
"serverPort": 8080,
"serverBind": "0.0.0.0",
"serverTracker": 0,
"serverGamemode": 0,                   // FFA mode for tournament
"serverBots": 0,                       // No bots in tournament
"serverViewBaseX": 1920,
"serverViewBaseY": 1080,
"serverMinScale": 0.15,
"serverSpectatorScale": 0.4,
"serverStatsPort": 88,
"serverStatsUpdate": 60,
"mobilePhysics": 0,
"badWordFilter": 1,
"serverRestart": 9999,                   // Auto-restart after 15 minutes

// [CLIENT]
"serverMaxLB": 10,                     // Top 10 leaderboard
"serverChat": 1,
"serverChatAscii": 1,
"separateChatForTeams": 0,
"serverName": "BLHACKCTF Tournament Server",
"serverWelcome1": "Welcome to BLHACKCTF's Tournament!",
"serverWelcome2": "Good luck!",
"clientBind": "",

// [ANTI-BOT]
// Stricter limits for tournament integrity
"serverIpLimit": 100,                    // Max 2 connections per IP
"serverMinionIgnoreTime": 30,
"serverMinionThreshold": 10,
"serverMinionInterval": 1000,
"serverScrambleLevel": 1,              // Light scrambling to prevent cheating
"playerBotGrow": 1,                    // Enable anti-bot grow

// [BORDER]
// Larger map for 70-80 players (slightly bigger than vanilla)
"borderWidth": 18000,
"borderHeight": 18000,

// [FOOD]
// More food for higher player count
"foodMinSize": 10,
"foodMaxSize": 20,
"foodAmount": 1200,                    // Increased for 70-80 players
"foodMassGrow": 1,

// [VIRUSES]
// More viruses for strategic gameplay with many players
"virusMinSize": 100,
"virusMaxSize": 141.421356237,
"virusMaxPoppedSize": 60,
"virusEqualPopSize": 0,
"virusAmount": 80,                     // More viruses for 70-80 players
"virusMaxAmount": 120,
"motherCellMaxMass": 0,
"virusVelocity": 780,
"virusMaxCells": 0,

// [EJECTED MASS]
"ejectSize": 36.06,
"ejectSizeLoss": 42.43,
"ejectCooldown": 3,
"ejectSpawnPercent": 0.5,
"ejectVirus": 0,
"ejectVelocity": 780,

// [PLAYERS]
// Tournament-balanced player settings
// Starting mass: ~15 (size: 38.73) for faster early game
"playerMinSize": 31.6227766017,        // Min: 10 mass
"playerMaxSize": 1500,                 // Max: 22500 mass
"playerMinSplitSize": 59.16079783,     // Min split: 35 mass
"playerMinEjectSize": 59.16079783,     // Min eject: 35 mass
"playerStartSize": 38.73,              // Start: ~15 mass (faster start)
"playerMaxCells": 16,
"playerSpeed": 1,
"playerDecayRate": 0.003,              // Faster decay to prevent camping
"playerDecayCap": 0,                   // No decay cap for competitive play
"playerRecombineTime": 20,             // Faster recombine (20s) for action
"playerMaxNickLength": 15,
"playerDisconnectTime": 30,            // Remove disconnected players after 30s
"splitVelocity": 780,

// [MINIONS]
// Disabled for tournament
"minionStartSize": 31.6227766017,
"minionMaxStartSize": 31.6227766017,
"minionCollideTeam": 0,
"serverMinions": 5,                    // No minions in tournament
"defaultName": "minion",
"minionsOnLeaderboard": 0,

// [Gamemode]
// FFA tournament settings

// [TOURNAMENT]
// Tournament mode settings
"tournamentEnabled": false,              // Enable tournament mode
"tournamentDuration": 15,                // Tournament duration in minutes (default: 15)
"tournamentAutoStart": false,            // Auto-start tournament on server start

})
