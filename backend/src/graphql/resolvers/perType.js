export default{
    Query: {
        getPerTypes: (parent, arg, { models }) => {
            return models.PerTypes.findAll()
        }
    },
    Mutation: {
        createPerType(parent, { input}, {models}){
            return  models.PerTypes.create({...input})
        } 
    }    
}