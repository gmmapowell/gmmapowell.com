<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
?>
{
<?php
	switch ($_GET['cat']) {
	case "creative":
?>
		"articles": [
			{ "id": "aeroplane", "title": "Life is an Aeroplane" }
		]
<?php
		break;
	case "sports":
?>
		"articles": [
			{ "id": "tv_football", "title": "TV Football" }
		]
<?php
		break;
	case "tech":
?>
		"articles": [
			{ "id": "about", "title": "About this Site" }
		]
<?php
		break;
	}
?>
}
