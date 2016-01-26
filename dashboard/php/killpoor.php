<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
$link = $_GET['link'];
$table = $_GET['table'];
#$mysqli = mysqli_connect('localhost', 'root', 'enileuqaj1', 'sc_links');
$mysqli= mysqli_connect('localhost', 'root', 'enileuqaj1', 'sc');
$query = 'DELETE FROM sc.'.$table.' WHERE link="'.$link.'";';
if (mysqli_query($mysqli, $query)){
        echo "Deleted";
    } else {
        echo "ERROR: Could not able to execute $query. " . mysqli_error($mysqli);
    }
?>