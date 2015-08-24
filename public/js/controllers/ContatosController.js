angular.module('contatooh').controller('ContatosController',
function($scope) {
	$scope.total = 0;//UMA FUNÇÃO PASSADA PARA TELA VIA INJEÇÃO DE DEPENDENCIA
	$scope.incrementa = function() {//funcao que incrementa mais 1
		$scope.total++;
	};
});