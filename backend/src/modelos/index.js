//dependencies
import Sequelize from 'sequelize'

//configuration db
import { $db } from '../../config'
import EdifiType from './EdifiType'

//Conectiom db
const { database, username, password, dialect } = $db()

//define sequelize
const sequelize = new Sequelize( database, username,password, { 
    dialect,
    define: {
        underscored: true
    }
})

//models
const models = {
    //PerType: sequelize.import('./PerType'),
    //DocType: sequelize.import('./DocType'),
    EdifiType: sequelize.import('./EdifiType')
}

/*
Object.keys(models).forEach(modelName => {
    if('associate' in models[modelName]){
        models[modelName].associate(models)
    }
})
*/

models.sequelize = sequelize

export default models