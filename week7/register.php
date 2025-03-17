<?php
// echo "Data retrieved will display below: <br> ";
// echo " Username: {$_POST["username"]} <br>";
// echo " Email: {$_POST["email"]} <br>";
// echo " Passsword: {$_POST["password"]} <br>";
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=trim($_POST["username"]);
    $email=trim($_POST["email"]);
    $password=trim($_POST["password"]);

    if(empty($username)||empty($email)||empty($password)){
        die("Error: All fields are required");
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        die("Error: Invalid email format");
    }

    echo "Registration succesfull";
}
?>