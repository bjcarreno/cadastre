/*
import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typesArray = fileLoader(path.join(__dirname, './'))

export default mergeTypes(typesArray, {all: true})
*/

import { gql } from 'apollo-server'

const typeDefs = gql`
type EdifiType{
    id: Int!
    Description: String!
}

type Query{
    getEdifiTypes:[EdifiType]
}

type Mutation{
    createEdifiType(input: createEdifiTypeInput):EdifiType!
}

input createEdifiTypeInput{
    Description: String!
}
`
export default typeDefs