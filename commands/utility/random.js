const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`random`)
        .setDescription(`Choose a random option.`)
        .addBooleanOption(option =>
            option.setName(`hide`)
                .setDescription(`Do you want to have the result in public? (if false, others will know you ran this command.)`)
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName(`max`)
                .setDescription(`Maximum value.`)
                .setRequired(true)),
    async execute(interaction) {
        const user =  interaction.user;
        const max = interaction.options.getInteger(`max`);
        const hide = interaction.options.getBoolean(`hide`);
        const output = Math.floor(Math.random() * max);

        const emb = new EmbedBuilder()
            .setTitle(`Alrighty! Here's your results!`)
            .setDescription(`From 0 to ${max}, your randomly picked number is: **${output}**!`)
            .setColor(`Blurple`)
            .setTimestamp()
        
        return interaction.reply({ content: `<@${user.id}>`, ephemeral: hide, embeds: [emb] });
    }
}