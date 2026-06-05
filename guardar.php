<?php

$conexion = new mysqli(
    "localhost",
    "root",
    "",
    "qnn"
);

if($conexion->connect_error){
    die("Error de conexión");
}

$email = trim($_POST["email"]);

$sql = "INSERT INTO suscriptores(email)
        VALUES(?)";

$stmt = $conexion->prepare($sql);

$stmt->bind_param("s", $email);

if($stmt->execute()){

    header(
        "Location: boletin.html?registro=ok"
    );

}else{

    if($conexion->errno == 1062){

        header(
            "Location: boletin.html?registro=duplicado"
        );

    }else{

        header(
            "Location: boletin.html?registro=error"
        );

    }

}

exit;

?>