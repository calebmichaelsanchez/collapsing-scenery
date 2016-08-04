<section id="video" class="video-container">
  <article class="ghosted">
    <h1><?php echo $data->title()->html() ?></h1>
    <!-- Carousel -->
    <div id="carousel" class="carousel slide" data-ride="carousel">

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <?php foreach($data->children()->visible() as $video): ?>
        <div class="item">
          <div class="wrapper">
            <iframe src="https://player.vimeo.com/video/<?php echo $video->VimeoVideoNumber() ?>?title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <h6><?php echo $video->title()->html() ?></h6>
        </div>
      <?php endforeach ?>

      </div>


      <!-- Controls -->
      <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="17.431" height="16.24" viewBox="0 0 17.431 16.24"><path d="M17.43 8.12c0-.508-.45-.924-1-.924H3.626c-.55 0-.733-.362-.407-.806L6.8 1.52C7.13 1.08 7.06.47 6.65.17c-.41-.302-1.01-.186-1.337.258L.243 7.314c-.325.443-.325 1.168 0 1.61l5.07 6.89c.326.444.928.56 1.337.26.41-.303.478-.91.15-1.355L3.22 9.85c-.326-.444-.142-.806.407-.806H16.43c.55 0 1-.416 1-.924z"/></svg>
      </a>
      <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="17.431" height="16.24" viewBox="0 0 17.431 16.24"><path d="M17.43 8.12c0-.508-.45-.924-1-.924H3.626c-.55 0-.733-.362-.407-.806L6.8 1.52C7.13 1.08 7.06.47 6.65.17c-.41-.302-1.01-.186-1.337.258L.243 7.314c-.325.443-.325 1.168 0 1.61l5.07 6.89c.326.444.928.56 1.337.26.41-.303.478-.91.15-1.355L3.22 9.85c-.326-.444-.142-.806.407-.806H16.43c.55 0 1-.416 1-.924z"/></svg>
      </a>

      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>

    </div>
  </article>
</section>