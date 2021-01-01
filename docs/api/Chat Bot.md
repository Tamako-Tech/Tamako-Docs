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
  | username | string | none | ❌ | Your Username on the [Website](https://appcenter.theskyfallen.in/)
  | appsecret | string | none | ❌ | Your AppSecret on the [Website](https://appcenter.theskyfallen.in/)
  | appid | string | none | ❌ | Your AppID on the [Website](https://appcenter.theskyfallen.in/)
  | message | string | none | ❌ | The message you want the chatbot to reply with 
  | name | string | Tamako | ✔️ | The name of the chatbot
  | gender | string | female | ✔️ | The gender of the chatbot
  | userid | string | none | ❌ | Unique ID to tell users using the endpoint apart


  </TabItem>

  <TabItem value="response">

  ```
  https://api.tamako.tech/chat?username=authkey&appsecret=appsecret&appid=appid&name=Sakuta&gender=male&userid=userid&message=message
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

```title="  https://api.tamako.tech/chat?username=authkey&appsecret=appsecret&appid=appid&name=Sakuta&gender=male&userid=userid&message=message"
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

If you still got doubts, Join the [support server](https://support.tamako.tech/)
