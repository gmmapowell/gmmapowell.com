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
			{ "id": "systems-thinking", "title": "Systems Thinking" },
			{ "id": "find-out", "title": "Let's Find out Together" },
			{ "id": "forty-years", "title": "Forty Year Decisions" },
			{ "id": "forgive", "title": "Forgive and Forget" },
			{ "id": "induction", "title": "Life is Pointless (by Induction)" },
			{ "id": "aeroplane", "title": "Life is an Aeroplane" },
			{ "id": "rational", "title": "What it means to be Rational" },
			{ "id": "walking-away", "title": "Walking Away from Life" },
			{ "id": "running", "title": "Running To or From?" },
			{ "id": "love-need", "title": "Love is NOT All You Need" },
			{ "id": "living-or-waiting", "title": "Living or Waiting to Die?" },
			{ "id": "live-for-you", "title": "I Would Live for You" },
			{ "id": "open-loops", "title": "Open Loops" },
			{ "id": "justOne", "title": "Just One Mistake" },
			{ "id": "truth-falsehood", "title": "Truth and Falsehood" }
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
			{ "id": "women", "title": "Women's Sports" },
			{ "id": "ivan-cleary", "title": "Ivan Cleary" }
<?php
		break;
	case "tech":
?>
			{ "id": "this-site", "title": "About this Site" },
			{ "id": "ai-view", "title": "My View on AI" },
			{ "id": "balance", "title": "Balance in Agile" },
			{ "id": "iteration", "title": "Iteration" },
			{ "id": "why-estimate", "title": "Why Do We Estimate?" },
			{ "id": "estimate-and-decide", "title": "Estimation and Decisions" },
			{ "id": "literate-programming", "title": "Literate Prograaming" },
			{ "id": "deployer", "title": "A Cloud Deployer" },
			{ "id": "garden", "title": "Planning a Garden" },
			{ "id": "wheels", "title": "Reinventing the Wheel" },
			{ "id": "team-radar", "title": "Mapping a Team on a Radar" },
			{ "id": "starting", "title": "Starting and Finishing" },
			{ "id": "parallel-ai", "title": "Truly Parallel Circuitry" },
			{ "id": "rewiring", "title": "Refactoring or Rewiring?" },
			{ "id": "idempotent", "title": "Atomic or Idempotent?" }
<?php
		break;
	}
?>
	]
}
