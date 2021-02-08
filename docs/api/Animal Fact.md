---
id: animalfactapi
title: Animal API
description: Usage of our Public API
hide_title: False
sidebar_label: Animal Fact
---

# Get A Fact
```

https://api.tamako.tech/api/animalfact

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
  | /name | `string` | Animal Name |

  </TabItem>

  <TabItem value="response">

  ```

  https://api.tamako.tech/api/animalfact/panda

  ```

  <img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "api":"TamakoBot API",
  "type":"Anime Quote API",
  "args":{
    "name":"panda",
    },
  "fact":"response by the api"
}
```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> No Name Provided

```
{
  "api":"TamakoBot API",
  "type":"Anime Quote API",
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
| bird            |
| bunny           |
| cat             |
| dog             |
| fox             |
| giraffe         |
| kangaroo        |
| panda           |
| racoon          |
| elephant        |
| whale           |

# Official Wrappers 

You can easily use our API Wrappers to interact with Tamako-API <br/>
[Node.js](https://www.npmjs.com/package/tamako-api) <br/>
[Python](https://pypi.org/project/Tamako.py/)

If you still got doubts, Join the [support server](https://support.tamako.tech/)
