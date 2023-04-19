const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`shark`)
        .setDescription(`what is that?`)
        .setDefaultMemberPermissions(PermissionFlagsBits.AttachFiles)
        .setDMPermission(false),
    async execute(interaction) {
        return interaction.reply(`https://media.discordapp.net/attachments/1091831905298690183/1096916638542078072/Screenshot_2023-04-16-00-16-33-158_com.zhiliaoapp.musically-edit.jpg`);
    }
}