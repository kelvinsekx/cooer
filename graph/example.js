var {graphql, buildSchema} = require('graphql')

const schema = buildSchema(`
    type Query {
       hello: String 
    }
`)

graphql(
    schema, 
    `query {
        hello
    }`,
    {
        hello: ()=> "hi"
    }).then(res => console.log(res))