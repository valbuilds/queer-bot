const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    cooldown: 30,
    data: new SlashCommandBuilder()
        .setName(`help`)
        .setDescription(`Learn about my features!`),
    async execute(interaction) {
        const helpEmbed = new EmbedBuilder()
            .setTitle(`Help`)
            .setURL(`http://qbot.katiebuilder.xyz/`)
            .addFields(
                { name: `Utility`, value: '</help:1102412097473761380> - Replies with this message.\n</suggest:1102473783144624178> - Suggest features for the server\n</vent:1104400399462572175> - Got something you need to get off your chest?' },
                { name: `Silly`, value: `</brisket:1104400399462572172> - brisket best girl\n</hi:1104400399462572173> - say hi!\n</meme:1104400399462572174> - get a random transfem meme.\n</olivia:1105213327770136576> - The real brisket :3` },
                { name: `Converstions`, value: `</convert-celsius-to-fahrenheit:1105612452382658630> - It does what the command name says!\n</convert-fahrenheit-to-celsius:1105611417446527059> - It does what the command name says!\n</convert-feet-to-meters:1105686028439793665> - It does what the command name says!\n</convert-meters-to-feet:1105686028439793664> - It does what the command name says!` }
            )
            .setFooter({ text: `Version 0.4` })
            .setTimestamp()
            .setColor(`Blurple`)

        return interaction.reply({ embeds:[helpEmbed], ephemeral: true });
    }
}