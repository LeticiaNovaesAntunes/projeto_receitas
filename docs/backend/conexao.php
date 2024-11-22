<?php
$pdo = new PDO("sqlite:" . __DIR__ . "/receitas_la_web.sqlite");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Consulta para buscar os dados
$query = "SELECT * FROM Receita";
$stmt = $pdo->prepare($query);
$stmt->execute();

// Buscar todos os dados e transformar em JSON
$dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($dados);

?>
