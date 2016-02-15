<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
$table = $_GET['table'];
$conn = new mysqli('localhost', 'root', 'enileuqaj1', 'sc');
#$query = "SELECT link FROM sc.urls WHERE visited LIKE 'false' ORDER BY id ASC LIMIT 180";
$query = "SELECT * FROM sc.".$table." WHERE visited LIKE 'false'";

$result = $conn->query($query);
$array = array();
if ($result->num_rows > 0) {
    
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        
        array_push($array, $row["uniqueid"]);
         echo $row["uniqueid"].",";
    }

} 
else {
    echo '0 results';
}
$conn->close();
?>