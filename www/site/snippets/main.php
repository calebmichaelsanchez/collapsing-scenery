<div id="main" class="video-cont">
  <div class="main-logo ghosted">
    <?php include('assets/images/main/logo.svg') ?>
  </div>
  <?php
    $bgImage = $data->image("cs-metacops.jpg");
  ?>
  <video autoplay loop class="main-video" poster="<?php echo $bgImage->url() ?>">
    <?php foreach($data->videos() as $video): ?>
      <source src="<?php echo $video->url() ?>" />
    <?php endforeach ?>
  </video>
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
