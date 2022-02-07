---
id: jokeapi
title: Joke API
description: Usage of our Public API
hide_title: False
sidebar_label: Joke
---

# Get A Fact
Endpoint is
https://api.tamako.tech/api/joke

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="response"
  values={[
    {label: 'Response', value: 'response'}
  ]}>

  <TabItem value="response">

  ```

  https://api.tamako.tech/api/joke

  ```

  <img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "Api": "Tamako API",
  "Type": "Joke API",
  "joke": "<response from api>"
}
```
  </TabItem>
</Tabs>

# Official Wrappers 

You can easily use our API Wrappers to interact with Tamako-API <br/>
[Node.js](https://www.npmjs.com/package/tamako-api) <br/>
[Python](https://pypi.org/project/Tamako.py/)

If you still got doubts, Join the [support server](https://discord.com/invite/dDnmY56/)
