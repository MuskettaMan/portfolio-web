<!DOCTYPE HTML>
<!--
	Snapshot by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Portfolio</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="favicon.ico" type="image/x-icon"/>
		<link rel="stylesheet" href="assets/css/main.css" />
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

					<!-- Gallery -->
						<section id="galleries">

							<!-- Photo Galleries -->
								<div class="gallery">

									<!-- Filters -->
										<header>
											<h1>Portfolio</h1>
											<ul class="tabs">
												<li><a href="#" data-tag="All" class="button active">All</a></li>
												<li><a href="#" data-tag="Unity" class="button">Unity</a></li>
												<li><a href="#" data-tag="2D" class="button">2D</a></li>
												<li><a href="#" data-tag="VR" class="button">VR</a></li>
											</ul>
										</header>

										<div class="content">
											<div class="media All Unity 2D">
												<a href="mazeGenerator.php"><img src="images/thumbs/mazeGameThumb.png" alt="" /></a>
											</div>
											<div class="media All Unity VR">
												<a href="MaRequest2019.php"><img src="images/thumbs/maRequestThumb.jpg" alt="" /></a>
											</div>
											<div class="media All Unity 3D">
												<a href="policePursuit.php"><img src="images/thumbs/policePursuitThumb.jpg" alt="" /></a>
											</div>
										</div>
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