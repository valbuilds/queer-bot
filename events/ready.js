const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        client.user.setActivity(`/help・v1.1`, { type: ActivityType.Listening });
        console.log('Online!');
	},
};
