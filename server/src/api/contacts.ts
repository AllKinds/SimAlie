module.exports = function(app) {
	var ContactDb = require('../models/contact');
	var Contacts = ContactDb.Contact;
	var middlewares = require('../middlewares');


// Functions:

	function fetchContacts(req, res) {
		Contacts.find()
			.exec(function(err,contacts) {
				if(err) {
					res.send(err);
				}
				res.json(contacts);
			});
	}

	function createContact(contact, req, res){
		Contacts.create(contact, function(err, contact){
			if(err) {
				res.send(err);
				console.log(err);
			}
		});
	}

	function validateContact(contact): Boolean{
		return true;
	}

// Requests:

	app.get('/api/contacts', middlewares.tempmid, function(req, res) {
		console.log('Sending Contacts');
		fetchContacts(req, res);
	});

	app.post('/api/contacts', middlewares.tempmid, function(req, res) {
		let contact = req.body;
		if(validateContact(contact)){
			createContact(contact, req, res);
		}
		else {
			let msg: String = 'Error: The contact model is incorrect'
			console.log(msg);
			res.status(500).send(msg)
		}
	});
}