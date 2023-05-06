const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`hi`)
        .setDescription(`say hi!`),
    async execute(interaction) {
        const member = interaction.user;
        const hi = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/876442194377080872/1104400831970820127/56daba667b96a2cd6ca0b51f8a3604cb.png`)

        await interaction.reply({ content: `oh! hi <@${member.id}>, i wasn't expecting you. >_<`, embeds: [hi] })
    }
}