const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`vent`)
        .setDescription(`Need to get something off your chest?`)
        .addStringOption(option =>
            option.setName(`details`)
                .setDescription(`Talk it out, babe.`)
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName(`anonymous`)
                .setDescription(`Note: Staff can still see anonymous vents.`)
                .setRequired(true)),
    async execute(interaction) {
        const anon = interaction.options.getBoolean(`anonymous`);
        const vent = interaction.options.getString(`details`);
        const user = interaction.user;
        const id = Math.floor(Math.random() * 9999);
        const userPfp = user.avatarURL({
            extension: `png`,
            forceStatic: false
        });
        const member = interaction.member;

        const logA = new EmbedBuilder()
            .setAuthor({ name: `⚠️ Messaging a user who sent an anonymous vent without proper reasoning is abuse and is grounds for demotion.` })
            .setTitle(`Anonymous Vent ID #${id}`)
            .setDescription(`> ${vent}`)
            .setColor(`Gold`)
            .addFields(
                { name: `Sent by:`, value: `||<@${user.id}>||` },
            )
        const ventA = new EmbedBuilder()
            .setTitle(`Anonymous Vent ID #${id}`)
            .setDescription(`> ${vent}`)
            .setColor(`Gold`)

        const ventAR = new EmbedBuilder()
            .setTitle(`Anonymous Vent ID #${id}`)
            .setDescription(`> ${vent}`)
            .setColor(`Gold`)
            .addFields(
                { name: `Staff can tell who sent an anonymous vent.`, value: `This is only for moderation purposes.\n*If a staff member contatcts you about this, please let a higher up know.*` },
            )

        const ventN = new EmbedBuilder()
            .setTitle(`Anonymous Vent ID #${id}`)
            .setDescription(`> ${vent}`)
            .setColor(`Gold`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${userPfp}` })

        async function ano() {
            const channel = interaction.client.channels.cache.get('1102132112280277052');
            const logChannel = interaction.client.channels.cache.get('1104393174526472212');
            await logChannel.send({ embeds: [logA] });
            await channel.send({ embeds: [ventA] });
            return interaction.reply({ content: `Sent!`, embeds: [ventAR], ephemeral: true });
        }

        async function def() {
            const channel = interaction.client.channels.cache.get('1103301352941158421');
            await channel.send({ embeds: [ventN] });
            return interaction.reply({ content: `Sent!`, embeds: [ventN], ephemeral: true });
        }

        if (anon) {
            ano();
        } else {
            def();
        }
    }
}