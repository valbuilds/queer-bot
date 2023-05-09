const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`convert-fahrenheit-to-celsius`)
        .setDescription(`REMOVE THE FREEDOM`)
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

        const step1 = (input - 32);
        const output = (step1 / 1.8);

        const userFeedback = new EmbedBuilder()
            .setTitle(`Fahrenheit to Celsius`)
            .setDescription(`${input}°F is **${output}°C.**`)
            .setColor(`Blurple`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${userPfp}` });

        return interaction.reply({ embeds: [userFeedback] });
    }
}