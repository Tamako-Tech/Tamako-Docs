---
id: welcome
title: Welcome to Docs
hide_title: true
sidebar_label: Home
description: Tamako is a simple yet Powerful Discord bot. Main Purpose of Tamako is to reduce number of bots and use Tamako as all in one bot
hide_table_of_contents: true
---
## &ensp;Welcome to [Tamako](https://discord.com/api/oauth2/authorize?client_id=721100913611112470&permissions=104328385&scope=bot) Docs
&ensp;&ensp;
###### &ensp;&ensp;Tamako is a simple yet Powerful Discord bot. Main Purpose of Tamako is to reduce number of bots and use Tamako as all in one bot
---
<br />

### Why should you invite Tamako?
Tamako is a simple yet Powerful Discord bot. Main Purpose of Tamako is to reduce number of bots and use Tamako as all in one bot

Tamako can:
<font size='3'><img src={require('./assets/check_mark.png').default} height='15'/> Spice up chat environment with the use of roleplay/action commands such as pat, hug, slap, and more! </font> <br />
<font size='3'><img src={require('./assets/check_mark.png').default} height='15'/>  Search through the internet for information resources through various functions such as anime information lookup, games (via steam), or even time on some cities. </font> <br />
<font size='3'><img src={require('./assets/check_mark.png').default} height='15'/>  Ease the work of moderators by managing the server through various single commands. </font> <br />
<font size='3'><img src={require('./assets/check_mark.png').default} height='15'/>  Play Music in your Server or have fun with soundboard </font> <br />
<font size='3'><img src={require('./assets/check_mark.png').default} height='15'/> Show Server stats embed into topic of a channel or a dedicated channel </font> <br />
<font size='3'><img src={require('./assets/check_mark.png').default} height='15'/>Show an awesome ticket support system for your server</font> <br />
<font size='3'><img src={require('./assets/check_mark.png').default} height='15'/> Play Games with Tamako or other users </font> <br />


### Invite
You may invite Tamako through [Invite Link](https://discord.com/api/oauth2/authorize?client_id=721100913611112470&permissions=104328385&scope=bot/).

### Support
If you have questions regarding the bot and it's use, please do join our support server at https://discord.com/invite/dDnmY56/.

## Options

Options in Tamako are configured using channel topics. Place the option
in the appropriate channel's topic to use it.

* `<tamako:disable-leave>` Disables leave messages (Place in the channel you recieve welcome messages in).
* `<tamako:phone>` Allows a channel to recieve phone calls from the `phone` command.
* `<tamako:phone:no-voicemail>` Prevents this channel from recieving voicemails for missed calls.
* `<tamako:phone:no-random>` Makes the channel only able to be called directly in the `phone` command, rather than be picked at random.
* `<tamako:phone:block:INSERTIDHERE>` Blocks a channel or server from contacting the channel via phone.
* `<tamako:phone-book:hide>` Hides a channel from the `phone-book` command.
* `<tamako:portal>` Allows a channel to recieve portal messages from the `portal-send` command.
* `<tamako:portal:hide-name>` Hides the channel and server name from the `portal-send` command when your channel is picked.


## Other Features

Some Tamako features aren't technically commands, but are part of Tamako
nonetheless.

- Leave messages are automatically sent to any channel that recieves welcome messages. These can be turned off with [an option](#options).
- In Tamako's home server, Tamako posts a random meme from Reddit every hour using a webhook.
- Some commands will automatically run when a certain phrase is said in any message, regardless of if the command itself was called or not. These are:
	* Saying "no u" runs `no-u`.
	* Saying "(╯°□°）╯︵ ┻━┻" runs `unflip`.
