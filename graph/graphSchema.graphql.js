import { 
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from "graphql";
import fetch from "node-fetch";
import {baseURL} from "./graph.utility"

const FollowType = new GraphQLObjectType({
  name : "Follow",
  fields: ()=> ({
    length : {
      type: GraphQLInt,
      resolve: f => f.length
    },
    details: {
      type: new GraphQLList(PersonType),
      resolve: f=> f
    }
  })
})

const PhotoType = new GraphQLObjectType({
   name: 'Photo',
   fields: ()=> ({
      contentType: {
         type: GraphQLString,
	     resolve: person => person.photo.contentType
      },
	   data: {
		   type: GraphQLString,
		   resolve: person => `${baseURL()}/_v1/api/users/u/photo/${person.username}`
	  }
   })
})

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'Somebody that you used to know',
    fields: () => ({
      _id: {
        type: GraphQLString,
        resolve: person => person._id
      },
      join: {
        type: GraphQLString,
        resolve: person => person.join
      },
      name: {
        type: GraphQLString,
        resolve: person => person.name,
      },
      bio: {
        type: GraphQLString,
        resolve: person => person.bio,
      },
      email: {
	    type: GraphQLString,
	    resolve: person => person.email
      },
      id: {
	  type: GraphQLString,
      	resolve: person => person._id
      },
      username: {
	      type: GraphQLString,
      	resolve: person => person.username
      },
	  photo: {
		  type: PhotoType,
		  resolve: person => person
	  },
    following : {
      type: FollowType,
      resolve: person => person.following
    },
    followers : {
      type: FollowType,
      resolve: person => person.followers
    }


    }),
  });

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: "the root of all...queries",
    fields: ()=> ({
        allPeople: {
            type: new GraphQLList(PersonType),
            resolve: root => fetch(`${baseURL()}/_v1/api/users`)
                            .then(res => res.json())
                            
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
