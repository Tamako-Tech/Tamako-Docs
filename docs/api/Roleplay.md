---
id: roleplayapi
title: RolePlay API
description: Usage of our Public API
hide_title: False
sidebar_label: RolePlay Api
---

# Get A Fact
```

https://api.tamako.tech/api/roleplay

```

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

  | Parameter | type | Value |
  |-|-|-|
  | /type | `string` | type |

  </TabItem>

  <TabItem value="response">

  ```

  https://api.tamako.tech/api/roleplay/hug

  ```

  <img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "api":"TamakoBot API",
  "type":"Roleplay API",
  "args":{
    "name":"hug",
    },
  "url":"response by the api"
}
```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> No Category Provided

```
{
  "api":"TamakoBot API",
  "type":"RolePlay API",
  "args":{
    "name":"null",
    },
  "error":"missing_arguements"
}
```

  </TabItem>
</Tabs>

# Accepted Values

`name` can be any of the following:

| Accepted Values |
|-----------------|
| baka            |
| blush           |
| cry             |
| disgust         |
| feed            |
| happy           |
| holdhands       |
| hug             |
| kiss            |
| pat             |
| poke            |
| slap            |
| sleep           |
| smug            |
| wave            |
| wink            |

# Official Wrappers 

You can easily use our API Wrappers to interact with Tamako-API <br/>
[Node.js](https://www.npmjs.com/package/tamako-api) <br/>
[Python](https://pypi.org/project/Tamako.py/)

If you still got doubts, Join the [support server](https://support.tamako.tech/)
