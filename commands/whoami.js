const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whoami')
        .setDescription('Who you are'),
    async execute(interaction) {
        await interaction.reply(`${interaction.user.username}\n${interaction.user.id}\n${interaction.user.createdAt}\n${interaction.user.displayAvatarURL({ dynamic: true })}`);
    },
};
