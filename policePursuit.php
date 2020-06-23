<!DOCTYPE HTML>
<!--
	Snapshot by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Police Pursuit | Ferri de Lange</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/games/TemplateData/style.css" />
		<link rel="icon" href="favicon.ico" type="image/x-icon"/>
    	<script src="assets/games/TemplateData/UnityProgress.js"></script>
		<script src="assets/games/policePursuit/Build/UnityLoader.js"></script>
		<script>
      		var unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/policePursuit/Build/Web Build.json", {onProgress: UnityProgress});
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
									<h1> Police Pursuit <a href="https://github.com/MuskettaMan/Police-Pursuit/tree/master/Assets/Scripts" target="_blank"><i style="font-size:200%" class="fab fa-github"></i></a></h1>
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
											<li>Use the 'A' and 'D' keys to get left and right respectively</li>
											<li>Press the shift key when the boost icon has filled, to gain a burst of speed</li>
											<li>Try to dode the obstacles</li>
										</ul>
									</div>
									<div class="column">
										<h2>Project information</h2>
										<ul>
											<li><b><i class="fas fa-clock"></i> Project duration: </b>3 days</li>
											<li><b><i class="fas fa-calendar-day"></i> Date: </b>2 September 2019</li>
											<li><b><i class="fab fa-unity"></i> Framework / engine: </b>Unity Engine</li>
											<li><b><i class="fas fa-cube"></i></i> Type: </b>3D</li>
											<li><b><i class="fas fa-code"></i> Programming language: </b>C#</li>
											<li><b><i class="fas fa-users"></i> Group: </b>Solo</li>
											<li><b><i class="fab fa-itch-io"></i> Art assets: </b>from <a href="https://quaternius.itch.io/lowpoly-cars" target="_blank"> itch.io</a></li>
											<li><b><i class="fab fa-github"></i> Github: </b><a href="https://github.com/MuskettaMan/Police-Pursuit/tree/master/Assets/Scripts" target="_blank"> here</a></li>
										</ul>
									</div>
								</section>

								<h2>About the project</h2>
								<section class="columns double" style="width: 75%">
									<div class="column">
										<h3>Features</h3>
										<ul>
											<li>Camera shake</li>
											<li>Infite road</li>
											<li>Unique UI</li>
										</ul>
									</div>
									<div class="column">
										<h3>Personal experience</h3>
										<p>
											This is the result of a game jam themed: 'the 80's'. I felt a retro vapor wave theme was in order, since that's iconic from that time span. I only had 3 days to complete the project, so the game it self shouldn't be to elaborate. Luckily most games from that era weren't all that big, ultimately I settled with a 3 path race game. I never had done anything with racing games so it would be nice change of pace. <br>
											The biggest part of this game is, in my opinion, the road and the unending part of it. To do this I created a nice rectangle, plopped a simple road texture on it and made it a prefab. Then I created a factory for the road objects since I didn't want to instantiate and destroy prefabs all the time. <br>
											The car part wasn't all that hard. Found a nice model on itch.io that was free for use. Gave it a rigidbody and a small controller class to handle the speeding and boosting. <br>The UI was quite fun to do. I was messing around with post processing to create some nice effects (vignette, chromatic aberration, bloom, lens distortion), when I noticed that those effects also applied to canvases attached to the camera. That way I created a nice effect around the UI elements and really made them fit in with the scene.<br>
											The camera shake was something new for me. It's done using perlin noise to shift the camera around. Although I had heard of perlin noise and how it works, I didn't know how to apply it to a camera. It's basically done by setting a maximum and multiplying that by the perlin noise do that for all the three dimension on position and rotation. You can set some frequencies and other tweaking variables to get the desired result.
										</p>
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