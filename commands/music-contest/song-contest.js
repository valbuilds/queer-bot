const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`)

module.exports = {
    cooldown: 120,
    data: new SlashCommandBuilder()
        .setName(`submit-song-contest`)
        .setDescription(`Submit a bit of music to the music contest!`)
        .addStringOption(option =>
            option.setName(`submission`)
                .setDescription(`Image you want to submit. Reminder: It has to follow the rules.`)
                .setRequired(true)),
    async execute(interaction) {
        const member = interaction.member;
        const user = interaction.user;
        const avatar = user.avatarURL(
            { format: 'png', size: 512, forceStatic: false }
        );
        const channel = interaction.client.channels.cache.get('1107149668816793660');
        const link = interaction.options.getString(`submission`);
        const subId = Math.floor(Math.random() * 9999);
        
        // comment the following line to accept submissions.
        return interaction.reply({ content: `Submissions are closed.`, ephemeral: true });
            
        if (link.startsWith(`https://song.link/`)) {
            isSongLink();
        } else {
            notSongLink();
        }

        async function isSongLink() {
            const submission = new EmbedBuilder()
                .setTitle(`Submission #${subId}`)
                .setAuthor({ name: `${member.displayName}`, iconURL: `${avatar}` })
                .setDescription(`${link}`)
                .setColor(`Blurple`)
                .setTimestamp()
            
            await channel.threads.create({ content: `<@${member.id}>`, name: `Submission #${subId}`, message: { embeds: [submission] }, appliedTags: [`1107179394654548059`, `1107192294983090176`] });
            return interaction.reply({ content: `Submission sent!`, ephemeral: true, embeds: [submission] });
        }

        async function notSongLink() {
            const denied = new EmbedBuilder()
                .setColor(`Red`)
                .setTitle(`Thats not a song link!`)
                .setDescription(`Please make sure you've put your song through https://song.link before submitting!`)
                .setTimestamp()
            
                return interaction.reply({ ephemeral: true, embeds: [denied] });
        }
    }
}