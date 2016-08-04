<footer class="footer">
  
  <div class="footer-inner">
    <div class="footer-social">
      <ul>
        <li>
          <a target="_blank" href="<?php echo $site->youtube()->html() ?>">
            <?php include('assets/images/social/youtube.svg') ?>
          </a>
        </li><li>
          <a target="_blank" href="<?php echo $site->twitter()->html() ?>">
            <?php include('assets/images/social/twitter.svg') ?>
          </a>
        </li><li>
          <a target="_blank" href="<?php echo $site->tumblr()->html() ?>">
            <?php include('assets/images/social/tumblr.svg') ?>
          </a>
        </li><li>
          <a target="_blank" href="<?php echo $site->instagram()->html() ?>">
            <?php include('assets/images/social/instagram.svg') ?>
          </a>
        </li><li>
          <a target="_blank" href="<?php echo $site->soundcloud()->html() ?>">
            <?php include('assets/images/social/soundcloud.svg') ?>
          </a>
        </li>
      </ul>
    </div><div class="copyright">
        <span>All content copyright</span>
        <span>Collapsing Scenery <?php echo date('Y'); ?></span>
      </div>
  </div>
</footer>



<!-- Big Video JS -->
<?php echo js('assets/js/libs/jquery-3.1.0.min.js') ?>
<script scr="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"> </script>
<?php echo js('assets/js/libs/jquery-ui.min.js') ?>

<!-- Bootstrap carousel -->
<?php echo js('assets/js/libs/bootstrap.min.js') ?>

<!-- Smooth Scroll -->
<?php echo js('assets/js/libs/jquery.smooth-scroll.min.js') ?>

<!-- Tweetie -->
<?php echo js('assets/js/libs/tweetie.js') ?>

<!-- custom js -->
<?php echo js('assets/js/app.js') ?>
<script>
</script>

</body>
</html>