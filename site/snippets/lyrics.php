<section id="lyrics" class="lyrics-container">
	<article class="ghosted">
		<div class="title">
			<h1><?php echo $data->title()->html() ?></h1>
		</div>
		<!--	<ul class="tracks">
				<li><a href="#">Lorem Track Title</a></li>
				<li><a href="#">Lorem Track Title</a></li>
				<li><a href="#">Lorem Track Title</a></li>
				<li><a href="#">Lorem Track Title</a></li>
			</ul>-->
		<div class="lyric">
			<div class="lyric-container">
				<div class="lyrics-inner">
					<h5><?php echo $data->track_title()->html() ?></h5>
					<?php echo $data->track_lyrics()->kirbytext() ?>
				</div>
			</div>
			<div class="lyrics-aggregator">
					<a href="#" class="down">
						<svg xmlns="http://www.w3.org/2000/svg" width="51.707" height="26.561" viewBox="0 0 51.707 26.561"><path stroke="#ffffff" stroke-miterlimit="10" d="M51.354.354l-25.5 25.5L.354.354" fill="none"/></svg>
					</a>
					<!-- <a href="#" class="up">up </a> -->
			</div>
		</div>
	</article>
</section>