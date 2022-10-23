const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "catfact",
  description: "Same as dogfact, except it's for cats.",
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    const response = await fetch(
      "https://catfact.ninja/facts?limit=1&max_length=140%27"
    );
    const data = await response.json();

    const Embed = new MessageEmbed()
      .setTitle("Cat Fact")
      .setColor("WHITE")
      .setDescription(`${data.data[0].fact}`);
    interaction.reply({ embeds: [Embed] });
  },
};
