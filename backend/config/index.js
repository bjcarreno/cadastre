//Configuration
import Config  from './config.json'

//configurations
export const $db = () => Config.db
export const $serverPort = () => Config.serverPort