import path from "path";

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'trains';
config.serverPort = process.env.serverPort || 3000;

config.serverDB = process.env.serverDB || '127.0.0.1';
config.db = process.env.db || 'todoDB';
config.user = process.env.user || 'root';
config.password = process.env.password || '';
config.dialect = process.env.dialect || 'mysql';

config.port = process.env.port || 8082;
config.bodyLimit = process.env.bodyLimit || '100kb';
config.corsHeaders = process.env.corsHeaders || ["Link"];

export default config;