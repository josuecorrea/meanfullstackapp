//var controller = require('../controllers/contato')

module.exports = function(app){
	var controller = app.controllers.contato;
	app.get('/contatos', controller.listaContatos);
	app.get('/contatos/:id', controller.obtemContato);
};