---
id: chatapi
title: ChatBot API
description: Usage of our Public Chat API
hide_title: False
sidebar_label: ChatBot
---
<!-- 
# Get the Authorisation Keys [ Not Needed anymore]
You can utilise Tamako Chat API as a part of free Skyfallen Developer Suite. The use of the API is free, but you need to get authorisation keys that prevent spamming and attacks. The process is quite simple, go to [Skyfallen Developer Center](https://devcenter.theskyfallen.com/), login / sign up, complete your profile and send it for validation. When we think you are a real person, your account will be approved and you will get access to app creation. From that point, just make an app and enable Tamako API for it. This will give you your keys. -->

# Send A Message

Endpoint is
https://api.tamako.tech/api/chat

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="request"
  values={[
    {label: 'Request', value: 'request'},
    {label: 'Response', value: 'response'}
  ]}>
  <TabItem value="request">

  Query Parameters

  | Parameter | Type | Default | Optional | Description |
  | - | - | - | :-: | - |
  | message | string | none | ❌ | The message you want the chatbot to reply with
  | userid | Number 18 Digits | none | ✔️ | Unique ID to tell users using the endpoint apart
  | name | string | Tamako | ✔️ | The name of the chatbot
  | gender | string | female | ✔️ | The gender of the chatbot
  | dev | string | Bear#3437 | ✔️ | The developer of the bot
  | prefix | string | Not Set By Developer | ✔️ | Prefix of Your Bot


  </TabItem>

  <TabItem value="response">

  ```
  https://api.tamako.tech/api/chat?prvid=com.theskyfallen.exampleapp.tamako-api&svcid=******&svcsecret=****&name=Sakuta&gender=male&prefix=t!&dev=Bear&user=userid&message=message
  ```

  <img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "Api": "Tamako API",
  "Type": "Chat API",
  "input": "<message>",
  "userid": "<user id>",
  "message": "<resposne from api>"
}
```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> Missing Query, check if its right

```
{
  "message": "Message is required"
}
```
  </TabItem>
</Tabs>

# Official Wrappers 

You can easily use our API Wrappers to interact with Tamako-API <br/>
[Node.js](https://www.npmjs.com/package/tamako-api) <br/>
[Python](https://pypi.org/project/Tamako.py/)

If you still got doubts, Join the [support server](https://discord.com/invite/dDnmY56/)
