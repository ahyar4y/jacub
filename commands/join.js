const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('join'),
    async execute(interaction) {
	const channel = interaction.member.voice.channel

	if (!channel) return interaction.reply('You need to join a voice channel first');

        const { joinVoiceChannel,
		createAudioPlayer,
		entersState,
		VoiceConnectionStatus
	} = require('@discordjs/voice');
	const player = createAudioPlayer();

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

	try {
	    await entersState(connection, VoiceConnectionStatus.Ready, 10e3);

	    connection.subscribe(player);

	    await interaction.reply(`Joined ${channel.name}`);
	} catch (error) {
	    connection.destroy();

	    throw error;
	}
    }
}
