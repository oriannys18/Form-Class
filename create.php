<?php
// Inicializamos las variables
$id = 0;
$nombres = '';
$apellidos = '';
$telefono = '';
$email  = '';
$ciudad = '';
$pais = '';

function processConctForm() {
    require_once "configuracion.php";
    global $pdo;

    // Verificamos si la conexión a la base de datos se ha establecido correctamente
    if (!$pdo) {
        die("Error al conectar con la base de datos.");
    }

    // Sanitizamos y validamos los datos del formulario
    $nombres = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
    $apellidos = filter_input(INPUT_POST, 'apellido', FILTER_SANITIZE_STRING);
    $telefono = filter_input(INPUT_POST, 'numberphone', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'correo', FILTER_VALIDATE_EMAIL);
    $ciudad = filter_input(INPUT_POST, 'city', FILTER_SANITIZE_STRING);
    $pais = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_STRING);

    // Verificamos si el correo es válido
    if (!$email) {
        echo "El correo no es válido.";
        return;
    }

    // Verificamos que todos los campos estén llenos
    if (empty($nombres) || empty($apellidos) || empty($telefono) || empty($email) || empty($ciudad) || empty($pais)) {
        echo "Por favor, completa todos los campos.";
        return;
    }

    $sql = "INSERT INTO contactos (nombres, apellidos, telefono, email, ciudad, pais) VALUES (?, ?, ?, ?, ?, ?)";
    try {
        $stmt = $pdo->prepare($sql);
        if ($stmt->execute([$nombres, $apellidos, $telefono, $email, $ciudad, $pais])) {
            header("location: conct.php");
            exit();
        } else {
            echo "Algo salió mal al ejecutar la consulta.";
        }
    } catch (PDOException $e) {
        error_log($e->getMessage(), 3, "C:/xampp/htdocs/projectGit_php/logs/error_log.log");
        echo "Ocurrió un error, intenta más tarde.";
    }

    unset($stmt);
    unset($pdo);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    processConctForm();
}
?>