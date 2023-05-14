const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`council-info`)
        .setDescription(`Learn more about the earth council.`),
    async execute(interaction) {
        const emb = new EmbedBuilder()
            .setTitle(`The not-normal Earth Council.`)
            .setDescription(`Formed of a few people, this is temporary and wil change after the elections.`)
            .addFields(
                { name: `Speaker of the Earth:`, value: `<@499287211381096458>` },
                { name: `Current members:`, value: `<@1036284666178703440>\n<@770726101093056522>\n<@396723826232262656>`},
            )
        return interaction.reply({ embeds: [emb], ephemeral: true });
    }
}