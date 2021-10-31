export default (sequelize, { STRING, UUID, UUIDV4}) => {
    const PerType = sequelize.define('PerType',{
        id:{
            primaryKey: true,
            allownull: false,
            type: UUID,
            default: UUIDV4
        },
        description:{
            type: STRING,
            allownull: false
        }
    } )
}