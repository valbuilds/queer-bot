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
        const explicit = interaction.options.getBoolean(`explicit`);
        const deniedBy = interaction.member;

        const channel = interaction.channel;

        const reply = new EmbedBuilder()
            .setTitle(`❎ Denied`)
            .setDescription(`<@${deniedBy.id}> has denied this submission.`)
            .addFields(
                { name: `Song name`, value: `${title}` },
                { name: `Song author`, value: `${creator}` },
                { name: `Reason`, value: `${reason}` },
                { name: `Marked as explicit by Spotify`, value: `${explicit}` },
            )

        if (channel.isThread) {
            isThread();
        } else {
            notAThread()
        }

        async function isThread() {
            if (!channel.locked) {
                finalize()
            } else if (channel.locked) {
                alreadyDone()
            }
        }

        async function finalize() {
            await channel.setName(`${title} by ${creator}`);
            await channel.setAppliedTags([`1107150512580734976`]);
            await interaction.reply({ embeds: [reply] });
            await channel.setLocked(true);
        }
        async function alreadyDone() {
            return interaction.reply({ content: `This submission has already been accepted.`, ephemeral: true });
        }
        async function notAThread() {
            return interaction.reply({ content: `This channel is not a thread.`, ephemeral: true });
        }
    }
}