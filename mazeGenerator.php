<!DOCTYPE HTML>
<!--
	Snapshot by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Maze Generator</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/games/mazeGenerator/TemplateData/style.css" />
    	<script src="assets/games/mazeGenerator/TemplateData/UnityProgress.js"></script>
		<script src="assets/games/mazeGenerator/Build/UnityLoader.js"></script>
		<script>
      		var unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/mazeGenerator/Build/Web Build.json", {onProgress: UnityProgress});
    	</script>
	</head>
	<body>
		<div class="page-wrap">

			<!-- Nav -->
				<?php include_once 'html/general/nav.php'; ?>

			<!-- Main -->
				<section id="main">

					<!-- Header -->
						<header id="header">
							<span>Ferri de Lange | Gameplay developer</span>
						</header>

					<!-- Section -->
						<section>
							<div class="inner">
								<header>
									<h1> Maze Generator <a href="https://github.com/MuskettaMan/PerfectMazeGenerator/tree/master/Assets/Scripts"><i style="font-size:200%" class="fab fa-github"></i></a></h1>
								</header>

								<div class="webgl-content">
      								<div id="unityContainer"></div>
     								 <div class="footer">
        								<div class="webgl-logo"></div>
        								<div class="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
      								</div>
    							</div>

								<br>
								<section class="columns double" style="width: 75%">
									<div class="column">
										<h2>Instructions</h2>
										<ul>
											<li>Use the WASD keys to walk around the maze</li>
											<li>With the dropdown menu you can select a different generation algorithm.</li>
											<li>The regenerate button, generates a new maze.</li>
											<li>With the plus and minus buttons you can increase or decrease the size of the maze</li>
											<li>The "Enable Global Lighting" button lights up the entire maze.</li>
										</ul>
									</div>
									<div class="column">
										<h2>Project information</h2>
										<ul>
											<li><b><i class="fas fa-clock"></i> Project duration: </b>3 weeks</li>
											<li><b><i class="fab fa-unity"></i> Framework / engine: </b>Unity Engine</li>
											<li><b><i class="fas fa-code"></i> Programming language: </b>C#</li>
											<li><b><i class="fas fa-users"></i> Group: </b>Solo</li>
											<li><b><i class="fab fa-itch-io"></i> Art assets: </b>from <a href="https://0x72.itch.io/dungeontileset-ii"> itch.io</a></li>
											<li><b><i class="fab fa-github"></i> Github: </b><a href="https://github.com/MuskettaMan/PerfectMazeGenerator/tree/master/Assets/Scripts"> here</a></li>
										</ul>
									</div>
								</section>

								<h2>About the project</h2>
								<section class="columns double" style="width: 75%">
									<div class="column">
										<h3>Generation algorithms</h3>
										<ul>
											<li>Depth First Search</li>
											<li>Prim's Algorithm</li>
											<li>Sidewinder Algorithm</li>
											<li>Binary Tree Algorithm</li>
											<li>Kruskal's Algorithm</li>
										</ul>
									</div>
									<div class="column">
										<h3>Personal experience</h3>
										<p>This project includes 5 different maze generation algorithms, listed above. My vision for this project originally was to implement a maze generation algorithm.</br>I started out with the depth first search algorithm since it's arguably has the best entry level for them. After the first one I did feel confident to continue and implement more, although that proved easier said than done. The one I struggled most with was Kruskal's algorithm, since I had to implement the idea of shared walls between the cells.</br>After the second algorithm I did start to abstract most concepts in my project to keep it maintainable. I made a delegate for the generation algorithms, so I could easily swap between the diffrent ones.</p>
								</div>
								</section>
							</div>
						</section>

					<!-- Footer -->
						<footer id="footer">
							<div class="copyright">
								&copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images: <a href="https://unsplash.com/">Unsplash</a>.
							</div>
						</footer>
				</section>
		</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>