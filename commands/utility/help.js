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
                { name: `Utility`, value: '</help:1102412097473761380> - Replies with this message.\n</roles list:1102416366646071306> + </roles modify:1102416366646071306> - *(Beta command)* Self roles.' }
            )
            .setFooter({ text: `Version 0.2b` })
            .setTimestamp()
            .setColor(`Blurple`)

        return interaction.reply({ embeds:[helpEmbed], ephemeral: true });
    }
}