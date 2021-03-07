module.exports = {
    name: 'volume',
    description: 'volume',
    async execute(message, args) {
        if (!args.length) return message.channel.send(`Volume is ${process.env.VOLUME}`);
        if (args.length != 1) return;
        if (isNaN(args[0])) return;

        message.channel.send(`Volume set to ${args[0]}`);

        process.env.VOLUME = args[0];

        if (message.guild.me.voice.channel) {
            const voiceChannel = await message.member.voice.channel.join();

            if (voiceChannel.dispatcher) voiceChannel.dispatcher.setVolume(process.env.VOLUME);
        }
    }
}