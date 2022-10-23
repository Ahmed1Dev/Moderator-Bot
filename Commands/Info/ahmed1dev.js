const MessageEmbed = require("discord.js")

module.exports = {
    name: "Ahmed1Dev",
    description: "Check This!",
    async execute(interaction, client) {

        const info = new MessageEmbed()
        .setTitle(`**Ahmed1Dev** !`)
        .setDescription(`
           :rose: **Thank You For Using My Project**
            Don't Forgat See New Projects + Add Star :star:      
        [Github](https://github.com/Ahmed1Dev) :link:
        [Support Server](https://discord.gg/nBfVMm8dTN) :link:
        `)
        .setColor("BLUE");
        message.channel.send(info)
    }
}