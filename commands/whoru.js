const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whoru')
        .setDescription('Who JACUB is'),
    async execute(interaction) {
        await interaction.reply(`Just Another Casual Utilty Bot, ${interaction.user.username}`);
    }
}
