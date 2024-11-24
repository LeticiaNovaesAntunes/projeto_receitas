<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");


// Configuração do banco de dados SQLite
try {
    $pdo = new PDO('sqlite:receitas_la_web.sqlite');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro ao conectar ao banco de dados: ' . $e->getMessage()]);
    exit();
}

// Verifica qual ação foi solicitada
$action = isset($_GET['action']) ? $_GET['action'] : '';

switch ($action) {
    case 'usuarios':
        echo json_encode(getUsuarios($pdo));
        break;

    case 'receitas':
        echo json_encode(getReceitas($pdo));
        break;

    default:
        echo json_encode(['error' => 'Ação inválida']);
        break;
}

// Função para retornar dados da tabela Usuarios
function getUsuarios($pdo) {
    try {
        $stmt = $pdo->query('SELECT * FROM Usuarios');
        return $stmt->fetchAll(PDO::FETCH_ASSOC); // Retorna os dados em formato associativo
    } catch (PDOException $e) {
        return ['error' => 'Erro ao buscar usuários: ' . $e->getMessage()];
    }
}

// Função para retornar dados da tabela Receitas
function getReceitas($pdo) {
    try {
        $stmt = $pdo->query('SELECT nome, imagem FROM Receitas'); // Personalize os campos conforme necessário
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        return ['error' => 'Erro ao buscar receitas: ' . $e->getMessage()];
    }
}

?>
