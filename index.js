const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, Events, ActivityType } = require('discord.js');
const { token, status, statusType } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.on(Events.ClientReady, async client => {

	if (statusType === `playing`) {
		client.user.setActivity(`${status}`, { type: ActivityType.Playing });
		console.log(`Status: Playing ${status}`);
	} else if (statusType === `listening`) {
		client.user.setActivity(`${status}`, { type: ActivityType.Listening });
		console.log(`Status: Listening to ${status}`);
	} else if (statusType === `watching`) {
		client.user.setActivity(`${status}`, { type: ActivityType.Watching });
		console.log(`Status: Watching ${status}`);
	} else if (statusType === `competing`) {
		client.user.setActivity(`${status}`, { type: ActivityType.Competing });
		console.log(`Status: Competing in ${status}`);
	}

	console.log('Online!');
})

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	const { cooldowns } = client;

	if (!cooldowns.has(command.data.name)) {
		cooldowns.set(command.data.name, new Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.data.name);
	const defaultCooldownDuration = 3;
	const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

	if (timestamps.has(interaction.user.id)) {
		const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

		if (now < expirationTime) {
			const expiredTimestamp = Math.round(expirationTime / 1000);
			return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, ephemeral: true });
		}
	}

	timestamps.set(interaction.user.id, now);
	setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on(`message`, async message => {
	if (message.author.id === `650358609955389452`) {
		return message.react(`<:brisket:1104077608297168966>`);
	} else if (message.channel.id === `1102126897535660093`) {
		return message.react(`🎉`);
	}
})

client.login(token);
