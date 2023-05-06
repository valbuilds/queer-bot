const { SlashCommandBuilder, AttachmentBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`hi`)
        .setDescription(`say hi!`),
    async execute(interaction) {
        const member = interaction.user;
        const hello = new AttachmentBuilder(`./images/hi.png`)

        await interaction.reply({ content: `oh! hi <@${member.id}>, i wasn't expecting you. >_<`, files: [hello] })
    }
}