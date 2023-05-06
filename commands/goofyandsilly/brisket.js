const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`brisket`)
        .setDescription(`brisket best girl <3`),
    async execute(interaction) {
        const member = interaction.user;
        const brisk = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/876442194377080872/1102779798570405908/brisk.jpg`)

        await interaction.reply({ content: `<@${member.id}>`, embeds: [brisk] });
    }
}