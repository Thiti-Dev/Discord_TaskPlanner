const kickCmds = (message) => {
	if (message.content.startsWith(`${prefix}kick`)) {
		if (message.member.hasPermission([ 'KICK_MEMBERS', 'BAN_MEMBERS' ])) {
			let member = message.mentions.members.first();
			member.kick().then((member) => {
				giphy.search('gifs', { q: 'fail' }).then((response) => {
					console.log(response);
				});

				message.channel.send(':wave: ' + member.displayName + ' ได้ถูกเตะออกจากเซิฟเวอร์แล้ว');
			});
		}
	}
};

module.exports = kickCmds;
