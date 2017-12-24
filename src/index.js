import http from 'http';
import express from 'express';
import cors from 'cors';
import logger from './config/app-logger';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import config from './config/config.dev';
import todo from './routes/TodoRoute';
import connectToDb from './db/connectMongo'; 

let app = express();
app.server = http.createServer(app);

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

//Mongo
connectToDb();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

//Index route
app.use('/todo', todo);

app.server.listen(process.env.PORT || config.port, () => {
	logger.info('server started - ', app.server.address().port);
});

export default app;
