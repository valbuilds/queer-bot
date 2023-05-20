const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`suggest`)
        .setDescription(`Send in a suggestion!`)
        .addStringOption(option =>
            option.setName(`suggestion`)
                .setDescription(`Keep it concise. You can explain more when the thread is created.`)
                .setRequired(true)),
    async execute(interaction) {
        const member = interaction.member;
        const user = interaction.user;
        const avatar = user.avatarURL(
            { format: 'png', size: 512, forceStatic: false }
        );
        const suggestion = interaction.options.getString(`suggestion`);
        const channel = interaction.client.channels.cache.get('1102475983644278804');

        const tooLong = new EmbedBuilder()
            .setTitle(`Please keep it concise.`)
            .setDescription(`Discord limits forum channel names to be under 100 characters.`)
            .setColor(`DarkRed`)

        const suggested = new EmbedBuilder()
            .setTitle(`Suggestion`)
            .setDescription(`> ${suggestion}`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${avatar}` })
            .setColor(`Gold`)

        async function ru() {
            await channel.threads.create({ name: `${suggestion}`, message: { embeds: [suggested] } })
            return interaction.reply({ content: `Suggestion sent!`, ephemeral: true });
        }

        if (suggestion.length > 100) {
            return interaction.reply({ embeds: [tooLong], ephemeral: true });
        } else {
            ru();
        }
    }
}