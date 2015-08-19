(function (angular) {
    'use strict';
    var app = angular.module('Example1', []);
    app.controller('MyController', ['$scope', '$http', function ($scope, $http) {

        //$http.get('formulario.json')
        //    .then(function (res) {
        //        $scope.formulario = res.data;
        //    });
        $scope.formulario = {

            secciones: [
                {
                    codigo: 1,
                    filas: [

                        {

                            componentes: [
                                {
                                    tipo: 'password',
                                    codigo: 1,
                                    nombre: '[1,1]',
                                    valor: ''

                                },
                                {
                                    tipo: 'texto',
                                    codigo: 2,
                                    nombre: '[1,2]',
                                    valor: 'Texto'

                                },
                                {
                                    tipo: 'texto',
                                    codigo: 2,
                                    nombre: '[1,3]',
                                    valor: 'Texto'

                                }


                            ]
                        },
                        {

                            componentes: [
                                {
                                    tipo: 'password',
                                    codigo: 3,
                                    nombre: '[2,1]',
                                    valor: ''

                                },
                                {
                                    tipo: 'vacio',
                                    codigo: 4,
                                    nombre: '[2,2]',
                                    valor: 'Texto'

                                },
                                {
                                    tipo: 'password',
                                    codigo: 4,
                                    nombre: '[2,3]',
                                    valor: ''

                                }


                            ]
                        }

                    ]
                }]

        };


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
            //replace: true,
            /*   template: '<div ng-repeat = "component in seccion.componentes">' +
             '<ng-include src="&quot;componente-&quot;+component.tipo+&quot;.html&quot;"></ng-include>' +
             ' </div> '
             */

            templateUrl: 'componente-seccion.html'


        }


    });

    app.directive('componenteX', function () {

        return {
            templateUrl: function (elem, attr) {
                return 'componente-' + attr.type + '.html'
            }


        }


    })


    app.directive('componenteTexto', function () {

        return {
            replace: true,
            template: '|{{component.codigo}} - {{component.nombre}}|<input type="text" ng-model="component.valor">'


        }


    });

    app.directive('componenteFila', function () {

        return {

            templateUrl: 'componente-fila.html'


        }


    });


})(window.angular);