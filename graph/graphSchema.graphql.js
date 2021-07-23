import { 
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";

import fetch from "node-fetch";

import {PersonType} from "./graphql/personType.schema"
import {baseURL} from "./graph.utility"

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: "the root of all...queries",
    fields: ()=> ({
        allPeople: {
            type: new GraphQLList(PersonType),
            description: "Graphql list of users...",
            args: {
              limit: {type: GraphQLInt},
              random: {
                type: GraphQLBoolean
              }
            },
            resolve: async (root, args) => {
              if(args) {

                if(args.random == undefined){
                  args.random = false
                }
                 const result = await fetch(`${baseURL()}/_v1/api/users/suggest/${args.limit}/${args.random}`).then(res=>res.json())
                 return result;
              }
              return fetch(`${baseURL()}/_v1/api/users`).then(res => res.json())
            }
                            
        },
        person: {
            type: PersonType,
	          description: "individual info, this can't be seen except with authentication, if token isnot provided query return data of null",
            args: {
              userName: {type: GraphQLString},
              token: {type: GraphQLString}
            },
          resolve: (root, args)=> fetch(
            `${baseURL()}/_v1/api/users/${args.userName}`, {
              headers: {
                "Authorization": `Bearer ${args.token}`
            }
            })
              .then(res=>res.json())
              //.then(json => console.log(json))
        }
    })
});

export default new GraphQLSchema({
    query: QueryType,
})
