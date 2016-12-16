module.exports = function(app) {
	var DebtDb = require('../models/debt');
	var Debts = DebtDb.Debt;
	var middlewares = require('../middlewares');


// Functions:

	function fetchDebts(req, res) {
		Debts.find()
			.exec(function(err,debts) {
				if(err) {
					res.send(err);
				}
				res.json(debts);
			});
	}

	function createDebt(debt, req, res){
		Debts.create(debt, function(err, debt){
			if(err) {
				res.send(err);
				console.log(err);
			}
		});
		res.json(debt);
	}

	function validateDebt(debt): Boolean{
		return true;
	}

// Requests:

	app.get('/api/debts', middlewares.tempmid, function(req, res) {
		console.log('Sending Debts');
		fetchDebts(req, res);
	});

	app.post('/api/debts', middlewares.tempmid, function(req, res) {
		let debt = req.body;
		if(validateDebt(debt)){
			createDebt(debt, req, res);
		}
		else {
			let msg: String = 'Error: The debt model is incorrect'
			console.log(msg);
			res.status(500).send(msg)
		}
	});
}