---
id: Counter
title: Setup Counters in your server
sidebar_label: Counters
---

You can use ```t!mguide``` to get a guide on counter setup <br/>
Use ```t!mhelp``` to get help related to counter system

## Create/edit a counter

Counters are placed by writting them in a channel name or topic, if something is between
two curly braces ( {} ), Member Counter will considere it a counter, and it will update it in
the next 5 minutes <br/>

You can place counters in one of the following places:
* In a **voice** channel **name**
* In a **category** channel **name**
* In a **text** channel **topic**
* In a **news** channel **topic**

For this example we are gonna use `{members}` , which counts the total amount of
members in your discord server, you will find out more counters below

Create a new channel, or/and edit it, and write `{members}` in the name or topic, and click
'save changes'<br/>

<img src={require('../assets/member_counter_1.png').default} /><br/>

Then, wait at least 10 seconds, and Member Counter will update it:<br/>

<img src={require('../assets/member_counter_2.png').default} /><br/>

You can also add multiple counters in one name/topic, and combine them with your own content, here is a example:<br/>
<img src={require('../assets/member_counter_3.png').default} />


> If you reach the character limit when you are editing a name/topic, please check t!help editChannel. You can see the current counter configurations with t!seeSettings, this is useful to add more counters without disabling the previous ones


## Remove A Counter

Edit the channel and write `{disable}` in the name/topic, Member Counter will replace it to a ✅, that means that you removed all the counters of that channel successfully<br/><br/>
You can also delete the channel directly

