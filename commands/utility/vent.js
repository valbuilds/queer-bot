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
                .setRequired(true))
        .addStringOption(option =>
            option.setName(`content-warning`)
                .setDescription(`Add a content warning.`)
                .setRequired(false)),
    async execute(interaction) {
        // Basic definitions to make my life easier
        const anon = interaction.options.getBoolean(`anonymous`);
        const vent = interaction.options.getString(`details`);
        const cw = interaction.options.getString(`content-warning`);
        const id = Math.floor(Math.random() * 9999);
        const userPfp = interaction.user.avatarURL({
            extension: `png`,
            forceStatic: false
        });
        const member = interaction.member;

        // EDIT THESE TO FIT YOUR SERVER
        const logChannel = interaction.client.channels.cache.get('1109315906414321785');
        const ventChannel = interaction.client.channels.cache.get('1108797297900400650');
        // IF YOU ARE USING A NORMAL TEXT CHANNEL, COMMENT THE FOLLOWING LINES:
        // 38, 39, 40, 198, 205, 213, 220
        // AND UNCOMMENT THE FOLLOWING LINES:
        // 199, 206, 214, 221
        const tagAnonoymous = `1108797469795557397`
        const tagIdentified =  `1108797559629168661`
        const tagInformation = `1108797616864632873`

        // Anonymous Embeds
        // With content warning
        const AECW = new EmbedBuilder()
            .setColor(`Blurple`)
            .setTitle(`Vent #${id}`)
            .setDescription(`Content Warning: ${cw}\n> ||${vent}||`)
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Without content warning
        const AE = new EmbedBuilder()
            .setColor(`Blurple`)
            .setTitle(`Vent #${id}`)
            .setDescription(`> ${vent}`)
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Identified Embeds
        // With content warning
        const IECW = new EmbedBuilder()
            .setColor(`Blurple`)
            .setTitle(`Vent #${id}`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${userPfp}` })
            .setDescription(`Content Warning: ${cw}\n> ||${vent}||`)
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Without content warning
        const IE = new EmbedBuilder()
            .setColor(`Blurple`)
            .setTitle(`Vent #${id}`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${userPfp}` })
            .setDescription(`> ${vent}`)
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Log embeds
        // Anonymous w/ content warning
        const LogAECW = new EmbedBuilder()
            .setColor(`Gold`)
            .setTitle(`Vent ${id}`)
            .setAuthor({ name: `⚠️ Messaging a user who sent an anonymous vent without proper reasoning is considered abuse and is grounds for demotion.` })
            .setDescription(`Content Warning: ${cw}\n> ||${vent}||`)
            .addFields(
                { name: `Sent by`, value: `||<@${member.id}>||` }
            )
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Anonymous w/o content warning
        const LogAE = new EmbedBuilder()
            .setColor(`Gold`)
            .setTitle(`Vent ${id}`)
            .setAuthor({ name: `⚠️ Messaging a user who sent an anonymous vent without proper reasoning is considered abuse and is grounds for demotion.` })
            .setDescription(`> ${vent}`)
            .addFields(
                { name: `Sent by`, value: `||<@${member.id}>||` }
            )
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Identified w/ content warning
        const LogIECW = new EmbedBuilder()
            .setColor(`Gold`)
            .setTitle(`Vent ${id}`)
            .setAuthor({ name: `The user who sent this has decided to be identifed.` })
            .setDescription(`Content Warning: ${cw}\n> ||${vent}||`)
            .addFields(
                { name: `Sent by`, value: `<@${member.id}>` }
            )
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Identified w/o content warning
        const LogIE = new EmbedBuilder()
            .setColor(`Gold`)
            .setTitle(`Vent ${id}`)
            .setAuthor({ name: `The user who sent this has decided to be identifed.` })
            .setDescription(`> ${vent}`)
            .addFields(
                { name: `Sent by`, value: `<@${member.id}>` }
            )
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Reply embeds
        // Anonymous w/ content warning
        const ReplyAECW = new EmbedBuilder()
            .setColor(`Green`)
            .setTitle(`Vent ${id} sent!`)
            .addFields(
                { name: `Anonymous?`, value: `true`, inline: true },
                { name: `Content Warning?`, value: `true\n> ${cw}`, inline: true },
                { name: `Vent details:`, value: `> ${vent}`, inline: true },
            )
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Anonymous w/o content warning
        const ReplyAE = new EmbedBuilder()
            .setColor(`Green`)
            .setTitle(`Vent ${id} sent!`)
            .addFields(
                { name: `Anonymous?`, value: `true`, inline: true },
                { name: `Content Warning?`, value: `false`, inline: true },
                { name: `Vent details:`, value: `> ${vent}`, inline: true },
            )
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Identified w/ content warning
        const ReplyIECW = new EmbedBuilder()
            .setColor(`Green`)
            .setTitle(`Vent ${id} sent!`)
            .addFields(
                { name: `Anonymous?`, value: `false`, inline: true },
                { name: `Content Warning?`, value: `true\n> ${cw}`, inline: true },
                { name: `Vent details:`, value: `> ${vent}`, inline: true },
            )
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Identified w/o content warning
        const ReplyIE = new EmbedBuilder()
            .setColor(`Green`)
            .setTitle(`Vent ${id} sent!`)
            .addFields(
                { name: `Anonymous?`, value: `false`, inline: true },
                { name: `Content Warning?`, value: `false`, inline: true },
                { name: `Vent details:`, value: `> ${vent}`, inline: true },
            )
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
        // Log disclosure
        const LogDisclosure = new EmbedBuilder()
            .setColor(`Greyple`)
            .setTitle(`Anonymous vents are logged.`)
            .setDescription(`Even though they are logged, staff members are not allowed to message/punish you without proper reasoning. **If a staff member messages/punishes you without proper reasoning, contact a higher up.**`)
            .setTimestamp()

        // Is anonymous?
        if (anon) {
            anonymous();
        } else {
            identfied();
        }
        // Is anonymous
        async function anonymous() {
            // Is there a content warning?
            if (cw === null) {
                anonymous2();
            } else {
                anonymousCW();
            }
        }
        // Is not anonymous
        async function identfied() {
            // Is there a content warning?
            if (cw === null) {
                identfied2();
            } else {
                identfiedCW();
            }
        }

        // Anonymous replies
        // With content warning
        async function anonymousCW() {
            await logChannel.send({ embeds: [LogAECW] });
            await ventChannel.threads.create({ name: `Vent ${id}`, message: { embeds: [AECW] }, appliedTags: [`${tagAnonoymous}`] });
            // await logChannel.send({ embeds: [AECW] });
            return interaction.reply({ embeds: [ReplyAECW, LogDisclosure], ephemeral: true });
        }
        // Without content warning
        async function anonymous2() {
            await logChannel.send({ embeds: [LogAE] });
            await ventChannel.threads.create({ name: `Vent ${id}`, message: { embeds: [AE] }, appliedTags: [`${tagAnonoymous}`] });
            // await logChannel.send({ embeds: [AE] });
            return interaction.reply({ embeds: [ReplyAE, LogDisclosure], ephemeral: true });
        }
        // Identified replies
        // With content warning
        async function identfiedCW() {
            await logChannel.send({ embeds: [LogIECW] });
            await ventChannel.threads.create({ name: `Vent ${id}`, message: { embeds: [IECW] }, appliedTags: [`${tagIdentified}`] });
            // await logChannel.send({ embeds: [IECW] });
            return interaction.reply({ embeds: [ReplyIECW, LogDisclosure], ephemeral: true });
        }
        // Without content warning
        async function identfied2() {
            await logChannel.send({ embeds: [LogIE] });
            await ventChannel.threads.create({ name: `Vent ${id}`, message: { embeds: [IE] }, appliedTags: [`${tagIdentified}`] });
            // await logChannel.send({ embeds: [IE] });
            return interaction.reply({ embeds: [ReplyIE, LogDisclosure], ephemeral: true });
        }
    }
}