	// config/express.js
	var express = require('express');

	// abaixo da variável express declarada no topo do arquivo
	//var home = require('../app/routes/home')

	module.exports = function() {
	var app = express();//instancia do express...

	// variável de ambiente .. Porta do servidor. onde vai ser executado o sistema.
	app.set('port', 3000);
     
	// middleware - acesso publico do usuario pelo navegador
	app.use(express.static('./public'));

	//view engine que utilizaremos no projeto semelhante ao razor ||  npm install ejs@0.8 --save
	app.set('view engine', 'ejs');

	//configurando diretório onde ficarão as views
    app.set('views','./app/views');

    var bodyParser = require('body-parser');

    // middleware
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views','./app/views');
	// novos middlewares
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

    //evita a chamada do comando require varias vezes no projeto
	var load = require('express-load');

	var bodyParser = require('body-parser');

   /*A função load carregará todos os scripts dentro das pastas
     app/models, app/controllers e app/routes.*/
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
    /*O parâmetro {cwd: ‘app’} foi necessário para mudar o diretório
		padrão, pois a função procura as pastas no diretório raiz contatooh 
		e precisamos que ela considere a pasta contatooh/app.*/

	return app;
};