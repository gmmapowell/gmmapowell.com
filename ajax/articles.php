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
	case "politics-musings":
?>
			{ "id": "musings-empowered-departure", "title": "Empowered Departure" },
			{ "id": "musings-immigration", "title": "Immigration is a Category Error" }
<?php
		break;
	case "politics-quickfixes":
?>
			{ "id": "quickfixes-land-tax", "title": "A Land Use Tax" },
			{ "id": "quickfixes-free-transport", "title": "Public Transport should be Free" }
<?php
		break;
	case "sports":
?>
			{ "id": "tv-football", "title": "TV Football" },
			{ "id": "rugby-calendar", "title": "Harmonized Rugby Calendar" },
			{ "id": "contracts", "title": "Sports Contracts are Stupid" },
			{ "id": "fire-the-manager", "title": "Should We Fire the Manager?" },
			{ "id": "women", "title": "Women's Sports" }
<?php
		break;
	case "tech":
?>
			{ "id": "this-site", "title": "About this Site" },
			{ "id": "ai-view", "title": "My View on AI" }
<?php
		break;
	}
?>
	]
}
