<?php

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '123';

$link = new MySQLi(DB_HOST, DB_USER, DB_PASS);
// test
$action = $_GET["action"];
$db = $_GET["db"];
$table = $_GET["table"];
$synth = $_GET["synth"];

if($action == "update") {
	$sql = "UPDATE ".$db.".".$table." SET value=value + 1 WHERE name='".$synth."';";
	$result = $link->query($sql);
}

if($action == "select") {
	$sql = "SELECT * FROM ".$db.".".$table." ORDER BY value ASC";
	$result = $link->query($sql);
	$a = "";
	foreach ($result as $key => $value) {
		if($key<15 ) {
			$a = $a.$value["name"];
		}
		if($key<14) {
			$a = $a.",";
		}
	
	}
	echo $table.",".$a;
}

//http://localhost:8888/connect.php?action=creation
if($action=="creation") {
	$pack = "pack0";
	$table= 'fx';
	$synth = "FX";
	$max = 20;

	$arraySynths = ["Bass","FX","Hats","Kick","Kickcut","Layers","Lead","Loop","Lowend","Pad","Perc","Shot","Snare","Vocals"];
	$arrayTables = ["bass","fx","hats","kick","kickcut","layers","lead","loop","lowend","pad","perc","shot","snare","vocals"];
	$pack0 = [21,20,7,6,6,0,10,7,13,0,6,17,10];
	$pack1 = [10,20,10,10,10,0,20,10,10,0,9,10,10];
	$pack2 = [16,42,15,18,6,0,0,55,13,11,0,26,12,18];
	$pack3 = [20,100,20,30,20,20,40,60,40,20,20,100,20,60];
	for ($m=3; $m < 4; $m++) {  //pack
		for ($j=0; $j < count($arraySynths); $j++) {  //synth
			for ($i=0; $i <= $pack3[$j] ; $i++) {  //numero
				$t = $arrayTables[$j];
				$sql = "INSERT INTO pack".$m.".$t (name,value) VALUES ('pack".$m."dub".$arraySynths[$j].$i."',0);";
				$result = $link->query($sql);
				echo $sql."</br>";
			}
		}
	}
}
//http://localhost:8888/connect.php?action=createTables
if($action=="createTables") {
	$arrayTables = ["bass","fx","hats","kick","kickcut","layers","lead","loop","lowend","pad","perc","shot","snare","vocals"];
	for ($i=0; $i < count($arrayTables); $i++) { 
		$sql = "CREATE TABLE pack3.".$arrayTables[$i]." (`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name text ,value int )";
		$result = $link->query($sql);
	}
	
}




?>
