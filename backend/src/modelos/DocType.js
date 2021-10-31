export default (sequelize, { STRING, UUID, UUIDV4}) => {
    const DocType = sequelize.define('DocType',{
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