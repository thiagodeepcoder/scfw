<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
//$mysqli = mysqli_connect('localhost', 'root', 'enileuqaj1', 'sc_links');
$link = $_GET['link'];
$conn = new mysqli('localhost', 'root', 'enileuqaj1', 'sc');
$query = "UPDATE sc.urls SET visited='true' WHERE link='".$link."'";
$result = $conn->query($query);
echo $query;

$conn->close();
?>