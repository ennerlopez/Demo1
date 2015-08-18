(function(angular) {
    'use strict';
    var app = angular.module('Example1', []);
      app  .controller('MyController', ['$scope', function($scope) {
          $scope.formulario = {

              seccion: {
                  componentes: [{
                      tipo: 'password',
                      codigo: 1,
                      nombre: 'Casilla',
                      valor: ''

                  },
                      {
                          tipo: 'texto',
                          codigo: 1,
                          nombre: 'Casilla',
                          valor: 'Texto'

                      }]
              }


          };
      }])  ;

    app.directive('componenteSeccion', function(){

        return {




            templateUrl: function(){
                return 'componente-seccion.html'}



        }



    });




})(window.angular);