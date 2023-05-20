const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`accept-suggestion`)
        .setDescription(`Accepts suggestions.`)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName(`title`)
                .setDescription(`Describe the change.`)
                .setRequired(true)
                .setMaxLength(100))
        .addUserOption(option =>
            option.setName(`suggested-by`)
                .setDescription(`Who suggested it?`)
                .setRequired(true))
        .addStringOption(option =>
            option.setName(`changes-made`)
                .setDescription(`What changes did you make?`)
                .setRequired(true))
        .addStringOption(option =>
                    option.setName(`note`)
                        .setDescription(`Describe why you accepted this suggestion.`)
                        .setRequired(true))
        .addStringOption(option =>
            option.setName(`change-category`)
                .setDescription(`What category do the changes fall under? (Leave blank if none apply.)`)
                .addChoices(
                    { name: `New Expression`, value: `new-expression` },
                    { name: `New Channel`, value: `new-channel` },
                    { name: `Rename Channel`, value: `rename-channel` },
                )
                .setRequired(false)),
    async execute(interaction) {
        const title = interaction.options.getString(`title`);
        const suggestedBy = interaction.options.getUser(`suggested-by`);
        const category = interaction.options.getString(`change-category`);
        const changes = interaction.options.getString(`changes-made`);
        const note = interaction.options.getString(`note`);
        const channel = interaction.channel;

        // Change these to what fits your server!
        const tagAccepted = `1103803585164214312`;
        const tagNewExpression = `1103803744958820442`;
        const tagNewChannel = `1103803791637225525`;
        const tagRenameChannel = `1103803846255456318`;

        const reply = new EmbedBuilder()
            .setTitle(`Suggestion accepted!`)
            .setDescription(`<@${interaction.user.id}> has handled your suggestion!`)
            .addFields(
                { name: `Description of suggestion:`, value: `${title}`, inline: false },
                { name: `Suggested by:`, value: `<@${suggestedBy.id}>`, inline: true },
                { name: `Changes made:`, value: `${changes}`, inline: true },
                { name: `Note:`, value: `${note}`, inline: false },
            )
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
            .setColor(`Green`)
        
        if (channel.isThread) {
            isThreadOpen()
        } else {
            notThread();
        }

        async function isThreadOpen() {
            if (channel.isLocked) {
                alreadyResponded();
            } else {
                catagorise();
            }
        }

        async function catagorise() {
            if (category === `new-expression`) {
                newExpression();
            } else if (category === `new-channel`) {
                newChannel();
            } else if (category === `rename-channel`) {
                renameChannel();
            } else {
                noCategory();
            }
        }

        async function newExpression() {
            await channel.setName(`${title}`);
            await channel.setAppliedTags([`${tagAccepted}`, `${tagNewExpression}`]);
            await interaction.reply({ embeds: [reply] });
            await channel.setLocked(true);
        }
        async function newChannel() {
            await channel.setName(`${title}`);
            await channel.setAppliedTags([`${tagAccepted}`, `${tagNewChannel}`]);
            await interaction.reply({ embeds: [reply] });
            await channel.setLocked(true);
        }
        async function renameChannel() {
            await channel.setName(`${title}`);
            await channel.setAppliedTags([`${tagAccepted}`, `${tagRenameChannel}`]);
            await interaction.reply({ embeds: [reply] });
            await channel.setLocked(true);
        }
        async function noCategory() {
            await channel.setName(`${title}`);
            await channel.setAppliedTags([`${tagAccepted}`]);
            await interaction.reply({ embeds: [reply], content: `A category could not be found.` });
            await channel.setLocked(true);
        }

        async function notThread() {
            return interaction.reply({ content: `This channel is not a thread.`, ephemeral: true });
        }

        async function alreadyResponded() {
            return interaction.reply({ content: `This suggestion has already been responded to.`, ephemeral: true });
        }
    }
}