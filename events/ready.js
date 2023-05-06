const { Events, ActivityType } = require('discord.js');
const { status } = require(`../config.json`);

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        client.user.setActivity(`${status}`, { type: ActivityType.Playing });
        console.log('Online!');
	},
};
