// Contrôleur d'accueil
// Injection des dépendances pour livreService
app.controller('HomeCtrl', function($scope, livreService, ajaxService, $http, $q)
{
  // Création d'une variable titre sur le scope
  $scope.titre = "Gestion Prêt de livres";


  // Appel de la liste des livres
  /* $scope.listeLivre = livreService.getListeLivre();
  console.log($scope.listeLivre); */


  $scope.liste = ajaxService.getListe()
    .then(
        // En cas de success
        function(response){
          $scope.liste = response.data;
          console.log($scope.liste);
        },
        // En cas d'erreur
        function(error){
          alert("erreur Ajax : " + error);
        }
        );


/*        $http.post('scripts/createbdd.php',
        {
        })
        .then(function(response)
        {
        }, function(response)
        {
          console.error("Erreur ! " + response);
        });*/
});
