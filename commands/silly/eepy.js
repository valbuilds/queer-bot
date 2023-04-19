const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`eepy`)
        .setDescription(`*snore* mimimimi`)
        .setDefaultMemberPermissions(PermissionFlagsBits.AttachFiles)
        .setDMPermission(false),
    async execute(interaction) {
        return interaction.reply(`https://tenor.com/view/cat-meme-cat-sleeping-snoozer-sleepy-gif-26294333`);
    }
}