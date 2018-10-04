
<?php
/* Connexion à une base MySQL avec l'invocation de pilote */
$dsn = 'mysql:dbname=bddlivres;host=127.0.0.1';
$user = 'root';
$password = 'root';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
}

// Ecriture d'une requête SQL sous forme d'une chaine de caractères
$query = $dbh->prepare("INSERT INTO livres (titre, issn, isbn, edition, genres, synopsis, date_parution) VALUES (?, ?, ?, ?, ?, ?, ?)");

$query->bindValue (1,'testBD');
$query->bindValue (2,'12345678');
$query->bindValue (3,'9782746089693');
$query->bindValue (4,'toto');
$query->bindValue (5,'informatique');
$query->bindValue (6,'testBDtestBD');
$query->bindValue (7,'2014-06-01');

$query->execute();

?>

