const whoCmds = (message) => {
	let member = message.mentions.members.first();
	giphy.search('gifs', { q: 'fail' }).then((response) => {
		var totalRespnses = response.data.length;
		var responseIndex = Math.floor(Math.random() * 10 + 1) % totalRespnses;
		var responseFinal = response.data[responseIndex];
		message.channel
			.send(`:joy: เขาคือ ${member.user.username} ไงละ ถามโง่ๆ`, {
				files: [ responseFinal.images.fixed_height.url ]
			})
			.catch(() => {
				// send a normal message without giphy
				message.channel.send(`:joy: เขาคือ ${member.user.username} ไงละ ถามโง่ๆ`);
			});
	});
};

module.exports = whoCmds;
