var myapp = angular.module('myapp', ["ui.router"])

myapp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
      
      $urlRouterProvider.otherwise("/");
      
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });

      $stateProvider
        .state('root', {
            url: "",
            views: {
                'nav@': {
                    templateUrl: 'tpl/nav.html',
                    controller: 'navCtl'
                }
            }
        })
        .state('root.main', {
            url: "/",
            views: {
                'container@': {
                    templateUrl: "tpl/main.html",
                    controller: 'viewMain'
                }
            }
        })
        .state('root.fin', {
            url: "/finance",
            views: {
                'container@': {
                    templateUrl: "tpl/fin.html"
                }
            }
        })
        .state('root.company', {
            url: "/company",
            views: {
                'container@': {
                    templateUrl: "tpl/company.html"
                }
            }
        })
        .state('root.stats', {
            url: "/stats",
            views: {
                'container@': {
                    templateUrl: "tpl/stats.html"
                }
            }
        })
    })

    myapp.controller('viewMain', function($scope, $http) {
        $scope.tasks = [];
        $scope.search = {};

        $scope.get_val = function(bool) {
            return bool!=true?'':true;
        }

        $http.get('https://rocketstars.ru/new-tasks.json').then(function(data) {
            if(data.data) {
                $scope.tasks = data.data.new_tasks;
            }
        });
    })

    myapp.controller('navCtl', function($scope, $location) {
        $scope.isActive = function(route) {
            return route == $location.path();
        }
    })

