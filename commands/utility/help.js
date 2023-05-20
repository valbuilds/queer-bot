const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    cooldown: 30,
    data: new SlashCommandBuilder()
        .setName(`help`)
        .setDescription(`Learn about my features!`),
    async execute(interaction) {
        const helpEmbed = new EmbedBuilder()
            .setTitle(`Help`)
            .setURL(`http://qbot.katiebuilder.xyz/`)
            .setDescription(`working on it >_<`)
            .setTimestamp()
            .setColor(`Greyple`)

        return interaction.reply({ embeds:[helpEmbed], ephemeral: true });
    }
}