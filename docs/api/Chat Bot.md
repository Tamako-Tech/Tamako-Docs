---
id: chatapi
title: ChatBot API
description: Usage of our Public Chat API
hide_title: False
sidebar_label: ChatBot
---

# Get the Authorisation Keys
You can Utilise Our Chatbot API but for that you will need to Request Authorisation Key and ID
For That, simply sign up on this [Website](https://appcenter.theskyfallen.com/) and create an app

# Get Cakes

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
  | username | string | none | ❌ | Your Username on the [Website](https://appcenter.theskyfallen.com/)
  | appsecret | string | none | ❌ | Your AppSecret on the [Website](https://appcenter.theskyfallen.com/)
  | appid | string | none | ❌ | Your AppID on the [Website](https://appcenter.theskyfallen.com/)
  | message | string | none | ❌ | The message you want the chatbot to reply with
  | user | string | none | ❌ | Unique ID to tell users using the endpoint apart
  | name | string | Tamako | ✔️ | The name of the chatbot
  | gender | string | female | ✔️ | The gender of the chatbot
  | dev | string | Bear#3437 | ✔️ | The developer of the bot
  | prefix | string | Not Set By Developer | ✔️ | Prefix of Your Bot


  </TabItem>

  <TabItem value="response">

  ```
  https://api.tamako.tech/api/chat?username=authkey&appsecret=appsecret&appid=appid&name=Sakuta&gender=male&prefix=t!&dev=Bear&user=userid&message=message
  ```

  <img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "api":"TamakoBot API",
  "args":{
      "username":"username",
      "appid":"appid",
      "appsecret":"appsecret",
      "userid":"userid",
      "gender":"male",
      "name":"Sakuta",
      "incoming_message":"message
    },
  "response":"response by the api"
}
```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> Wrong Authentication

```title="  https://api.tamako.tech/api/chat?username=authkey&appsecret=appsecret&appid=appid&name=Sakuta&gender=male&prefix=t!&dev=Bear&user=userid&message=message"
{
"api":"TamakoBot API",
"args":{
      "username":"username",
      "appid":"appid",
      "appsecret":"appsecret",
      "userid":"userid",
      "gender":"male",
      "name":"Sakuta",
      "incoming_message":"message
  },
"error":"null"
}
```
<br/>
<img src={require('../assets/reddot.png').default} height='15'/> Missing Query, check if its right

```
{
"api":"TamakoBot API",
"args":{
      "username":"username",
      "appid":"appid",
      "appsecret":"appsecret",
      "userid":null,
      "gender":"male",
      "name":"Sakuta",
      "incoming_message":"message
  },
"error":"missing_arguements"
}
```
  </TabItem>
</Tabs>

# Official Wrappers 

You can easily use our API Wrappers to interact with Tamako-API <br/>
[Node.js](https://www.npmjs.com/package/tamako-api) <br/>
[Python](https://pypi.org/project/Tamako.py/)

If you still got doubts, Join the [support server](https://support.tamako.tech/)