## List Of Counters
| Counters                        | What Counts?                                                                                                                                                                                                                                                                                                      |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **{members}**                       | The total amount of members in the server                                                                                                                                                                                                                                                                         |
| **{approximatedOnlineMembers}**     | Approximated online members in your server                                                                                                                                                                                                                                                                        |
| **{users}**                         | How many users are in the server, it excludes the bots                                                                                                                                                                                                                                                            |
| **{bots}**                          | How many bots are in the server, it excludes the users                                                                                                                                                                                                                                                            |
| **{channels}**                      | How many channels has the server                                                                                                                                                                                                                                                                                  |
| **{roles}**                         | How many roles has the server                                                                                                                                                                                                                                                                                     |
| **{connectedMembers}**              | How many members are connected in all the voice channels in the server                                                                                                                                                                                                                                            |
| **{connectedMembers:channelID}**    | Like `{connectedMembers}`, but the bot will count only the connected members in the specified channels, write the channel IDs you wanna count after the `:`, and separate the channel IDs with commas `,`                                                                                                         |
| **{bannedMembers}**                 | How many members are banned                                                                                                                                                                                                                                                                                       |
| **{onlineMembers}**                 | How many members are online                                                                                                                                                                                                                                                                                       |
| **{onlineUsers}**                   | How many users are online                                                                                                                                                                                                                                                                                         |
| **{onlineBots}**                    | How many bots are online                                                                                                                                                                                                                                                                                          |
| **{offlineMembers}**                | How many members are offline                                                                                                                                                                                                                                                                                      |
| **{offlineUsers}**                  | How many users are offline                                                                                                                                                                                                                                                                                        |
| **{offlineBots}**                   | How many bots are offline                                                                                                                                                                                                                                                                                         |
| **{membersWithRole:roleID}**        | This counts how much members has a role or roles, write the roles IDs you wanna count after the `:`, and separate the role IDs with commas `,`                                                                                                                                                                    |
| **{onlineMembersWithRole:roleID}**  | Like `{membersWithRole:}` but only counts those members online                                                                                                                                                                                                                                                    |
| **{offlineMembersWithRole:roleID}** | Like `{membersWithRole:}` but only counts those members offline                                                                                                                                                                                                                                                   |
| **{http:url}**                      | This will display the returned amount given by the response to the specified resource, the bot will perform a `GET` request and the server **must** reply with `the status code 200` and the content-type: text/plain                  |
| **{http-string:url}**               | Like `{http}` but the bot won't parse anything, useful to display names instead of numbers                                                                                                                                                                                                                        |
| **{youtubeSubscribers:channelUrl}** | Displays a youtube channel subscriber count, replace channelUrl with the desired channel url                                                                                                                                                                                                                      |
| **{youtubeViews:channelUrl}**       | Displays a youtube channel view count                                                                                                                                                                                                                                                                             |
| **{youtubeVideos:channelUrl}**      | Displays a youtube channel video count                                                                                                                                                                                                                                                                            |
| **{twitchFollowers:channelName}**   | Displays a twitch channel follower count, replace channelName with the desired channel name                                                                                                                                                                                                                       |
| **{twitchViews:channelName}**       | Displays a twitch channel view count                                                                                                                                                                                                                                                                              |
| **{twitterFollowers:username}**     | Displays the amount of followers in an account, replace username with the actual Twitter username                                                                                                                                                                                                                 |
| **{memeratorMemes:username}**       | Displays a [Memerator](https://memerator.me/) user's meme count, replace username with the desired profile name                                                                                                                                                                                                   |
| **{memeratorFollowers:username}**   | Displays a [Memerator](https://memerator.me/) user's follower count, replace username with the desired profile name                                                                                                                                                                                               |
| **{instagramFollowers:username}**   | Displays the amount of followers in an account, replace username with the actual Instagram username                                                                                                                                                                                                               |
| **{game:gameId:address:port}**      | Player count for game servers (Minecraft, Counter Strike, Rust, Ark, Team Fortress 2, GMOD, etc), replace `gameId` by one of the listed [here](https://github.com/gamedig/node-gamedig#games-list) and `address` by the actual one and `port` by the query port                                                   |
| **{countdown:targetDate:format}**   | Shows a countdown that will decrease to the specified target date,by replacing `targetDate` with the target date in a UNIX timestamp, and optionally format it with a custom format: use `%d` to show the days left, `%h` to show the hours left, `%m` to show the minutes left and `%s` to show the seconds left |
| **{clock:timeZone}**                | Shows a clock with the time of the specified timezone, replace `timeZone` with a valid IANA timezone                                                                                                                                                                                                              |
| **{nitro-boosters}**                | Shows the total amount of members boosting this server                                                                                                                                                                                                                                                            |
| **{static:number}**                 | Shows the given number with custom formatting based on the guild settings                                                                                                                                                                                                                                         |

## Preview counters
Instead of waiting to see how will be the final result, you can use ``t!preview`` to check how will look your custom counters in a chanel name or topic
```
t!preview {onlineMembers} of {members} Online
```

## Displaying large counts

<img src={require('../assets/member_counter_4.png').default} /><br/>

Use ```t!mshortNumber``` when the counts are too large<br/>
You can also choose to show from 0 to 3 deciamls<br/>
**Usage**
```
t!mshortNumber enable
t!mshortNumber 0
t!mshortNumber 1
t!mshortNumber 2
t!mshortNumber 3
t!mshortNumber disable
```

## Instant counts
Get Counts Instantly
<br/>
This command returns some counts instantly, this command doesn't require any special permission
<br/>
<img src={require('../assets/member_counter_5.png').default} />

```
t!mcounts
```

## Allow Roles to execute these Commands

```
t!mrole [allow/deny] [@roles/all]
```
Where the first parameter is the action (allow or deny) and the second parameter is on
which roles you want to perform the action, it must be role mentions (@ plus the role name
and/or use the discord autocomplete) or the ``all`` keyword, which will applies the change
to all the roles

**Examples**
```
1 t!mrole allow @Mod
2 t!mrole allow @Mod @OtherRole
3 t!mrole deny all
```
## Change locale
You can change the format of the counts and other stuff (like the time of ``{clock}`` counter) with this command
<img src={require('../assets/member_counter_6.png').default} />

**Usage**
```
t!mlocale [es-ES/disable]
```

Use ```t!mseeSettings``` to **see all Settings** <br/>
Use ```t!mresterSettings``` to **reset all Settings**
