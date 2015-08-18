(function (angular) {
    'use strict';
    var app = angular.module('Example1', []);
    app.controller('MyController', ['$scope','$http', function ($scope,$http) {

        $http.get('formulario2.json')
            .then(function(res){
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


            templateUrl: function () {
                return 'componente-secciones.html'
            }


        }


    });


    app.directive('componenteSeccion', function () {

        return {


            templateUrl: function () {
                return 'componente-seccion.html'
            }


        }


    });

    app.directive('componenteTexto', function () {

        return {

            template : '|{{component.codigo}} - {{component.nombre}}|<input type="text" ng-model="component.valor">'


        }


    });


})(window.angular);