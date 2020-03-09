const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(giphyToken);

const { renderCommand } = require('./commands/core');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', (message) => {
	renderCommand(message);
});
