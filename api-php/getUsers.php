<?php 
    require 'connect.php';
    require 'headers.php';

    $sql = "SELECT * FROM users ORDER BY user;";
    $result = mysqli_query($conn, $sql);

    $data = array();

    while ($row = mysqli_fetch_assoc($result)){
        $data[] = [
            'id' => $row['id'],
            'user' => $row['user'],
            'pass' => $row['password']
        ]; 
    }
    print_r(json_encode($data));
?>    