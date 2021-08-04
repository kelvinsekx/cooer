import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from "graphql";
import {baseURL} from "./../graph.utility"

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


export const PersonType = new GraphQLObjectType({
  name: "Person",
  description: "Somebody that you used to know",
  fields: () => ({
    _id: {
      type: GraphQLString,
      resolve: (person) => person._id,
    },
    join: {
      type: GraphQLString,
      resolve: (person) => person.join,
    },
    name: {
      type: GraphQLString,
      resolve: (person) => person.name,
    },
    bio: {
      type: GraphQLString,
      resolve: (person) => person.bio,
    },
    email: {
      type: GraphQLString,
      resolve: (person) => person.email,
    },
    id: {
      type: GraphQLString,
      resolve: (person) => person._id,
    },
    username: {
      type: GraphQLString,
      resolve: (person) => person.username,
    },
    photo: {
      type: GraphQLString,
      resolve: (person) => person.photo,
    },
    following: {
      type: FollowType,
      resolve: (person) => person.following,
    },
    followers: {
      type: FollowType,
      resolve: (person) => person.followers,
    },
  }),
});
