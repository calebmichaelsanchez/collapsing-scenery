<section class="lyrics-container">
	<article class="ghosted">
		<div class="title">
			<h1><?php echo $data->title()->html() ?></h1>
		</div>
		<div class="lyric">
			<div class="lyric-container">
				<div class="lyrics-inner">
					<h5><?php echo $data->track_title()->html() ?></h5>
					<?php echo $data->track_lyrics()->kirbytext() ?>
				</div>
			</div>
			<div class="lyrics-aggregator">
					<a href="#" class="down">down</a>
					<a href="#" class="up">up </a>
			</div>
		</div>
	</article>
</section>