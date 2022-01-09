const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('help'),
    async execute(interaction) {
        const fs = require('fs');
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        const commands = commandFiles.map(file => {
            file = file.slice(0, file.length - 3);
            file = '/' + file;
            return file;
        });
        await interaction.reply('Available commands:');
        await interaction.reply(commands);
    }
}
