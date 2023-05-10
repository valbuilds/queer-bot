const { Events, ActivityType } = require('discord.js');
const { status } = require(`../config.json`)

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        client.user.setActivity(`${status}`, { type: ActivityType.Listening });
        console.log('Online!');
		console.log(`Status: ${status}`)
	},
};
