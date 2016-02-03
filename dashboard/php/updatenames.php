<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
//$mysqli = mysqli_connect('localhost', 'root', 'enileuqaj1', 'sc_links');
$link = $_GET['link'];
$table = $_GET['table'];
$conn = new mysqli('localhost', 'root', 'enileuqaj1', 'sc');
<<<<<<< HEAD
$query = "UPDATE sc.".$table." SET visited='true', reg_date=now() WHERE link='".$link."'";
=======
$query = "UPDATE sc.urls_everdom SET visited='true' WHERE link='".$link."'";
>>>>>>> origin/master
$result = $conn->query($query);
echo $query;

$conn->close();
?>