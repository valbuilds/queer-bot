const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`)

module.exports = {
    cooldown: 120,
    data: new SlashCommandBuilder()
        .setName(`banner`)
        .setDescription(`Submit an image to the banner contest!`)
        .addAttachmentOption(option =>
            option.setName(`submission`)
                .setDescription(`Image you want to submit. Reminder: It has to follow the rules.`)
                .setRequired(true)),
    async execute(interaction) {
        const member = interaction.member;
        const user = interaction.user;
        const avatar = user.avatarURL(
            { format: 'png', size: 512, forceStatic: false }
        );
        const channel = interaction.client.channels.cache.get('1105242290852724866'); // 1105238887057600544
        const attachment = interaction.options.getAttachment(`submission`);
        const subId = Math.floor(Math.random() * 9999);

        if (attachment.contentType.startsWith(`image/`)) {
            isImage();
        } else {
            notAnImage();
        }

        async function isImage() {
            const submission = new EmbedBuilder()
                .setTitle(`Submission #${subId}`)
                .setAuthor({ name: `${member.displayName}`, iconURL: `${avatar}` })
                .setImage(`${attachment.url}`)
                .setColor(`Blurple`)
                .setTimestamp()

            await channel.threads.create({ content: `<@${member.id}>`, name: `Submission #${subId}`, message: { embeds: [submission] } });
            return interaction.reply({ content: `Submission sent!`, ephemeral: true, embeds: [submission] });
        }

        async function notAnImage() {
            return interaction.reply({ content: `I can't find an image. Are you sure you submitted an image?`, ephemeral: true });
        }
    }
}