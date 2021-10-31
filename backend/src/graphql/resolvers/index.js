/*import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const resolversArray = fileLoader(path.join(__dirname, './'))

export default mergeResolvers(resolversArray, {all: true})
*/
const resolvers = {

    Query: {

        async getEdifiTipes(root, args, { models }){
            return await models.EdifiType.findAll()
        }

    },
    Mutation: {
        async createEdifiType(root, { description }, { models }){
            return await models.EdifiType.create( { description } )
        }
    }

}


module.exports = resolvers