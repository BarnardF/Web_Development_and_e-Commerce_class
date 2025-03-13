<?php

    echo "hellow world <br>";
    echo "Hello again <br>";    
    echo "<h1> Welcome to PHP </h1>";
    echo "<h2>Variable</h2>";


    $name = "bob";
    echo $name;
    echo "<br>";
    $age = 34;
    echo $age;

    echo "<h2>Lets learn about if statements</h2>";

    if ($age>=0 && $age <=12) {
        $message="child";
    } else {
        $message="adult";
    }
    echo "your age is {$age} therefore you are a {$message}";


    echo "<br>";
    echo "<br>";


    $day=1;
    switch($day) {
        case 1:
            echo "Lets quit";
            break;
        case 2:
            echo "Holla";
            break;
        case 3:
            echo "Love it"; 
            break;
        default:
            echo "I hate it";        
    }


    echo "<br>";
    echo "<br>";


    $food=array("pizza", "apples", "hamburger");
    echo "First on the list is {$food[0]}";


    echo "<h2>Welcome to functions</h2>";
    function greet() {
        echo "We greet you all in the name of the Father";
    }
    greet();

    echo "<br>";

    function add($num1, $num2) {
        return $num1 + $num2;
    }
    $mySum=add(4, 5);
    echo "the result is {$mySum}"

?>