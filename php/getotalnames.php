<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
$table = $_GET['table'];
$conn = new mysqli('localhost', 'root', 'enileuqaj1', 'sc');
$query = "SELECT COUNT(*) FROM sc.".$table.";";
$result = $conn->query($query);
$rows = mysqli_fetch_row($result);
echo $rows[0];

$conn->close();
?>