<?php
    require 'connect.php';
    require 'headers.php';

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $user = json_decode(file_get_contents('php://input'));

        $verify = "SELECT * FROM users WHERE user = ?;";
        $stmt_verify = mysqli_prepare($conn, $verify);
        mysqli_stmt_bind_param($stmt_verify, "s", $user->user);
        mysqli_execute($stmt_verify);
        $result = mysqli_stmt_get_result($stmt_verify);
        
        if(mysqli_num_rows($result) > 0){
            header('HTTP/1.1 409 Conflict');
            echo json_encode(['error' => 'Usuário já cadastrado.']);
            exit;
        }

        $sql = "INSERT INTO users(user, password) VALUES (?, ?);";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, 'ss', $user->user, $user->password);
        mysqli_execute($stmt);
    }
?>