module.exports = {
    name: 'cmds',
    description: 'cmds',
    execute(message, args) {
        const fs = require('fs');
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        const commands = commandFiles.map(file => {
            file = file.slice(0, file.length - 3);
            file = '.' + file;
            return file;
        });
        message.channel.send('Available commands:');
        message.channel.send(commands);
    }
}