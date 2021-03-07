module.exports = {
    name: 'join',
    description: 'join',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if (voiceChannel) {
            if (message.client.voice.connections.some(conn => conn.channel.id === voiceChannel.id)) {
                return message.channel.send('Already in');
            }
            await message.member.voice.channel.join();
        }
    }
    
}