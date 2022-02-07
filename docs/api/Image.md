---
id: imageapi
title: Image API
description: Usage of our Public API
hide_title: False
sidebar_label: Image Api
---

# Get A Fact
```

https://api.tamako.tech/api/image

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

  Parameters

  | Parameter | type | Value |
  |-|-|-|
  | /name | `string` | type |

  </TabItem>

  <TabItem value="response">

  ```

  https://api.tamako.tech/api/image/bird

  ```

  <img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "Api": "Tamako API",
  "Type": "Images API",
  "url": "<Response by Api>"
}
```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> No Category Provided

```
404 status code
```

  </TabItem>
</Tabs>

# Accepted Values

`name` can be any of the following:

| Accepted Values |
|-----------------|
| tamako          |
| mai             |
| bird            |
| cat             |
| dog             |
| dog             |
| fox             |
| koala           |
| panda           |
| redpanda        |

# Official Wrappers 

You can easily use our API Wrappers to interact with Tamako-API <br/>
[Node.js](https://www.npmjs.com/package/tamako-api) <br/>
[Python](https://pypi.org/project/Tamako.py/)

If you still got doubts, Join the [support server](https://discord.com/invite/dDnmY56/)
