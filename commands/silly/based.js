const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`based`)
        .setDescription(`explains the slang word 'based'`)
        .setDefaultMemberPermissions(PermissionFlagsBits.AttachFiles)
        .setDMPermission(false),
    async execute(interaction) {
        const based = new EmbedBuilder()
            .setColor(255, 0, 255)
            .setTitle(`What does 'based' mean?`)
            .setURL(`https://www.urbandictionary.com/define.php?term=based`)
            .setDescription(`'based' is a slang term for 'the opposite of cringe'.`)
        return interaction.reply({ embeds: [based] });
    }
}