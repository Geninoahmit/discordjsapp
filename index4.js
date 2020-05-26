const Discord = require('discord.js');
const client = new Discord.Client();
var guilds = client.guilds.cache.size;

client.on('ready', () => {
	client.user.setActivity(client.guilds.cache.size + " Guilds!", { type: 'WATCHING' })
	console.log('Bot ready!');
});


const prefix = "!";


client.on('message', message => {

	var args = message.content.split(/ +/)

	if(args[0] === prefix + "pfp"){
		if (message.mentions.users.first() == undefined) {
			message.channel.send(message.author.displayAvatarURL());
		} else {
			message.channel.send(message.mentions.users.first().displayAvatarURL());
		};
	} else if (args[0] === prefix + "members") {
		message.channel.send("This server has " + message.guild.memberCount + " members");
	} else if (args[0] === prefix + "info") {
		if (message.mentions.users.first() == undefined) {
			message.channel.send(JSON.stringify(message.author));
		} else {
			message.channel.send(JSON.stringify(message.mentions.users.first()));
		};
	} else if (args[0] === prefix + "help") {
		message.channel.send("pfp - get a pfp\nmembers - see how many members in your server\ninfo - user info for devs\nstats - see the bot stats\nhelp - the help command")
	} else if (args[0] === prefix + "stats") {
		message.channel.send("Guilds: " + client.guilds.cache.size)
	};



	var chance = Math.floor((Math.random() * 2500) + 1);
	if(chance === 2500){
		message.reply("You Won a 1 in 2500 chance!")
	}

});

client.on("guildCreate", guild => {
	client.user.setActivity(client.guilds.cache.size + " Guilds!", { type: 'WATCHING' })
	console.log("Joined a guild:" + guild.name);
});

client.on("guildDelete", guild => {
	client.user.setActivity(client.guilds.cache.size + " Guilds!", { type: 'WATCHING' })
	console.log("Left a guild: " + guild.name);
});

client.login('NzA1MzM3MzQ4NTA1OTkzMjM2.XroPpw.fkLSX87t1DztGXaZvVihDOpTuBI');