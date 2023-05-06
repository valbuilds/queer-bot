const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`vent`)
        .setDescription(`Need to get something off your chest?`)
        .addStringOption(option =>
            option.setName(`details`)
                .setDescription(`Talk it out, babe.`))
        .addBooleanOption(option =>
            option.setName(`anon`)
                .setDescription(`Want to secretly send in a rant? Set this to true.`)),
    async execute(interaction) {
        const anon = interaction.options.getBoolean(`anon`);
        const rant = interaction.options.getString(`details`);
        const user = interaction.user;
        const id = Math.floor(Math.random() * 9999);
        const userPfp = user.avatarURL({
            extension: `png`,
            forceStatic: false
        })

        const logA = new EmbedBuilder()
            .setTitle(`Anonymous Rant ID #${id}`)
            .setDescription(`> ${rant}`)
            .setColor(`Gold`)
            .addFields(
                { name: `Sent by:`, value: `||<@${user.id}>||` },
            )
        const rantA = new EmbedBuilder()
            .setTitle(`Anonymous Rant ID #${id}`)
            .setDescription(`> ${rant}`)
            .setColor(`Gold`)

        const rantN = new EmbedBuilder()
            .setTitle(`Anonymous Rant ID #${id}`)
            .setDescription(`> ${rant}`)
            .setColor(`Gold`)
            .setAuthor({ name: `${user.username}`, iconURL: `${userPfp}` })

        async function ano() {
            const channel = interaction.client.channels.cache.get('1102132112280277052');
            const logChannel = interaction.client.channels.cache.get('1104393174526472212');
            await logChannel.send({ embeds: [logA] });
            await channel.send({ embeds: [rantA] });
            return interaction.reply({ content: `Sent!`, embeds: [rantA], ephemeral: true });
        }

        async function def() {
            const channel = interaction.client.channels.cache.get('1103301352941158421');
            await channel.send({ embeds: [rantN] });
            return interaction.reply({ content: `Sent!`, embeds: [rantN], ephemeral: true });
        }

        if (anon) {
            ano();
        } else {
            def();
        }
    }
}