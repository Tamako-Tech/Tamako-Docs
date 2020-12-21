---
id: jokeapi
title: Joke API
description: Usage of our Public Chat API
hide_title: False
sidebar_label: Joke
---

# Get A Joke
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
  "api":"TamakoBot API",
  "type":"Joke API",
  joke":"The best way to stop a charging bull is to take away his credit card."
}
```
  </TabItem>
</Tabs>
If you still got doubts, Join the [support server](https://support.tamako.tech/)
