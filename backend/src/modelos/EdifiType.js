export default (sequelize, { STRING, INT, UUIDV4}) => {
    const EdifiType = sequelize.define('EdifiType',{
        id:{
            primaryKey: true,
            allownull: false,
            type: INT,
            //default: UUIDV4
        },
        description:{
            type: STRING,
            allownull: false
        }
    } )
}