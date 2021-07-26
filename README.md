# cooer

This will be updated in progress...
**note** site might be unnecessarily slow because we are handling image with mongobuffer. 
In no time, images would be moved to a cloud provider. 

Cooer is a monolithic file of both backend and client.
check [./server/express.js] to see the running server for both backend and client side

## Graphql
Cooer's api is a restAPi wrapped around graphQL. This is intentional to enable both flexibility with either the use of graphQL or a Rest.
Visit [./graph] folder to see the graphql changes. 
Also graphQL enables better appreciation of backend data .. 

You can hit [baseURL/graphql] to play with cooer data. If you aren't new to
graphql, it is a quick start.

## Graphql playground
In development mode, 

```shell
# the use of config would be completely replace by nconf in the future
import config from "./config/config";

http://localhost:${config.port}/graphql
```

For live instance
```shell
# In development mood, get the baseURL (most likely: localhost:5000)
[siteBASEURL](/localhost:${whateverPort})/graphql
```

`e.g https://shrouded-thicket-19388.herokuapp.com/graphql`

## Development
You can simple clone this repo and use `npm install` to get started. The package.json is well explanatory trust me. If everything is fine, a printout of what url to hit will appear on your terminal.

For now visit https://shrouded-thicket-19388.herokuapp.com to see the site live...Don't be quick to judge me it is a serious work in progress...Join me to start the Africa change by contributing
