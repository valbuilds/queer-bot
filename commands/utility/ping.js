const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
        .setDMPermission(true),
	async execute(interaction) {
		return interaction.reply('Pong 2!');
	},
};