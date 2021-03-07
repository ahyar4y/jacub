module.exports = {
    name: 'play',
    description: 'play',
    async execute(message, args) { // initial code, still takes long to play.
        if (!args.length) return message.channel.send('Play what?');

        const join = require('./join');
        const connection = await join.execute(message, args);
        
        if (!connection) return;

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

        const detail = await youtube.videos.list({
            id: vid.id.videoId,
            part: 'contentDetails'
        });

        const duration = detail.data.items[0].contentDetails.duration;

        message.channel.send(`Playing \`${vid.snippet.title} - ${duration}\``);
        
        const ytdl = require('ytdl-core');
        const dispatcher = connection.play(ytdl(vid.id.videoId, { filter: 'audioonly' }), { volume: process.env.VOLUME });
        dispatcher.on('finish', () => {
            dispatcher.destroy();
            console.log('finished');
        });        
    }
}