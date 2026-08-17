<?php

require_once 'Connection.php';

try {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $body = file_get_contents('php://input');
    $data = json_decode($body, true);

    $username = $data['username'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT);
    $email = $data['email'];

    $stmt = $pdo->prepare("INSERT INTO users (username, password, email) VALUES (:username, :password, :email)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    echo json_encode(['success' => true]);

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit();
}