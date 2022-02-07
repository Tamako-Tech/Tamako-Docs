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
  | animal | `string` | Animal Name |

  </TabItem>

  <TabItem value="response">

  ```

  https://api.tamako.tech/api/animalfact?animal=panda

  ```

  <img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "Api": "Tamako API",
  "Type": "Animal Fact API",
  "fact": "The fact here"
}

```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> No Name Provided

```
{
  "Api": "Tamako API",
  "Type": "Animal Fact API",
  "message": "Animal not found!",
  "available": [<>]
}
```

  </TabItem>
</Tabs>

# Accepted Values

`animal` can be any of the following:

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

If you still got doubts, Join the [support server](https://discord.com/invite/dDnmY56)
