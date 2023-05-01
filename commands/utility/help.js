const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    cooldown: 30,
    data: new SlashCommandBuilder()
        .setName(`help`)
        .setDescription(`Learn about my features!`),
    async execute(interaction) {
        const helpEmbed = new EmbedBuilder()
            .setTitle(`Help`)
            .addFields(
                { name: `Test`, value: `I'm stupid. :/` }
            )

        return interaction.reply({ embeds:[helpEmbed], ephemeral: true });
    }
}