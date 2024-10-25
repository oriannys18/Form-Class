<?php
// No incluyas create.php aquí, ya que se maneja en el formulario
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inmogestion SA</title>
    <link rel="stylesheet" href="css/bootstrap-5.1.3-dist/css/bootstrap.min.css">
</head>
<body class="bg-dark">
    <h1 class="text-primary">Inmogestion SA</h1>
    <div class="container p-2">
        <div class="card mx-3 mt-n5 shadow-lg"
            style="border-radius: 10px; border-left: 8px rgb(3, 131, 131) solid; border-right: 8px rgb(3, 131, 131) solid; border-top: none; border-bottom: none;">
            <div class="card-body">
                <h3 class="text-primary text-uppercase mb-3">Datos personales</h3>

                <form action="create.php" id="conctmortgage" method="POST" target="_self">
                    <div class="row">
                        <div class="col">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" class="form-control" required>
                        </div>
                        <div class="col">
                            <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" id="apellido" class="form-control" required>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col">
                            <label for="numberphone">Número de teléfono</label>
                            <input type="text" name="numberphone" id="numberphone" class="form-control" required>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col">
                            <label for="correo">Correo</label>
                            <input type="email" name="correo" id="correo" class="form-control" required>
                        </div>
                        <div class="col">
                            <label for="city">Ciudad</label>
                            <input type="text" name="city" id="city" class="form-control" required>
                        </div>
                        <div class="col">
                            <label for="country">País</label>
                            <input type="text" name="country" id="country" class="form-control" required>
                        </div>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    </div>
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>
