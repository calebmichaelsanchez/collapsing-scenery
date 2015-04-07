  <footer class="footer cf" role="contentinfo">

    <div class="copyright">
      <?php echo $site->copyright()->kirbytext() ?>
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
<?php echo js('assets/js/libs/BigVideo.js') ?>

<!-- Bootstrap carousel -->
<?php echo js('assets/js/libs/bootstrap.min.js') ?>

<!-- Smooth Scroll -->
<?php echo js('assets/js/libs/jquery.smooth-scroll.min.js') ?>

<!-- custom js -->
<?php echo js('assets/js/app.js') ?>
<script>
</script>

</body>
</html>