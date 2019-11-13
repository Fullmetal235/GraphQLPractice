
//Query-Reading data
//Mutation-modifying data
//subscription-


const {GraphQLServer} = require('graphql-yoga')


const resolvers = {
	
};

const server = new GraphQLServer({
	typeDefs: 'src/schema.graphql',
	resolvers,
})

server.start(()=> console.log('running on http://localhost:4000'))