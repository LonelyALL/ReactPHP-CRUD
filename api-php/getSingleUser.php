<?php 
    require 'connect.php';
    require 'headers.php';

    if(isset($_GET['id'])){
        $id = $_GET['id'];

        $sql = "SELECT * FROM users WHERE id = ?;";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "i", $id);
        mysqli_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $row = mysqli_fetch_assoc($result);

        $data = array();

        $data[] = [
            'user' => $row['user'],
            'pass' => $row['password']
        ];
        
        print_r(json_encode($data));
    }   
?>