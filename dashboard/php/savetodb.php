<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
$link = $_GET['link'];
$followers = $_GET['followers'];
$followings = $_GET['followings'];
$tracks = $_GET['tracks'];

#$mysqli = mysqli_connect('localhost', 'root', 'enileuqaj1', 'sc_links');
$mysqli= mysqli_connect('localhost', 'root', 'enileuqaj1', 'sc');
$query = 'INSERT INTO sc.urls (link, followers, followings, tracks, visited) VALUES  ("'.$link.'",'.$followers.','.$followings.','.$tracks.',"false")';
if (mysqli_query($mysqli, $query)){
        echo "Inserted";
    } else {
        echo "ERROR: Could not able to execute $query. " . mysqli_error($mysqli);
    }

    /*

CREATE TABLE urls (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	link VARCHAR(30) NOT NULL, 
	followers INT(30), 
	followings INT(30), 
	tracks INT(30), 
	visited VARCHAR(30), 
	reg_date TIMESTAMP
)

*/
?>

