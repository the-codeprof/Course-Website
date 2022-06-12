<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<?php

$d=strtotime("tomorrow");
echo date("Y-m-d h:i:sa", $d) . "<br>";

$d=strtotime("next Saturday");
echo date("Y-m-d h:i:sa", $d) . "<br>";

$d=strtotime("+3 Months");
echo date("Y-m-d h:i:sa", $d) . "<br>";


date_default_timezone_set("America/New_York");
echo "hello! the time is " . date('h:i:sa')."<br>";

    $cars = array(
        array("volvo", 22, 15),
        array("venza", 12, 35),
        array("lexux", 21, 25),
        array("ford", 2, 15),
    );

    echo "Today's date is " . date('d/m/y') . "<br>";
    echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");
    
    ?>




<body>
<?php
   for($row=0; $row<4; $row++){
       echo"<p><b>row number $row </b></p>";
       echo "<ul>";
       for($col=0; $col<3; $col++){
           echo"<li>".$cars[$row][$col]."</li>";
       }

       echo "</ul>";
   }
?>
</body>
</html>