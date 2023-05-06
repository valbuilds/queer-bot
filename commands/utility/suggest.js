const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName(`suggest`)
        .setDescription(`Send in a suggestion!`)
        .addStringOption(option =>
            option.setName(`suggestion`)
                .setDescription(`Keep is concise.`)
                .setRequired(true))
        .addStringOption(option =>
            option.setName(`anon`)
                .setDescription(`Set this to true if you want to send a suggestion anonomously.`)
                .setRequired(true)
                .addChoices(
                    { name: `True`, value: `true` },
                    { name: `False`, value: `false` },
                )),
    async execute(interaction) {
        const member = interaction.member;
        const user = interaction.user;
        const avatar = user.avatarURL(
            { format: 'png', size: 512, forceStatic: false }
        );
        const suggestion = interaction.options.getString(`suggestion`);
        const channel = interaction.client.channels.cache.get('1102475983644278804');
        const anon = interaction.options.getString(`anon`);

        const tooLong = new EmbedBuilder()
            .setTitle(`Please keep it concise.`)
            .setDescription(`Discord limits forum channel names to be under 100 characters.`)
            .setColor(`DarkRed`)

        const suggestedN = new EmbedBuilder()
            .setTitle(`Suggestion`)
            .setDescription(`> ${suggestion}`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${avatar}` })
            .setColor(`Gold`)

        const suggestedA = new EmbedBuilder()
            .setTitle(`Suggestion`)
            .setDescription(`> ${suggestion}`)
            .setAuthor({ name: `Anonomous` })
            .setColor(`Gold`)

        console.log(suggestion.length);

        async function ru() {
            if (anon === `true`) {
                await channel.threads.create({ name: `${suggestion}`, message: { embeds: [suggestedA] } });
                return interaction.reply({ content: `Suggestion sent!`, ephemeral: true });
            } else if (anon === `false`) {
                await channel.threads.create({ name: `${suggestion}`, message: { embeds: [suggestedN] } })
                return interaction.reply({ content: `Suggestion sent!`, ephemeral: true });
            }
        }

        if (suggestion.length > 100) {
            return interaction.reply({ embeds: [tooLong], ephemeral: true });
        } else {
            ru();
        }
    }
}