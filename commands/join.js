module.exports = {
    name: 'join',
    description: 'join',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            message.channel.send('You are not in a voice channel');
            return false;
        }

        return await message.member.voice.channel.join();
    }
    
}