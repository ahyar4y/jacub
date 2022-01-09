const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Leave voice channel'),
    async execute(interaction) {
        //if (!interaction.guild.me.voice.channel) {
        //    return interaction.reply('I\'m not in a voice channel');
        //}
	const channel = interaction.member.voice.channel;
	const { getVoiceConnection } = require('@discordjs/voice');
	const connection = getVoiceConnection(interaction.member.guild.id);

	if (!connection) return await interaction.reply('Not connected to any voice channel');

	connection.destroy();

	await interaction.reply(`Leaving ${channel.name}`);

        //interaction.guild.me.voice.channel.leave();
    }
}
