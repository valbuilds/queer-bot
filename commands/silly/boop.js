const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    cooldown: 30,
    data: new SlashCommandBuilder()
        .setName(`boop`)
        .setDescription(`wuv u!`)
        .addUserOption(option =>
            option
                .setName(`user`)
                .setDescription(`who you wanna boop?`)
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.AttachFiles)
        .setDMPermission(false),
    async execute(interaction) {
        const booped = interaction.options.getUser(`user`);

        return interaction.reply(`<@${booped.id}>\nhttps://cdn.discordapp.com/stickers/993536394062463006.png`);
    }
}