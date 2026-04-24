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
			{ "id": "arrogant-assertions", "title": "Arrogant Assertions" },
			{ "id": "systems-thinking", "title": "Systems Thinking" },
			{ "id": "find-out", "title": "Let's Find out Together" },
			{ "id": "forty-years", "title": "Forty Year Decisions" },
			{ "id": "forgive", "title": "Forgive and Forget" },
			{ "id": "guys", "title": "Guys is not Gender Neutral" },
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
			{ "id": "truth-falsehood", "title": "Truth and Falsehood" },
			{ "id": "be-it", "title": "Be it, Do it, Say it" },
			{ "id": "say-mean", "title": "Say what you Mean!" },
			{ "id": "no-finally", "title": "Life does not have a Finally Clause" },
			{ "id": "no-time", "title": "I don't have Time" },
			{ "id": "title", "title": "What's in a Title?" }
<?php
		break;
	case "now":
?>
			{ "id": "when-2020-07-15", "title": "2020-07-15" },
			{ "id": "when-2020-11-08", "title": "2020-11-08" },
			{ "id": "when-2021-12-31", "title": "2021-12-31" },
			{ "id": "when-2023-05-02", "title": "2023-05-02" },
			{ "id": "when-2024-12-28", "title": "2024-12-28" },
			{ "id": "when-2025-07-16", "title": "2025-07-16" },
			{ "id": "when-now", "title": "Now" }
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
			{ "id": "agile-done", "title": "Agile Projects are Always 100% Done" },
			{ "id": "literate-programming", "title": "Literate Programming" },
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
