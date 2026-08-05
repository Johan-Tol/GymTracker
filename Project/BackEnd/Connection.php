<?php

$servername = "localhost";
$username = "GymTracker";
$password = "J0tOL2007!";
$dbname = "GymTracker";

$dsn = "mysql:host=$servername;dbname=$dbname;charset=utf8mb4";
$conn = new PDO($dsn, $username, $password);