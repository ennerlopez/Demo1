(function (angular) {
    'use strict';
    var app = angular.module('Example1', []);
    app.controller('MyController', ['$scope', '$http', function ($scope, $http) {

        $http.get('formulario2.json')
            .then(function (res) {
                $scope.formulario = res.data;
            });
        /* $scope.formulario = {

         secciones: [
         {
         codigo: 1,
         componentes: [
         {
         tipo: 'password',
         codigo: 1,
         nombre: 'Casilla',
         valor: ''

         },
         {
         tipo: 'texto',
         codigo: 1,
         nombre: 'precio',
         valor: 'Texto'

         }]
         },
         {
         codigo: 2,
         componentes: [
         {
         tipo: 'password',
         codigo: 22,
         nombre: 'Casilla22',
         valor: '44444'

         },
         {
         tipo: 'texto',
         codigo: 1,
         nombre: 'precio2',
         valor: 'Texto'

         }]
         },
         {
         codigo: 3,
         componentes: [
         {
         tipo: 'texto',
         codigo: 333,
         nombre: 'precio2',
         valor: 'Texto'

         }]
         }
         ]

         };*/


    }]);

    app.directive('componenteSecciones', function () {

        return {

            replace: true,
            templateUrl: function () {
                return 'componente-secciones.html'
            }


        }


    });


    app.directive('componenteSeccion', function () {

        return {
         /*   replace: true,
            template: '<div ng-repeat = "component in seccion.componentes">' +
            '<ng-include src="&quot;componente-&quot;+component.tipo+&quot;.html&quot;"></ng-include>' +
                ' </div> '
           */

             templateUrl: 'componente-seccion.html'


        }


    });

    app.directive('componenteX', function () {

        return {
            templateUrl: function(elem,attr){
                return 'componente-'+ attr.type+'.html'
            }


        }


    })


    app.directive('componenteTexto', function () {

        return {
            replace: true,
            template: '|{{component.codigo}} - {{component.nombre}}|<input type="text" ng-model="component.valor">'


        }


    });


})(window.angular);