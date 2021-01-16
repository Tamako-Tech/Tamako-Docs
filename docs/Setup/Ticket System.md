---
id: Ticket_System
title: Setup Ticket Support system in your server
sidebar_label: Ticket Support System
---

## Initial Setup

Start By Making a Category and giving it the proper Permissions<br/>
Now Type `t!setup` and You will be prompted to type the category ID in which you want tickets to be made.
You will need to copy the category id by right click on category and copy id
Next, You will be prompted to provide the channel in which you want to keep archived tickets.<br/>
You can type `skip` to skip this or make a channel and mention it.
It will save close tickets (if closed using `t!arch`)

## Setting Up Reaction

You can type `t!post [channel mention]` to post a message in a particular channel from which users can react and open a ticket<br/>
Or You can even bind the reaction to a custom message.<br/>
Type Your Custom Message in a channel and type `t!bind [channel mention] [message id]` to bind a Reaction to your Message and users can react to it to make a ticket
You can remove the binded reaction by doing `t!unbind [channel mention] [message id]`.

## Setting up Limits

Tamako's Ticket System is very customisable. You can limit user addition in a ticket or limit user to open x ticket at the same time<br/>
The default limit for how many tickets users can have open at the same time is `1`, you can change it by doing `t!ticketlimit [Number]` <br/>
You can also change limit for how many people can be added to a ticket via the `add` command by doing `t!userlimit [Number]`<br/>

## Commands Available

| Command | Description |
| ------- | ----------- |
| ``add`` | Add users to a ticket
| ``archive`` | Archive a ticket. Sends the user a text transcript of the ticket and deletes the channel
| ``archives`` | Set server archives channel.
| ``bind`` | Bind the ticket starter reaction from a custom message
| ``category`` | Set server ticket category.
| ``close`` | Closes the ticket.Users in the ticket will still be able to read, but not send, messages. The channel will not be deleted.
| ``config`` | Configure ticket system settings.
| ``delete`` | Deletes the Ticket forever
| ``description`` | Changes a ticket Description. If no hid is given, edits the current channel ticket.
| ``info`` | Get info on a ticket.
| ``list`` | List open tickets.
| ``modonly`` | Set whether certain commands can only be used by mods. (Commands that can be set to mod only are add, remove, rename, description, close, and reopen.)
| ``open`` | Re-open a closed ticket.
| ``post`` | Post a message that users can react to in order to open tickets
| ``remove`` | Remove users from a ticket
| ``rename`` | Changes a ticket name. If no hid is given, renames the current channel ticket
| ``setup`` | Set up the server for Ticket System by Tamako.
| ``ticket`` | Get all commands or help related to ticket support System
| ``ticketlimit`` | Set server limit for how many tickets users can have open at the same time(default is 5)
| ``unbind`` | Unbind the ticket starter reaction from a custom message
| ``userlimit`` | Set server limit for how many people can be added to a ticket via the add command.(default is 10)
