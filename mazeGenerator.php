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
									<h1> Maze Generator <a href="https://github.com/MuskettaMan/PerfectMazeGenerator"><i style="font-size:200%" class="fab fa-github"></i></a></h1>
								</header>

								<div class="webgl-content">
      								<div id="unityContainer"></div>
     								 <div class="footer">
        								<div class="webgl-logo"></div>
        								<div class="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
      								</div>
    							</div>

								<br>
								<section class="columns double">
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
											<li><b>Project duration: </b>3 weeks</li>
											<li><b>Framework / engine: </b>Unity Engine</li>
											<li><b>Programming language: </b>C#</li>
											<li><b>Group: </b>Solo</li>
											<li><b>Art assets: </b>from <a href="https://0x72.itch.io/dungeontileset-ii">itch.io</a></li>
										</ul>
									</div>
								</section>

								
								<h2>About the project</h2>
								<p>When I started working on this I had little to no knowledge about maze generation, so I started reading up on them.<br/>I did some prototyping at the start using the easy algorithms (depth first search). After the first algorithm was finished I felt quite confident and immediately started on the next one: Prim's algorithm. This one was completely different from the previous one, way more complicated and my code base was starting to work against me.<br/>So I abstracted all the code and put the generation algorithms in their own delegates so I can load in how many I want. After that it was actually plain sailing, all the other algorithms were hard ofcourse. But the way I managed my project/code base made it easier to maintain.</p>
								
							</div>
						</section>

					<!-- Contact -->
						<section id="contact">
							<!-- Social -->
								<?php include_once 'html/general/about_me.php'; ?>

							<!-- Form -->
								<?php include_once 'html/general/contact.php'; ?>

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