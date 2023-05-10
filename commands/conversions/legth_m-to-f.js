const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`convert-meters-to-feet`)
        .setDescription(`more freedom‼️`)
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

        const output = (input * 3.2808);

        const userFeedback = new EmbedBuilder()
            .setTitle(`Meters to Feet`)
            .setDescription(`${input} meters is equal to **${output} feet**.`)
            .setColor(`Blurple`)
            .setAuthor({ name: `${member.displayName}`, iconURL: `${userPfp}` })
            
        return interaction.reply({ embeds: [userFeedback] });
    }
}