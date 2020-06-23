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
											<li><b><i class="fas fa-cube"></i></i> Type: </b>3D</li>
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
										<h3>Flocking simulation</h3>
										<p></p>
									</div>
									<div class="column">
										<h3>Viewing angles for the boids</h3>
										<p></p>
									</div>
									<div class="column">
										<h3>Bucket optimizations</h3>
										<p>The entire game area, the area the boids can move around in, is sub divided into buckets.<br>The problem with agents to act on their surround agents is that they have to check with every other agent to update their state. You might think that because they have a perception radius they only have to check within that radius. But to check whether they are in that radius we have to go over each one. Luckily this can be optimized by using <a target="_blank" href="https://github.com/MuskettaMan/Flocking-Simulation/blob/master/Assets/Scripts/Boid.cs#L244">buckets</a>!<br>A bucket is nothing more than cell that keeps track of the boids that are in their bucket, so each time they <a target="_blank" href="https://github.com/MuskettaMan/Flocking-Simulation/blob/master/Assets/Scripts/Bucket.cs#L77">leave a bucket</a> they get removed from that bucket and automatically <a target="_blank" href="https://github.com/MuskettaMan/Flocking-Simulation/blob/master/Assets/Scripts/Bucket.cs#L92">get registered when they enter</a>.<br>The way I've implemented this in Unity is with the Box Collider component, I've set it to trigger mode so it detects when other colliders enter it. I attached a script that adds the boid to a list when it enters and removes it when it leaves it.<br>Now the part of keeping track of them in the different buckets is done, we just have to use it when we need to update the states of the boids. For this I used <a target="_blank" href="https://docs.unity3d.com/ScriptReference/Physics.OverlapSphere.html">Physics.OverlapSphere()</a>, I pass in the current position and the perception radius. This method returns a bunch of colliders that are in that overlap, then I check which of those are buckets. Finally I get each tracked boid from the buckets and use those for my <a target="_blank" href="https://github.com/MuskettaMan/Flocking-Simulation/blob/master/Assets/Scripts/Boid.cs#L125">calculations.</a></p>
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