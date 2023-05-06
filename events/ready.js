const { Events, ActivityType } = require('discord.js');
const { status } = require(`../config.json`);

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        client.user.setActivity(`/help・v0.4`, { type: ActivityType.Listening });
        console.log('Online!');
	},
};
