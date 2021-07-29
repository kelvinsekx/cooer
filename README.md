# &#x1F625; Sorry,
I will be moving the client to **netlify**, heroku sucks with client deployment especially with react. Many atimes clients would break I don't even know the cause...and heroku has an ugly build experience. This makes client all sucks. However, heroku works well with the backend so our graphql links stays there

# 🚀🚀🚀 cooer
**note** site might be unnecessarily slow because we are handling image with mongobuffer. 
In no time, images would be moved to a cloud provider. 

Cooer is a monolithic file of both backend and client.
check [server](./server/express.js) to see the running server for both backend and client side

## Graphql &#x1F913;
Cooer's api is a restAPi wrapped around graphQL. This is intentional to enable both flexibility with either the use of graphQL or a Rest.
Visit [graph](./graph) folder to see the graphql changes. 
Also since graphQL enables better appreciation of backend data, please play with our data.

See how to use the graphql below. If you aren't new to
graphql, it is a quick start.

## Graphql playground &#x1F4A9;
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

# In a production env, use the baseDomain
# For example
https://shrouded-thicket-19388.herokuapp.com/graphql
```

## Development &#x1F466; &#x1F3FB;
You can simple clone this repo and use `npm install` to get started. The package.json is well explanatory trust me. If everything is fine, a printout of what url to hit will appear on your terminal.

For now visit https://shrouded-thicket-19388.herokuapp.com to see the site live...Don't be quick to judge me it is a serious work in progress...Join me to start the Africa change by contributing
