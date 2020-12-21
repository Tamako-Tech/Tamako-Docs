---
id: lyricsapi
title: Lyrics API
description: Usage of our Public Chat API
hide_title: False
sidebar_label: lyrics
---

# Get Lyrics
```

https://api.tamako.tech/api/lyrics

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
  | name | `string` | Name of Song |

  </TabItem>

  <TabItem value="response">

  ```

  https://api.tamako.tech/api/lyrics?name=songname

  ```

  <img src={require('../assets/greendot.png').default} height='15'/> Status OK

```
{
  "api":"TamakoBot API",
  "type":"Anime Quote API",
  "args":{
    "name":"name",
    },
  "name":"Title of Song",
  "artist": "Song Artist",
  "lyrics": "Lyrics of the Song",
  "album-art": "link to the album art",
  "link": "Link to the Lyrics"
}
```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> No Name Provided

```
{
  "api":"TamakoBot API",
  "type":"Anime Quote API",
  "args":{
    "name": "null",
    },
  "error":"missing_arguements"
}
```

  </TabItem>
</Tabs>
# Accepted Values

Lyrics of Song

If you still got doubts, Join the [support server](https://support.tamako.tech/)
