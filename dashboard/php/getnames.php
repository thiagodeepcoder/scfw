<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
//$mysqli = mysqli_connect('localhost', 'root', 'enileuqaj1', 'sc_links');
$conn = new mysqli('localhost', 'root', 'enileuqaj1', 'sc');
#$query = "SELECT link FROM sc.urls WHERE visited LIKE 'false' ORDER BY id ASC LIMIT 180";
$query = "SELECT link FROM sc.urls WHERE visited LIKE 'false' ORDER BY RAND() LIMIT 180";

$result = $conn->query($query);
$array = array();
if ($result->num_rows > 0) {
    
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        
        array_push($array, $row["link"]);
         echo $row["link"].",";
    }

} 
else {
    echo "0 results";
}
$conn->close();
?>