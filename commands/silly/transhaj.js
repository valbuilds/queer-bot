const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`transhaj`)
        .setDescription(`an icon 🏳️‍⚧️`)
        .setDefaultMemberPermissions(PermissionFlagsBits.AttachFiles)
        .setDMPermission(false),
    async execute(interaction) {
        return interaction.reply(`https://media.discordapp.net/attachments/1091831905298690183/1096164712833630248/image.png`);
    }
}