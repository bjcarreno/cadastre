export default{
    Query: {
        getDocTypes: (parent, arg, { models }) => {
            return models.DocTypes.findAll()
        }
    },
    Mutation: {
        createDocType(parent, { input}, {models}){
            return  models.DocTypes.create({...input})
        } 
    }    
}