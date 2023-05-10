const { SlashCommandBuilder, ChannelType } = require(`discord.js`);
const { joinVoiceChannel, getVoiceConnection, AudioPlayerStatus, createAudioPlayer, NoSubscriberBehavior } = require(`@discordjs/voice`);

// Big Ben sounds provided by: BBC Sound Effects - https://sound-effects.bbcrewind.co.uk
// BBC News themes marked with 'b' provided by: Bintro - https://www.youtube.com/@Bintro
// Sounds marked with 'd' provided by: BBC News Fans Discord Community - 

module.exports = {
    cooldown: 240,
    data: new SlashCommandBuilder()
        .setName(`sfx`)
        .setDescription(`play a sound effect!`)
        .addChannelOption(option =>
            option.setName(`channel`)
                .setDescription(`Choose a channel for this to play in.`)
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildVoice))
        .addStringOption(option =>
            option.setName(`sound`)
                .setDescription(`what sound effect do you want me to play? i'll choose at random if this is left blank.`)
                .addChoices(
                    { name: `the bank was well prepared`, value: `tbwwp` },
                    { name: `want some facts on baguettes`, value: `wsfob` },
                    { name: `space has its own smell`, value: `shios` },
                    { name: `rEally? what of?`, value: `wo` },
                    { name: `bye`, value: `b` },
                )),
    async execute(interaction) {
        const channel = interaction.options.getChannel(`channel`);
        const sound = interaction.options.getString(`sound`);
        const guild = interaction.guild;
        const member = interaction.member;

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });

        if (sound === `tbwwp`) {
            tbwwp();
        } else if (sound === `wsfob`) {
            wsfob();
        } else if (sound === `shios`) {
            shios();
        } else if (sound === `wo`) {
            rwo();
        }  else if (sound === `b`) {
            by();
        }

        const connection = joinVoiceChannel({ channelId: `${channel.id}`, guildId: `${guild.id}`, adapterCreator: guild.voiceAdapterCreator });

        function tbwwp() {
            const sound = createAudioResource('/sounds/bankwaswellprepared.mp3');
            player.play(sound);
            player.on('error', error => {
                console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
                s2Error();
            });
        }
        function wsfob() {
            const sound = createAudioResource('/sounds/baguettes.mp3');
            player.play(sound);
            player.on('error', error => {
                console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
                s2Error();
            });
        }
        function shios() {
            const sound = createAudioResource('/sounds/spacehasitsownsmell.mp3');
            player.play(sound);
            player.on('error', error => {
                console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
                s2Error();
            });
        }
        function rwo() {
            const sound = createAudioResource('/sounds/whatof.mp3');
            player.play(sound);
            player.on('error', error => {
                console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
                s2Error();
            });
        }
        function by() {
            const sound = createAudioResource('/sounds/bye.mp3');
            player.play(sound);
            player.on('error', error => {
                console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
                s2Error();
            });
        }

        player.on(AudioPlayerStatus.Idle, () => {
            player.stop();
            connection.destroy();
        });

    }
}