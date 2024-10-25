<?php
// Detalles de la base de datos
$host = '127.0.0.1'; // O también puedes usar 'localhost'
$db   = 'nombre_de_tu_base_de_datos'; // Cambia por el nombre de tu base de datos
$user = 'root'; // El usuario por defecto en XAMPP es 'root'
$pass = ''; // La contraseña por defecto en XAMPP es vacía (debería estar vacía)

// Intentamos establecer la conexión
$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

try {
    // Creamos una nueva instancia de PDO
    $pdo = new PDO($dsn, $user, $pass);
    // Configuramos el modo de error de PDO para que lance excepciones
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // En caso de error, mostramos un mensaje
    die("Error al conectar con la base de datos: " . $e->getMessage());
}
?>
