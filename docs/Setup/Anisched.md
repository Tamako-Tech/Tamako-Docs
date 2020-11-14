---
id: Anischedule
title: Anime Scheduling
hide_title: true
sidebar_label: Anischedule
---




A feature that uses the [AniList API](https://anilist.co/) to retrieve the airing schedule for configured anime and sends a message when a new episode has aired.


<br />

### Preparing the bot and your server
:::caution
Before you start everything, make sure Tamako has the necessary Permissions `SEND_MESSAGES`, `EMBED_LINKS` so that announcements are sent on a set channel
:::
<br /><br />

**1. Use the ``setanischedch`` command and pass in the desired ``announcement channel`` as the first parameter.**<br></br>
> Usage: ``t!setanischedch [text-based-channel]``<br></br>
> Example: ``t!setanischedch #anime-airing``

<img src={require('../assets/setanimesched.png').default} />
<br/><br/>


<br /><br />

**2. Search for currently airing anime you wanted to keep track of, grab the link, use the ``t!watch`` command and pass the copied URL as the parameter.**<br/>
> Usage: ``t!watch [anime URL]``<br/>
> Example: `t!watch https://nyanimelist.net/anime/41006/Higurashi_no_Naku_Koro_ni_2020`

<img src={require('../assets/watch.png').default} />

:::note
Take note that the only accepted URLs are from [MyAnimeList](https://myanimelist.net/) and [AniList](https://myanimelist.net/).<br/>Wait for a confirmation from the bot. If the anime is already listed on your server, the anime will not be added, but you will be notified instead that the URL you submitted is already listed.<br/>Finished or Cancelled anime series cannot be added, but you can add upcoming anime as long as it has an official entry on AniList.
:::

### Adding More to the List
You can add many ongoing anime as you want, without worries! Just use the ``t!watch [anime URL]`` command and it will automatically add the anime, no Problet!
### Removing Anime From the List
You might think that the anime you added is none of your business, or you don't want to hear updates from it anymore because of your own personal reason.<br/>
Removing anime from your watch-list is easier than you think! Just use ``t!unwatch [anime URL]`` command and you're good to go. Providing URL from an unlisted anime will return with an error saying that anime is not listed.
<img src={require('../assets/unwatch.png').default} />

### Viewing The WatchList
You added so much anime that you've lost count, and you forgot what those are. Now you start to wonder, how am I gonna view my server's listed anime? Viewing the watchlist is accessible by all members of the server via the command `t!watching`. This command will return with the list of currently watching anime for the server.<br/>Just make sure that `[EMBED_LINKS]` permission is enabled for the bot on the channel where the command is executed.
