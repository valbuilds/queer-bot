const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`meme`)
        .setDescription(`get a random transfem meme`)
        .addBooleanOption(option =>
            option.setName(`hide`)
                .setDescription(`want to hide this meme from others?`)
                .setRequired(true)),
    async execute(interaction) {
        const share = interaction.options.getBoolean(`share`);
        const meme = Math.floor(Math.random() * 9)
        const interactorU = interaction.user;

        if (meme === 0) {
            const send = new EmbedBuilder()
                .setImage('https://cdn.discordapp.com/attachments/876442194377080872/1102542268163952690/B845A0FC-7EFC-4BC1-83F7-3A7C6A65177F.jpg')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        } else if (meme === 1) {
            const send = new EmbedBuilder()
                .setImage('https://media.discordapp.net/attachments/876442194377080872/1102542268407238666/ED31511F-2BC3-484A-8F94-453B16031A9A.jpg?width=617&height=671')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        } else if (meme === 2) {
            const send = new EmbedBuilder()
                .setImage('https://cdn.discordapp.com/attachments/876442194377080872/1102542268667269190/1CEBDD1A-684B-42BE-9EF1-77C0EC9F46F6.jpg')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        } else if (meme === 3) {
            const send = new EmbedBuilder()
                .setImage('https://cdn.discordapp.com/attachments/876442194377080872/1102542268952498176/8DFF6788-3A7E-434B-917F-A853787737A8.jpg')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        } else if (meme === 4) {
            const send = new EmbedBuilder()
                .setImage('https://cdn.discordapp.com/attachments/876442194377080872/1102542269229310019/FB40936A-EE92-4004-BD20-127ABA99135E.jpg')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        } else if (meme === 5) {
            const send = new EmbedBuilder()
                .setImage('https://cdn.discordapp.com/attachments/876442194377080872/1102542269514518569/95B02351-4A75-43D9-B35E-532828FBE504.jpg')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        } else if (meme === 6) {
            const send = new EmbedBuilder()
                .setImage('https://cdn.discordapp.com/attachments/876442194377080872/1102542269770387577/84E24501-B55A-47DD-B45E-0E46D715500D.jpg')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        } else if (meme === 7) {
            const send = new EmbedBuilder()
                .setImage('https://cdn.discordapp.com/attachments/876442194377080872/1102542270051393546/451A5588-3808-4FBD-BAD9-EA8F99F64885.jpg')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        } else if (meme === 8) {
            const send = new EmbedBuilder()
                .setImage('https://cdn.discordapp.com/attachments/876442194377080872/1102542270378545182/6448C26C-04A6-4226-AE71-8513DBAC1A95.jpg')
                .setColor(`Blurple`)
            return interaction.reply({ content: `<@${interactorU.id}>, here u go!! :3`, embeds: [send], ephemeral: share })
        }
    }
}