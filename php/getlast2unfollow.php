<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
$table = $_GET['table'];
$conn = new mysqli('localhost', 'root', 'enileuqaj1', 'sc');
#$query = "SELECT link FROM sc.urls WHERE visited LIKE 'false' ORDER BY id ASC LIMIT 180";
$query = "SELECT uniqueid FROM sc.".$table."_delete ORDER BY reg_date ASC LIMIT 90;";

$result = $conn->query($query);
$array = array();
if ($result->num_rows > 0) {
    
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        
        array_push($array, $row["uniqueid"]);
         echo $row["uniqueid"].",";
         $r = $conn->query($query);
         $query = 'DELETE FROM sc.'.$table.'_delete WHERE uniqueid="'.$row["uniqueid"].'";';
         
	    if (mysqli_query($r, $query)){
	    } else {
	    }
    }

} 
else {
    echo '0 results';
}
$conn->close();
?>