const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`real`)
        .setDescription(`so relatable`)
        .setDefaultMemberPermissions(PermissionFlagsBits.AttachFiles)
        .setDMPermission(false),
    async execute(interaction) {
        return interaction.reply(`https://media.discordapp.net/attachments/919680757813882910/1004666384522952784/attachment-3-1.gif`);
    }
}