const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('What JACUB can do'),
    async execute(interaction) {
        const fs = require('fs');
        let commands = '';
	const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

	for (let command of commandFiles) {
            command = command.slice(0, command.length - 3);
            commands += ('/' + command + '\n');
        }

	await interaction.reply('Available commands:'	+'\n'+
				    commands);
    }
}
