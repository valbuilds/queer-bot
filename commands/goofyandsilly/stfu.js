const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName(`stfu`)
        .setDescription(`tell someone to shut it, bbc news style!`)
        .addUserOption(option =>
            option.setName(`target`)
                .setDescription(`who needs to shut it?`)
                .setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser(`target`);

        return interaction.reply({ content: `https://cdn.discordapp.com/attachments/1102126902963089408/1106459474518085632/stfu.mov <@${target.id}>` });
    }
}