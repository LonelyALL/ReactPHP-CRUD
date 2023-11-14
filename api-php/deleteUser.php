<?php
    require 'connect.php';
    require 'headers.php';

    if (isset($_GET['id']) && !empty($_GET['id'])) {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $id = $_GET['id'];

            $sql = "DELETE FROM users WHERE id = '$id';";
            mysqli_query($conn, $sql);
        }
    }
?>