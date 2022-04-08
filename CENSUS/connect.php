<?php
    $con = mysqli_connect('localhost', 'root', '', 'register');

    $fullname = $_POST['name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $password = $_POST['password'];
    $confirmpass = $_POST['confirm'];
    $gender = $_POST['gender'];

    //database insert sql query
    $sql = "INSERT INTO 'registration' ('Id', 'name', 'username', 'email', 'number', 'password', 'confirm', 'gender') VALUES 
    ('0', '?', '?', '?', '?', '?', '?', '?')";
    
    $rs = mysqli_query($con , $sql);
    if($rs){
        echo "registration successfull";
    }
?>