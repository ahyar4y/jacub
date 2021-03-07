module.exports = {
    name: 'leave',
    description: 'leave',
    execute(message, args) {
        if (!message.guild.me.voice.channel) {
            return message.channel.send('I\'m not in a voice channel');
        }
        
        message.guild.me.voice.channel.leave();
    }
}