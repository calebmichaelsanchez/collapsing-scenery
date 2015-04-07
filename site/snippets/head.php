<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <?php echo js('assets/js/libs/modernizr.js') ?>

  <?php echo css('assets/css/libs/bigvideo.css') ?>
  <?php echo css('assets/css/app.css') ?>

</head>
<body>

  <header>
    <?php snippet('menu') ?>
  </header>