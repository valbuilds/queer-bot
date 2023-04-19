const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    cooldown: 30,
    data: new SlashCommandBuilder()
        .setName(`shut`)
        .setDescription(`WATCH YO MF TONE`)
        .setDefaultMemberPermissions(PermissionFlagsBits.AttachFiles)
        .setDMPermission(false),
    async execute(interaction) {
        return interaction.reply(`https://images-ext-2.discordapp.net/external/BvnLwhxhZ3MWk_psPqtbAVPtg1fCsvQpbjWVl6bmVaU/%3Fsize%3D44%26quality%3Dlossless/https/cdn.discordapp.com/emojis/697499439086043146.webp`);
    }
}