---
id: chatapi
title: ChatBot API
description: Usage of our Public Chat API
hide_title: False
sidebar_label: ChatBot
---
# Get the Authorisation Keys
You can Utilise Our Chatbot API but for that you will need to Request Authorisation Key and ID
For That, simply [Join the Support server](https://support.tamako.tech) of Tamako and Fill out this [Form](https://api.tamako.tech/)

# Get Cakes

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="request"
  values={[
    {label: 'Request', value: 'request'},
    {label: 'Response', value: 'response'}
  ]}>
  <TabItem value="request">Query Parameters
  | authorization | `string` | Authentication-Key You will need to [request this](https://requests.tamako.tech/)                                                              |
|---------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| bid           | `string` | Once you get approved for the Authentication-Key you will get a bid along with that                                                            |
| message       | `string` | The input to the api                                                                                                                           |
| userid        | `string` | The bot creates profile / userid so you will either want to mention your app to fetch the userid of the author or predefine it to a single one |
  </TabItem>

  <TabItem value="response"><img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "api":"TamakoBot API",
  "args":{
    "bid":"bid",
    "key":"authkey",
    "userid":"userid",
    "incoming_message":"message"
    },
  "response":"response by the api"
}
```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> Wrong Authentication

```title="https://api.tamako.tech/chat?authorization=authkey&bid=bid&user=userid&message=message"
{
"api":"TamakoBot API",
"args":{
  "bid":"bid",
  "key":"authkey",
  "userid":"userid",
  "incoming_message":"message"
  },
"response":"null"
}
```
<br/>
<img src={require('../assets/reddot.png').default} height='15'/> Missing Query, check if its right

```
{
"api":"TamakoBot API",
"args":{
  "bid":"bid",
  "key":"authkey",
  "userid":"",
  "incoming_message":"message"
  },
"response":"missing_arguements"
}
```
  </TabItem>
</Tabs>
If you still got doubts, Join the [support server](https://support.tamako.tech/)
