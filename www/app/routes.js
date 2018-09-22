app.config(function($stateProvider){
  $stateProvider
    .state(
        'listeLivres', {
          url : '/livres/liste',
          templateUrl : 'templates/liste.html',
          controller : 'HomeCtrl'
    });


});
