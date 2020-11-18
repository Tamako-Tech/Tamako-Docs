---
id: proxy
title: Proxy System
sidebar_label: Proxy System
---

## Introduction
This is a method to proxy user messages using webhooks.
:::warning Permissions Required
The Bot must Have `MANAGE_WEBHOOKS` and `MANAGE_MESSAGES` perms for this feature to work.
:::

## Registering a proxy
To Register a proxy within Tamako, you can type ```t!proxyregister Bear // text```<br/>
Here, `Bear` is the name of the proxy you want and `//` is the prefix to trigger the proxy.<br/>
So if you type `// hello`, a webhook with the name `Bear` will respond with the message `hello`
> To register a multi word name, use `'like this'` or `"like this"`

You can even rename the proxy by doing `t!proxyrename <current_name> <newname>`

## Customising Proxy

### Grouping Multiple Proxys
Grouping would be very good if you are using multiple proxy(s) and want to categorize them
You can create a group by `t!group create <name_of_group` and to add proxy(s) to a particular group, you can type `t!group add <name_of_group> <proxyname>`, you can use `*` to add all groupless proxy(s) <br/>
You can change description of a group by `t!group describe <name_of_group> <description>` and even add a personal tag by `t!group tag <name_of_group> <tag>`<br/>
To change the name of a particular group , do `t!group rename <current_name> <newname>` and to remove a proxy from a group , do `t!group remove <name_of_group> <proxyname>`<br/>
You can list all your groups with their proxys with `t!group list`<br/>
You can even delete a group by `t!group delete <name_of_group>`, this will reassign the proxy(s) to an empty group<br/>

### Giving a description to the proxy
You can set a description to your proxy(s) by doing `t!describe <name> [desc]`<br/>
You can execute `t!describe <name> clear/remove/none/delete` to delete the description of the Proxy<br/>

### Changing the Proxy Avatar
To Change the Proxy Avatar, type ```t!proxyavatar Bear https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg```<br/>
Alternatively, you can even upload the pic
:::warning Storage Of Image
if the message/picture gets deleted, your proxy's Profile pic will not be available so it is recommend you to upload it somewhere else and provide a url instead
:::
This will change the proxy avatar to the one you just mentioned

### Changing the Prefix of the Proxy
You can change the prefix of the proxy using `t!brackets <name> [newprefix]` and even add more than one prefix to trigger the same proxy `t!brackets add <name> <prefix>` <br/>
To remove a prefix `t!brackets remove <name> <prefix>`<br/>
Do `t!togglebrackets <name>` to toggles whether the prefix are included or stripped in proxied messages for the given proxy

## Changing the BirthDate of the Proxy
Yes, you can even add Birthdate to a proxy<br/>
To do so, you can type `t!proxybirthday <proxyname> [date]`
<ul> <li> If name and date are specified, set the named proxy's birthday to the date. </li>
<li>If name only is specified, show the proxy's birthday.</li>
<li>If neither are given, show the next 5 birthdays on the server.</li>
</ul>

You can type `t!proxybirthday <proxyname> clear/remove/none/delete` to remove the birthdate of that proxy
> Date must be given in format MM/DD/YY and are stored in UTC.

You can even Tag your proxy by doing `t!tag <proxyname> [tag]`

##  Extra Configuration for server
You can use `t!cfg log [#channel]` to enable the bot to send a log of all proxy messages and some basic info like who registered them. Useful for having a searchable channel and for distinguishing between similar names. To disable logging, run with no channel argument.<br/>
To blacklist users to proxy in certain channels, you can blacklist those channels `t!cfg blacklist <add|remove> <channel(s)>`


## Commands Available
| Commands         | Usage                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------|
| t!brackets       | View or change a proxy's brackets                                                             |
| t!cfg            | Configure server-specific settings                                                            |
| t!describe       | View or change a proxy's description                                                          |
| t!export         | Export your data to a file                                                                    |
| t!findproxy      | Find and display info about proxys by name                                                    |
| t!group          | View or change your groups                                                                    |
| t!import         | Import your data from a file                                                                  |
| t!privacy        | View my privacy policy.                                                                       |
| t!proxyavatar    | View or change a proxy's avatar                                                               |
| t!proxybirthday  | View or change a proxy's birthday, or see upcoming birthdays                                  |
| t!proxyhelp      | Print this message, or get help for a specific command                                        |
| t!proxylist      | Get a detailed list of yours or another user's registered proxys                              |
| t!proxylistng    | Like list, but without showing group info.                                                    |
| t!proxyregister  | Register a new proxy                                                                          |
| t!proxyremove    | Unregister a proxy                                                                            |
| t!proxyrename    | Change a proxy's name                                                                         |
| t!showuser       | Show the user that registered the proxy that last spoke                                       |
| t!tag            | Remove or change a proxy's tag (displayed next to name when proxying)                         |
| t!togglebrackets | Toggles whether the brackets are included or stripped in proxied messages for the given proxy |

You can get detailed help on those commands by doing `t!proxyhelp <commandname>`
