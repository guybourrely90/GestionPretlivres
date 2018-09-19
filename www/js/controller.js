// Contrôleur d'accueil
// Injection des dépendances pour livreService
app.controller('HomeCtrl', function($scope, livreService){
  // Création d'une variable titre sur le scope
  $scope.titre = "Gestion Prêt de livres";

  // Appel de la liste des livres
  $scope.liste = livreService.getListeLivre();
  console.log($scope.liste);
});
