<?php
require 'connect.php';
require 'headers.php';

if (isset($_GET['id']) && !empty($_GET['id'])) {
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $user = json_decode(file_get_contents('php://input'));
        $id = $_GET['id'];

        $sql = "UPDATE users SET `user` = ?, `password` = ? WHERE id = ?;";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "ssi", $user->user, $user->password, $id);
        mysqli_execute($stmt);
        

    }
}
?>
