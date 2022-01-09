const { SlashCommandBuilder } = require('@discordjs/builders');
const { channel } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('join'),
    async execute(interaction) {
        const { joinVoiceChannel } = require('@discordjs/voice');

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
    }
}
