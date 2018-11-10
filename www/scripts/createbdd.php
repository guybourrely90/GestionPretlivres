
<?php
 $data = json_decode(file_get_contents("php://input"));
/* Connexion à une base MySQL avec l'invocation de pilote */
$dsn = 'mysql:dbname=bddlivres;host=127.0.0.1';
$user = 'root';
$password = 'root';

$titre = $data->titre;
$issn = $data->issn;
$isbn = $data->isbn;
$genres = $data->genres;
$edition = $data->edition;
$synopsis = $data->synopsis;


try {
  $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
  echo 'Connexion échouée : ' . $e->getMessage();
}

// Ecriture d'une requête SQL sous forme d'une chaine de caractères
$query = $dbh->prepare("INSERT INTO livres (titre, issn, isbn, edition, genres, synopsis, date_parution) VALUES (?, ?, ?, ?, ?, ?, ?)");

$query->bindValue (1,$titre);
$query->bindValue (2,$issn);
$query->bindValue (3,$isbn);
$query->bindValue (4,$edition);
$query->bindValue (5,$genres);
$query->bindValue (6,$synopsis);
$query->bindValue (7,'2014-06-01');

try {
    $query->execute();
} catch (Exception $e) {

}

