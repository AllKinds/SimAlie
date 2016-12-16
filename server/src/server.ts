///<reference path="../typings/index.d.ts"/>

import * as bodyParser	from 'body-parser';
import * as cors		from 'cors';
import * as express 	from 'express';
import * as http 		from 'http';
import * as fs 			from 'fs';
import * as mongoose 	from 'mongoose';
import * as morgan 		from 'morgan';		// Log every request to console


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://localhost/iou');

app.use(morgan('dev'));

app.get('/', function(req, res) {
	res.send('Hello World!!');
})

// Routs
require('./api/contacts')(app);
require('./api/debts')(app);

// Initialize
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
})

