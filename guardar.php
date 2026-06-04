<?php

$conexion = new mysqli(
"localhost",
"root",
"",
"qnn"
);

$email = $_POST["email"];

$sql = "INSERT INTO suscriptores(email)
VALUES(?)";

$stmt = $conexion->prepare($sql);

$stmt->bind_param("s",$email);

$stmt->execute();

header("Location: boletin.html");

?>