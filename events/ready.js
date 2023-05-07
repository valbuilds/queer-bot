const { Events, ActivityType } = require('discord.js');
const { status } = require(`../config.json`);

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        client.user.setActivity(`/help・v1.0`, { type: ActivityType.Listening });
        console.log('Online!');
	},
};
