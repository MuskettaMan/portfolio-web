<!DOCTYPE HTML>
<!--
	Snapshot by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Flocking Simulation | Ferri de Lange</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/games/TemplateData/style.css" />
		<link rel="icon" href="favicon.ico" type="image/x-icon"/>
    	<script src="assets/games/TemplateData/UnityProgress.js"></script>
		<script src="assets/games/flockingSimulation/Build/UnityLoader.js"></script>
		<script>
      		var unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/flockingSimulation/Build/WebBuild.json", {onProgress: UnityProgress});
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
									<h1> Flocking Simulation <a href="https://github.com/MuskettaMan/Flocking-Simulation/tree/master/Assets/Scripts" target="_blank"><i style="font-size:200%" class="fab fa-github"></i></a></h1>
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
											<li>Use the sliders to control the intensity of the different behaviours</li>
											<li>Press the reset button to start off all the boids spawning in random positions and going in random directions</li>
										</ul>
									</div>
									<div class="column">
										<h2>Project information</h2>
										<ul>
											<li><b><i class="fas fa-clock"></i> Project duration: </b>1 week</li>
											<li><b><i class="fas fa-calendar-day"></i> Date: </b>17 May 2020</li>
											<li><b><i class="fab fa-unity"></i> Framework / engine: </b>Unity Engine</li>
											<li><b><i class="fas fa-vector-square"></i></i> Type: </b>3D</li>
											<li><b><i class="fas fa-code"></i> Programming language: </b>C#</li>
											<li><b><i class="fas fa-users"></i> Group: </b>Solo</li>
											<li><b><i class="fab fa-itch-io"></i> Art assets: </b>from <a href="https://itch.io/" target="_blank"> itch.io</a></li>
											<li><b><i class="fab fa-github"></i> Github: </b><a href="https://github.com/MuskettaMan/Flocking-Simulation/tree/master/Assets/Scripts" target="_blank"> here</a></li>
										</ul>
									</div>
								</section>

								<h2>About the project</h2>
								<section class="columns double" style="width: 75%">
									<div class="column">
										<h3>Notable features</h3>
										<ul>
											<li>Flocking simulation (obviously)</li>
											<li>Bucket optimizations</li>
										</ul>
									</div>
									<div class="column">
										<h3>Personal experience</h3>
									</div>
								</section>
							</div>
						</section>

					<!-- Footer -->
						<?php include_once 'html/general/footer.php'; ?>
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