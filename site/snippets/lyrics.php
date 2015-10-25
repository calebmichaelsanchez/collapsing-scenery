<section id="lyrics" class="lyrics-container">
	<article class="ghosted">
		<div class="title">
			<h1><?php echo $data->title()->html() ?></h1>
			<!-- List the tracks here -->
			<ul class="tracks">
				<?php foreach($data->children()->visible() as $song):
					$songTitle = $song->title()->html();
					$songTitle = str_replace(' ', '_', $songTitle);
					$songTitle = strtolower($songTitle);
				?>
					<li class="track"><a href="#<?php echo $songTitle; ?>"><?php echo $song->title() ?></a></li>
				<?php endforeach ?>
			</ul>

		</div>
		<!-- for loop -->
		<div class="lyric">
			<?php foreach($data->children()->visible() as $song):
					$songTitle = $song->title()->html();
					$songTitle = str_replace(' ', '_', $songTitle);
					$songTitle = strtolower($songTitle);
				?>
				<div class="lyric-container" id="<?php echo $songTitle; ?>">
      		<div id="lyrics-inner" class="lyrics-inner">
      			<h5><?php echo $song->title()->html() ?></h5>
      			<?php echo $song->lyrics()->kirbytext() ?>
      		</div>
      	</div>
    	<?php endforeach ?>
    	<div class="lyrics-aggregator">
  			<a id="up" href="#" class="up">
  				<svg xmlns="http://www.w3.org/2000/svg" width="51.707" height="26.561" viewBox="0 0 51.707 26.561"><path stroke="#404040" stroke-miterlimit="10" d="M51.354.354l-25.5 25.5L.354.354" fill="none"/></svg>
  			</a>
  			<a id="down" href="#" class="down">
  				<svg xmlns="http://www.w3.org/2000/svg" width="51.707" height="26.561" viewBox="0 0 51.707 26.561"><path stroke="#404040" stroke-miterlimit="10" d="M51.354.354l-25.5 25.5L.354.354" fill="none"/></svg>
  			</a>
    	</div>
    </div>
	</article>
</section>