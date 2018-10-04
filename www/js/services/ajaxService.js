// Injection des services $http(Ajax), $q(promesses)
app.service('ajaxService', function($http, $q){
  this.getListe = function()
  {
    // Création d'un promesse
    var deferred = $q.defer();
    // Requette Ajax
    $http.post("scripts/createbdd.php")
      .then(
        function(response){
          deferred.resolve(response.data);
        },
        function(error){
          deferred.reject(error);
        }
      );
      // Réponse de la promise
      return deferred.promise;
  }

});

