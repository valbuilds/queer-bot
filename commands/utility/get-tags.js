const { SlashCommandBuilder, EmbedBuilder, ChannelType, PermissionFlagsBits } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`get-tags`)
        .setDescription(`Get a list of tags in a forum channel.`)
        .addChannelOption(option =>
            option.setName(`channel`)
                .setDescription(`MUST BE FORUM CHANNEL`)
                .addChannelTypes(ChannelType.GuildForum)
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const channel = interaction.options.getChannel(`channel`)
        const member = interaction.member;
        
        const reply = new EmbedBuilder()
            .setTitle(`Guild Channel tags`)
            .setDescription(`I was asked to get the tags in <#${channel.id}>. Here they are.`)
            .setFields(
                { name: `Tags`, value: `${channel.availableTags}` },
            )
            .setColor(`Blurple`)
        
        console.log(channel.availableTags);

        return interaction.reply({ content: `The tags are in the bots console.`, ephemeral: true })
    }
}