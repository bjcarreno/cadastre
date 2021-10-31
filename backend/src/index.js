//Dependencias

const { ApolloServer, gql } = require('apollo-server')
import { makeExecutableSchema } from '@graphql-tools/schema'

//models
import  models from './modelos'

//console.log(`el modelo es ${ models.DocType }`);
//import Definitions and Resolvers
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'


//Schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

//Apollo Server
const apolloServer = new ApolloServer({
    schema,
    context:{
        models
    }
})

models.sequelize.sync({ force: true }).then(() => {
  apolloServer.listen(5000).then(({ url }) => console.log( `Running on ${url}`))    
})