// Getting discord.js to work.
const Discord = require('discord.js')
const client = new Discord.Client();

// Cleverbot setup:
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
clbot.configure({botapi: "ye47ohHERGhVcNw1FjcfnVpPK6sW1bZl"});

// This will make the bot reply when it gets mentioned.
// (Thanks to GeopJr for the `message.content.includes` part!
client.on("message", (message) => {
  if (message.content.includes("<@437219880178024448>")) {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
})

// Make the application able to login to your bot.
client.login('NDM3MjE5ODgwMTc4MDI0NDQ4.Dfg-YQ.nJqDNf-8t6s0senerToYJ4jMwoY');
