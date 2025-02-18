<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
?>
{
	"articles": [
<?php
	switch ($_GET['cat']) {
	case "life":
?>
			{ "id": "aeroplane", "title": "Life is an Aeroplane" },
			{ "id": "rational", "title": "What it means to be Rational" },
			{ "id": "walking-away", "title": "Walking Away from Life" }
<?php
		break;
	case "politics":
?>
			{ "id": "musings-empowered-departure", "title": "Empowered Departure" },
			{ "id": "quickfixes-land-tax", "title": "" }
<?php
		break;
	case "sports":
?>
			{ "id": "tv-football", "title": "TV Football" },
			{ "id": "rugby-calendar", "title": "Harmonized Rugby Calendar" },
			{ "id": "contracts", "title": "Sports Contracts are Stupid" }
<?php
		break;
	case "tech":
?>
			{ "id": "this-site", "title": "About this Site" }
<?php
		break;
	}
?>
	]
}
