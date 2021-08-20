# &#x1F625; Sorry,
I moved the client to **netlify**, it is here now https://competent-bhabha-9a4049.netlify.app/. Many atimes clients would break I don't even know the cause...and heroku has an ugly build experience. This makes client all sucks. However, heroku works well with the backend so our graphql files stay there

# 🚀🚀🚀 cooer

Cooer is an app intended to allow for better access to memes and regeneration from existing convo.
The client folder repo is https://github.com/kelvinsekx/cooer-client. 
But the back-end is hosted here
check [server](./server/express.js) to see the running server.

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
