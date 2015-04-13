  <footer class="footer cf" role="contentinfo">
		
		<div class="footer-social">
			<ul>
				<li>
					<a href="<?php echo $site->facebook()->html() ?>">
						<?php include('assets/images/social/facebook.svg') ?>
					</a>
				</li>
				<li>
					<a href="<?php echo $site->twitter()->html() ?>">
						<?php include('assets/images/social/twitter.svg') ?>
					</a>
				</li>
				<li>
					<a href="<?php echo $site->tumblr()->html() ?>">
						<?php include('assets/images/social/tumblr.svg') ?>
					</a>
				</li>
				<li>
					<a href="<?php echo $site->instagram()->html() ?>">
						<?php include('assets/images/social/instagram.svg') ?>
					</a>
				</li>
				<li>
					<a href="<?php echo $site->soundcloud()->html() ?>">
						<?php include('assets/images/social/soundcloud.svg') ?>
					</a>
				</li>
			</ul>
		</div>

    <div class="copyright">
    	<span>All content copyright</span>
      <span>Collapsing Scenery <?php echo date('Y'); ?></span>
    </div>

    <div class="colophon">
      <a href="http://getkirby.com/made-with-kirby-and-love">Made with Kirby and <b>♥</b></a>
    </div>

  </footer>



<!-- Big Video JS -->
<?php echo js('assets/js/libs/jquery.min.js') ?>
<?php echo js('assets/js/libs/jquery-ui.min.js') ?>
<?php echo js('assets/js/libs/EventEmitter.min.js') ?>
<?php echo js('assets/js/libs/eventie.js') ?>
<?php echo js('assets/js/libs/imagesloaded.js') ?>
<?php echo js('assets/js/libs/video.js') ?>
<?php echo js('assets/js/libs/bigvideo.js') ?>

<!-- Instagram Feed -->
<?php echo js('assets/js/libs/instafeed.js') ?>

<!-- Bootstrap carousel -->
<?php echo js('assets/js/libs/jquery.mobile.min.js') ?>
<?php echo js('assets/js/libs/bootstrap.min.js') ?>

<!-- Smooth Scroll -->
<?php echo js('assets/js/libs/jquery.smooth-scroll.min.js') ?>

<!-- Tweetie -->
<?php echo js('assets/js/libs/tweetie.js') ?>

<!-- custom js -->
<?php echo js('assets/_/js/app.js') ?>
<script>
</script>

</body>
</html>