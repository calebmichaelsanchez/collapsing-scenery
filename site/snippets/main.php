<div id="main" class="video-cont" data-video="http://player.vimeo.com/external/125369031.hd.mp4?s=c04fb4bed02ff3e74f4d2ba7e8da6ae5&profile_id=113">
	<div class="main-logo ghosted">
		<?php include('assets/images/main/logo.svg') ?>
	</div>
	<div class="main-social">
		<ul>
			<li>
				<a target="_blank" href="<?php echo $site->youtube()->html() ?>">
					<?php include('assets/images/social/youtube.svg') ?>
				</a>
			</li>
			<li>
				<a target="_blank" href="<?php echo $site->twitter()->html() ?>">
					<?php include('assets/images/social/twitter.svg') ?>
				</a>
			</li>
			<li>
				<a target="_blank" href="<?php echo $site->tumblr()->html() ?>">
					<?php include('assets/images/social/tumblr.svg') ?>
				</a>
			</li>
			<li>
				<a target="_blank" href="<?php echo $site->instagram()->html() ?>">
					<?php include('assets/images/social/instagram.svg') ?>
				</a>
			</li>
			<li>
				<a target="_blank" href="<?php echo $site->soundcloud()->html() ?>">
					<?php include('assets/images/social/soundcloud.svg') ?>
				</a>
			</li>
		</ul>
	</div>
</div>
<?php snippet('menu') ?>