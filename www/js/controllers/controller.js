// Contrôleur d'accueil
// Injection des dépendances pour livreService
app.controller('HomeCtrl', function($scope, livreService, ajaxService, $http, $q)
{
  // Création d'une variable titre sur le scope
  $scope.titre = "Gestion Prêt de livres";


  // Appel de la liste des livres
  /* $scope.listeLivre = livreService.getListeLivre();
  console.log($scope.listeLivre); */

/*
  $scope.create = ajaxService.createLivre()
    .then(
        // En cas de success
        function(response){
          $scope.create = response.data;
          console.log($scope.create);

          $http.post("scripts/getLivre.php",
          {

          })

        },
        // En cas d'erreur
        function(error){
          alert("erreur Ajax : " + error);
        }
        );*/


        $scope.submit = function()
        {
          $http.post('scripts/createbdd.php',
          {
            "titre" : this.titreLivre,
            "edition" : this.edition,
            "issn" : this.issn,
            "isbn" : this.isbn,
            "genres" : this.genres,
            "synopsis" : this.synopsis
          })
          .then(function(response)
          {
            console.log(this.titreLivre);
            $http.post('scripts/getLivres.php',
            {

            })
            .then(function(response)
            {
              $scope.listeLivre = response.data;
              console.log($scope.listeLivre);
            });
          });
        }
});
