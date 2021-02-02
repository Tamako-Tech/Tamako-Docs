---
id: pokedexapi
title: Pokedex API
description: Usage of our Public API
hide_title: False
sidebar_label: Pokedex Fact
---

# Get Information
```

https://api.tamako.tech/api/pokedex

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
  | pokemon | `string` | Pokemon Name |

  </TabItem>

  <TabItem value="response">

  ```

  https://api.tamako.tech/api/pokedex?pokemon=pikachu

  ```

  <img src={require('../assets/greendot.png').default} height='15'/>Status OK

```
{
  "api": "TamakoBot API",
  "type": "Anime Quote API",
  "args":
  {
    "pokemon": "input"
  }
  "name": "name of pokemon",
  "ndex": "Pokdex Number",
  "type": ["Type(s) of pokemon"]
  "generation": "Generation Number",
  "abilities": ["Ability(s) of pokemon"],
  description": "Description of Pokemon",
  "height": "Height of pokemon",
  "weight": "Weight of pokemon",
  "gender": "Gender(s) of Pokemon"],
  "egg_groups":["Egg Group(s) of pokemon"],
  "species":["Species of Pokemon"]
  "family":
  {
    "evolutionStage": "Evolution Stage of pokemon",
    "evolutionLine":["Full Evolution Line of pokemon"]
    }
  }
}
```

<br/>
<img src={require('../assets/reddot.png').default} height='15'/> No Pokemon Provided

```
{
  "api":"TamakoBot API",
  "type":"Anime Quote API",
  "args":{
    "pokemon":"null",
    },
  "error":"missing_arguements"
}
```

  </TabItem>
</Tabs>

# Accepted Values

Any Pokemon

# Official Wrappers 

You can easily use our API Wrappers to interact with Tamako-API <br/>
[Node.js](https://www.npmjs.com/package/tamako-api) <br/>
[Python](https://github.com/DaftDevelopment/Tamako.py)

If you still got doubts, Join the [support server](https://support.tamako.tech/)
Alternatively, you can use our NPM package [tamako-api](https://www.npmjs.com/package/tamako-api)

# Example

 https://api.tamako.tech/api/pokedex?pokemon=pikachu
The Api Gives the information in JSON
```
{
  "api": "TamakoBot API",
  "type": "Pokedex API",
  "args":
  {
    "pokemon": "pikachu"
  }
  "name": "pikachu",
  "ndex": "025",
  "type":
  [
    "Electric"
  ],
  "generation": "1",
  "abilities":
  [
  "Static",
  "Lightning Rod"
  ],
  "description": "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
  "height": "0.4 m (1′04″)",
  "weight": "6.0 kg (13.2 lbs)",
  "gender": ["50% male","50% female"],
  "egg_groups":
  [
  "Fairy",
  "Field"
  ],
  "species":
  [
  "Mouse",
  "Pokémon"
  ],
  "family" :
  {
    "evolutionStage": 2,
    "evolutionLine":
    [
    "Pichu",
    "Pikachu",
    "Raichu",
    "Raichu"
    ]
    }
  }
}
```
