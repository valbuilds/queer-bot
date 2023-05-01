const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`suggest`)
        .setDescription(`Send in a suggestion!`)
        .addStringOption(option =>
            option.setName(`suggestion`)
                .setDescription(`What you want to suggest.`)
                .setRequired(true)),
    async execute(interaction) {
        const member = interaction.member;
        const user = interaction.user;
        const avatar = user.avatarURL(
            { format: 'png', size: 512, forceStatic: false }
        );
        const suggestion = interaction.options.getString(`suggestion`);
        const channel = interaction.client.channels.cache.get('1102475983644278804');

        const suggested = new EmbedBuilder()
            .setTitle(`Suggestion`)
            .setDescription(`> ${suggestion}`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${avatar}` })
            .setColor(`Gold`)

        channel.threads.create({ name: `${suggestion}`, message: { embeds: [suggested] } })


        return interaction.reply({ content: `Suggestion sent!`, ephemeral: true })
    }
}