const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`council-enroll`)
        .setDescription(`Enroll in the elections!`)
        .addStringOption(option =>
            option.setName(`campaign-name`)
                .setDescription(`Name your campaign!`))
        .addStringOption(option =>
            option.setName(`party`)
                .setDescription(`What party do you want to be affiliated with?`)),
    async execute(interaction) {
        const member = interaction.member;
        const cName = interaction.options.getString(`campaign-name`);
        const party = interaction.options.getString(`party`);
        const channel = interaction.client.channels.cache.get(`1104374683111006280`);

        const form = new EmbedBuilder()
            .setTitle(`User enrollment`)
            .setDescription(`<@${member.id}>`)
            .addFields(
                { name: `Campaign Name`, value: `${cName}` },
                { name: `Party`, value: `${party}` },
            )

        const thread = await channel.threads.create({
            name: `${member.displayName}`,
            autoArchiveDuration: 60,
            type: ChannelType.PrivateThread,
            invitable: false,
        });
        await thread.send({ content: `<@${member.id}>, <@396723826232262656>`, embeds: [form] });
        await thread.members.add(`${member.id}`);
        return interaction.reply({ content: `Submission sent.` });
    }
}