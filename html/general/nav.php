<?php
	function setIconActive($fileName)
	{	
		if(basename($_SERVER["REQUEST_URI"], ".php") == $fileName) 
		{
			echo "class=\"active\"";
		}
	}
?>

<!-- Nav -->
<nav id="nav">
	<ul>
		<li><a href="index.php"   <?php setIconActive("index")?> ><i class="fas fa-home"><span>Home</span></i></a></li>
		<li><a href="gallery.php" <?php setIconActive("gallery")?> ><i class="fas fa-gamepad"><span>Gallery</span></i></a></li>
		<li><a href="generic.php" <?php setIconActive("generic")?> ><i class="fas fa-copy"><span>Generic</span></i></a></li>
		<li><a href="mazeGenerator.php" <?php setIconActive("mazeGenerator")?> ><i class="fas fa-running"><span>Maze Generator</span></i></a></li>
	</ul>
</nav>