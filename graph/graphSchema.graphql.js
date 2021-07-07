import { 
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql";
import fetch from "node-fetch";

const baseURL = ()=> {
  if (process.env.NODE_ENV.trim() == "production")return "https://shrouded-thicket-19388.herokuapp.com"
  return `http://localhost:${4066}`
}

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
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer "+ args.token
            }
            })
              .then(res=>res.json())
        }
    })
})

export default new GraphQLSchema({
    query: QueryType,
})
