const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`olivia`)
        .setDescription(`the real brisket :3`),
    async execute(interaction) {
        const user = interaction.user;
        const emb = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/876442194377080872/1105211245369507961/56ee21cb4b8e0ed9ed584b481ec7bfb5.png`)

        return interaction.reply({ content: `<@${user.id}>, <@650358609955389452>`, embeds: [emb] });
    }
}