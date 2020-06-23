<?php
	function setIconActive($fileName)
	{	
		if(basename($_SERVER["REQUEST_URI"], ".php") == $fileName or (basename($_SERVER["REQUEST_URI"], ".php") == "Portfolio" and $fileName == "index")) 
		{
			echo "class=\"active\"";
		}
	}
?>

<!-- Nav -->
<nav id="nav">
	<ul>
		<li><a href="index.php"   		       <?php setIconActive("index")?> >	              <i class="fas fa-home">     <span>Home          </span></i></a></li>
		<li><a href="aboutMe.php"              <?php setIconActive("aboutMe")?> >             <i class="fas fa-user-tie"> <span>About Me      </span></i></a></li>
		<li><a href="gallery.php"              <?php setIconActive("gallery")?> >		      <i class="fas fa-gamepad">  <span>Portfolio		</span></i></a></li>
		<li><i class="fas fa-grip-lines"></i></li>
		<li><a href="mazeGenerator.php"        <?php setIconActive("mazeGenerator")?> >       <i class="fas fa-running">  <span>Maze Generator</span></i></a></li>
		<li><a href="MaRequest2019.php"        <?php setIconActive("MaRequest2019")?> >       <i class="fas fa-snowflake"><span>Ma Request	</span></i></a></li>
		<li><a href="policePursuit.php"        <?php setIconActive("policePursuit")?> >       <i class="fas fa-car-crash"><span>Police Pursuit</span></i></a></li>
		<li><a href="flockingSimulation.php"   <?php setIconActive("flockingSimulation")?> >  <i class="fas fa-kiwi-bird"><span>Flocking Simulation</span></i></a></li>
		<li><a href="polarPerlinNoiseLoop.php" <?php setIconActive("polarPerlinNoiseLoop")?> ><i class="fas fa-undo">     <span>Perlin Noise</span></i></a></li>
		
		
	</ul>
</nav>