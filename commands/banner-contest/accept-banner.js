const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`accept-banner-submission`)
        .setDescription(`Accepts banner submissions.`)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName(`title`)
                .setDescription(`Describe the banner.`)
                .setRequired(true)
                .setMaxLength(100))
        .addUserOption(option =>
            option.setName(`submittor`)
                .setDescription(`Who submitted it?`)
                .setRequired(true))
        .addStringOption(option =>
            option.setName(`reason`)
                .setDescription(`Reasoning`)
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName(`og-work`)
                .setDescription(`Is it original work?`)
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName(`ris`)
                .setDescription(`Was the image inputted to a reverse image search?`)
                .setRequired(true)),
    async execute(interaction) {
        const title = interaction.options.getString(`title`);
        const submittor = interaction.options.getMember(`submittor`);
        const reason = interaction.options.getString(`reason`);
        const ogWork = interaction.options.getBoolean(`og-work`);
        const ris = interaction.options.getBoolean(`ris`);
        const acceptedBy = interaction.member;

        const channel = interaction.channel;

        const reply = new EmbedBuilder()
            .setTitle(`✅ Accepted`)
            .setDescription(`<@${acceptedBy.id}> has accepted this submission.`)
            .addFields(
                { name: `Banner Description`, value: `${title}` },
                { name: `Submitted by`, value: `${submittor}` },
                { name: `Reason`, value: `${reason}` },
                { name: `Original Work`, value: `${ogWork} (RIS confrimed: ${ris})` },
            )

        if (channel.isThread) {
            isThread();
        } else {
            notAThread();
        }

        async function isThread() {
            if (!channel.locked) {
                finalize()
            } else if (channel.locked) {
                alreadyDone()
            }
        }

        // 1107667009388425336: July 2023
        // 1108411016469024778: Accepted
        // 1108411094776676372: Denied

        async function finalize() {
            await channel.setName(`${title}`);
            await channel.setAppliedTags([`1107667009388425336`, `1108411016469024778`]);
            await interaction.reply({ embeds: [reply] });
            await channel.setLocked(true);
        }
        async function alreadyDone() {
            return interaction.reply({ content: `This submission has already been replied to.`, ephemeral: true });
        }
        async function notAThread() {
            return interaction.reply({ content: `This channel is not a thread.`, ephemeral: true });
        }
    }
}