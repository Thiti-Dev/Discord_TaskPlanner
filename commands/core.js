const { prefix, token, giphyToken } = require('../config.json');

// Unrelated-functional
const whoCmds = require('./whoCmds');
const kickCmds = require('./kickCmds');

const renderCommand = (message) => {
	if (message.content.startsWith(`${prefix}who`)) {
		whoCmds(message);
	} else if (message.content.startsWith(`${prefix}kick`)) {
		kickCmds(message);
	}
};

module.exports = { renderCommand };
