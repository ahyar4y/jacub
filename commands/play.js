const { TeamMember } = require('discord.js');

module.exports = {
    name: 'play',
    description: 'play',
    async execute(message, args) { // initial code, still takes long to play.
        const {google} = require('googleapis');
        const {youtubeAPI} = require('../config.json');
        const youtube = google.youtube({
            version: 'v3',
            auth: youtubeAPI
        });

        const query = args.join(' ');
        
        message.channel.send(`Searching for \`${query}\``);

        const res = await youtube.search.list({
            part: 'id, snippet',
            q: query,
            type: 'video'
        });
        
        const vid = res.data.items[0];

        const connection = await message.member.voice.channel.join(); 
        
        if (!connection) {
            return message.channel.send('I\'m not in a voice channel');
        }

        message.channel.send(`Playing \`${vid.snippet.title}\``);
        
        const ytdl = require('ytdl-core');
        const dispatcher = connection.play(ytdl(vid.id.videoId, { filter: 'audioonly' }));
        dispatcher.on('finish', () => {
            dispatcher.destroy();
            console.log('finished');
        });        
    }
}