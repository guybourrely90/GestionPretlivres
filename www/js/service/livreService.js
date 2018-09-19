app.service('livreService', function () {
  this.getListeLivre = function () {
    return [
      {
        "titre":"Informatique de Gestion",
        "date de parution":"2003",
        "isbn":"2100071769"
      },
      {
        "titre":"Merise guide pratique",
        "date de parution":"2009",
        "isbn":"978-2-7460-4845-4"
      },
      {
        "titre":"SQL Les fondamentaux du langage",
        "date de parution":"2014",
        "isbn":"978-2-7460-8969-3"
      },
      {
        "titre":"Bootstrap 3 pour l'intégrateur web",
        "date de parution":"2014",
        "isbn":"978-2-7460-8867-2"
      }
    ];
  }
});
