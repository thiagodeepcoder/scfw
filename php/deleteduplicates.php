<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
$table = $_GET['table'];
$conn = new mysqli('localhost', 'root', 'enileuqaj1', 'sc');
$query = "CREATE TABLE urls1 like ".$table.";";
$result = $conn->query($query);
$query = "insert into urls1 (link,uniqueid,followers,followings,tracks, visited) select distinct link,(uniqueid),followers,followings,tracks, visited from ".$table." group by uniqueid;";
$result = $conn->query($query);
$query = "DROP TABLE ".$table.";";
$result = $conn->query($query);
$query = "RENAME TABLE `urls1` TO `".$table."`;";
$result = $conn->query($query);
$query = "SELECT COUNT(*) FROM sc.".$table.";";
$result = $conn->query($query);
$rows = mysqli_fetch_row($result);
echo $rows[0];

$conn->close();
?>