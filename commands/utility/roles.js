const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName(`roles`)
        .setDescription(`Self roles.`)
        .addSubcommand(subcommand =>
            subcommand
                .setName(`list`)
                .setDescription(`Lists all available self-roles.`)
                .addStringOption(option =>
                    option
                        .setName(`category`)
                        .setDescription(`Choose a category`)
                        .addChoices(
                            { name: `Colours`, value: `colours` },
                            { name: `Pronouns`, value: `pronouns` },
                            { name: `Pings`, value: `pings` },
                        )))
        .addSubcommand(subcommand =>
            subcommand
                .setName(`modify`)
                .setDescription(`Change your roles.`)
                .addStringOption(option =>
                    option
                    .setName(`category`)
                    .setDescription(`Choose a category`)
                        .addChoices(
                            { name: `Colours`, value: `colours` },
                            { name: `Pronouns`, value: `pronouns` },
                            { name: `Pings`, value: `pings` },
                        )
                        .setRequired(true))),
    async execute(interaction) {

        const sub = interaction.options.getSubcommand()
        const user = interaction.user
        const member = interaction.member

        if (sub === `list`) {
            listRoles();
        } else if (sub === `modify`) {
            modifyRoles();
        }

        function listRoles() {
            const cat = interaction.options.getString(`category`);

            const listAll = new EmbedBuilder()
                .setTitle(`Self-Roles`)
                .addFields(
                    { name: `Colours`, value: `<@&1102126828619042898>\n<@&1102126830133194832>\n<@&1102126831055929414>\n<@&1102126832045797406>\n<@&1102126833207623721>` },
                    { name: `Pronouns`, value: `<@&1102126851247325194>\n<@&1102126852232990720>\n<@&1102405776531796029>\n<@&1102405879233523832>\n<@&1102405879808147506>\n<@&1102406005381402674>\n<@&1102406132544307301>\n<@&1102406179411460206>\n<@&1102406219517411358>\n<@&1102406257043841064>\n<@&1102406257731715172>\n<@&1102406583247437884>\n<@&1102406716722790571>` },
                    { name: `Pings`, value: `working on it...` },
                )
                .setTimestamp()
                .setFooter({ text: `Use /roles modify to change your roles.` })

            const listColours = new EmbedBuilder()
                .setTitle(`Self-Roles - Colours`)
                .setDescription(`<@&1102126828619042898>\n<@&1102126830133194832>\n<@&1102126831055929414>\n<@&1102126832045797406>\n<@&1102126833207623721>`)
                .setTimestamp()
                .setFooter({ text: `Use /roles modify to change your roles.` })

            const listPronouns = new EmbedBuilder()
                .setTitle(`Self-Roles - Colours`)
                .setDescription(`<@&1102126851247325194>\n<@&1102126852232990720>\n<@&1102405776531796029>\n<@&1102405879233523832>\n<@&1102405879808147506>\n<@&1102406005381402674>\n<@&1102406132544307301>\n<@&1102406179411460206>\n<@&1102406219517411358>\n<@&1102406257043841064>\n<@&1102406257731715172>\n<@&1102406583247437884>\n<@&1102406716722790571>`)
                .setTimestamp()
                .setFooter({ text: `Use /roles modify to change your roles.` })

            const listPings = new EmbedBuilder()
                .setTitle(`Self-Roles - Pings`)
                .setDescription(`soon:tm:`)
                .setTimestamp()
                .setFooter({ text: `Use /roles modify to change your roles.` })

            if (!cat) {
                return interaction.reply({ embeds: [listAll], ephemeral: true })
            } else if (cat) {
                if (cat === `colours`) {
                    return interaction.reply({ embeds: [listColours], ephemeral: true })
                } else if (cat === `pronouns`) {
                    return interaction.reply({ embeds: [listPronouns], ephemeral: true })
                } else if (cat === `pings`) {
                    return interaction.reply({ embeds: [listPings], ephemeral: true })
                }
            }
        }

        function modifyRoles() {
            return interaction.reply({ content: `Coming soon:tm:`, ephemeral: true })
        }
    }
}