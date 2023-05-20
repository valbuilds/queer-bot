const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`deny-suggestion`)
        .setDescription(`Denies suggestions.`)
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
            option.setName(`note`)
                .setDescription(`Describe why you rejected this suggestion.`)
                .setRequired(true)),
    async execute(interaction) {
        const title = interaction.options.getString(`title`);
        const suggestedBy = interaction.options.getUser(`suggested-by`);
        const note = interaction.options.getString(`note`);
        const channel = interaction.channel;

        // Change this to what fits your server!
        const tagDenied = `1109319768940490763`;

        const reply = new EmbedBuilder()
            .setTitle(`Suggestion denied.`)
            .setDescription(`<@${interaction.user.id}> has handled your suggestion!`)
            .addFields(
                { name: `Description of suggestion:`, value: `${title}`, inline: false },
                { name: `Suggested by:`, value: `<@${suggestedBy.id}>`, inline: true },
                { name: `Note:`, value: `${note}`, inline: false },
            )
            .setTimestamp()
            .setFooter({ text: `This message contains content written by the user who executed it. Queer Bot nor their developers endorse this content.` })
            .setColor(`Red`)
        
        if (channel.isThread) {
            isThreadOpen()
        } else {
            notThread();
        }

        async function isThreadOpen() {
            if (channel.isLocked) {
                alreadyResponded();
            } else {
                finalize();
            }
        }

        async function finalize() {
            await channel.setName(`${title}`);
            await channel.setAppliedTags([`${tagDenied}`]);
            await interaction.reply({ embeds: [reply] });
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