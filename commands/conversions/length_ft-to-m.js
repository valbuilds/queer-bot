const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`convert-feet-to-meters`)
        .setDescription(`no more freedom 😔`)
        .addNumberOption(option =>
            option.setName(`input`)
                .setDescription(`input`)
                .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getNumber(`input`);
        const user = interaction.user;
        const userPfp = user.avatarURL({
            extension: `png`,
            forceStatic: false
        });
        const member = interaction.member;

        const output = (input / 3.2808);

        const userFeedback = new EmbedBuilder()
            .setTitle(`Feet to Meters`)
            .setDescription(`${input} feet is equal to **${output} meters**.`)
            .setColor(`Blurple`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${userPfp}` })

        return interaction.reply({ embeds: [userFeedback] });
    }
}