const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === "!ping") {
        message.reply("🏓 Pong!");
    }
});

client.login("MTQ3ODEwNDc1NDM2MTIwNDczNg.GAq6Pl.bzGP31oYyjYv9183PEBETNWy6erdACxZaXedFs");