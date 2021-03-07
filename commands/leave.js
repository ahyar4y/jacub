module.exports = {
    name: 'leave',
    description: 'leave',
    execute(message, args) {
        if (!message.guild.me.voice.channel) {
            return message.channel.send('Wdym');
        }
        
        message.guild.me.voice.channel.leave();
    }
}