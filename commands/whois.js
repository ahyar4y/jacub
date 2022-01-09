const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whois')
        .setDescription('Who is ..')
        .addUserOption(option => option.setName('user').setDescription('Name of the user').setRequired(true)),
    async execute(interaction) {
        const userMentioned = interaction.options.get(name);
        console.log(userMentioned);
        if (!userMentioned) return interaction.reply('Who?');

        //await interaction.reply(`${userMentioned.username}\n${userMentioned.id}\n${userMentioned.createdAt}\n${userMentioned.displayAvatarURL({ dynamic: true })}`);
    }
}
