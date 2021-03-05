module.exports = {
    name: 'join',
    description: 'join',
    async execute(message, args) {
        if (message.member.voice.channel) await message.member.voice.channel.join();
    }
}