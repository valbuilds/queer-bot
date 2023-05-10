const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`convert-celsius-to-fahrenheit`)
        .setDescription(`ADD THE FREEDOM`)
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

        const step1 = (input * 1.8);
        const output = (step1 + 32);

        const userFeedback = new EmbedBuilder()
            .setTitle(`Celsius to Fahrenheit`)
            .setDescription(`${input}°C is equal to **${output}°F.**`)
            .setColor(`Blurple`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${userPfp}` })

        return interaction.reply({ embeds: [userFeedback] });
    }
}