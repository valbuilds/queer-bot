const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`deny-submission`)
        .setDescription(`Denies music submissions.`)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName(`title`)
                .setDescription(`Song name`)
                .setRequired(true))
        .addStringOption(option =>
            option.setName(`creator`)
                .setDescription(`Creator(s)`)
                .setRequired(true))
        .addBooleanOption(option=>
            option.setName(`multiple`)
                .setDescription(`Are there multiple authors?`)
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName(`explicit`)
                .setDescription(`Is the song marked as explicit on Spotify?`)
                .setRequired(true))
        .addStringOption(option =>
            option.setName(`reason`)
                .setDescription(`Reasoning`)
                .setRequired(true)),
    async execute(interaction) {
        const title = interaction.options.getString(`title`);
        const creator = interaction.options.getString(`creator`);
        const reason = interaction.options.getString(`reason`);
        const multi = interaction.options.getBoolean(`multiple`);
        const explicit = interaction.options.getBoolean(`explicit`);
        const acceptedBy = interaction.member;

        const reply = new EmbedBuilder()
            .setTitle(`✅ Accepted`)
            .setDescription(`<@${acceptedBy.id}> has denied this submission.`)
            .addFields(
                { name: `Song name`, value: `${title}` },
                { name: `Song author`, value: `${creator}` },
                { name: `Reason`, value: `${reason}` },
                { name: `Marked as explicit by Spotify`, value: `${explicit}` },
            )
        const replyMulti = new EmbedBuilder()
            .setTitle(`✅ Accepted`)
            .setDescription(`<@${acceptedBy.id}> has denied this submission.`)
            .addFields(
                { name: `Song name`, value: `${title}` },
                { name: `Song authors`, value: `${creator}` },
                { name: `Reason`, value: `${reason}` },
                { name: `Marked as explicit by Spotify`, value: `${explicit}` },
            )

        if (multi === `true`) {
            return interaction.reply({ embeds: [replyMulti] });
        } else if (multi === `false`) {
            return interaction.reply({ embeds: [reply] });
        }
    }
}