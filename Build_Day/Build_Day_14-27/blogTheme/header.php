<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Konrad | Blog</title>


<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Montserrat" rel="stylesheet">
  <link rel="shortcut icon" href="img/favicon.png" type="image/png">

  <meta name="description" content="a personal blog">
  <meta name="keywords" content="blog web development front-end">
  <meta name="author" content="">

  <meta name="robots" content="index, follow">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">

  <!-- <script src="../bower_components/jquery/dist/jquery.min.js"></script>
  <script src="js/script.js"></script>
  <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script> -->
  <script
    src="https://code.jquery.com/jquery-3.1.1.min.js"
    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    rel="stylesheet">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet">
  <!-- <link rel="stylesheet" href
  ="../bower_components/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href
  ="../bower_components/bootstrap/dist/css/bootstrap.min.css"> -->
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/style.css" />

<?php wp_head(); ?>
</head>
<body>


    <nav class="navbar navbar-default navbar-fixed-top">
      <?php
  // Fix menu overlap
  if ( is_admin_bar_showing() ) echo '<div style="min-height: 32px;"></div>';
?>
      <div class="container-fluid">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed"
          data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse-1">
        <a class="navbar-brand" href="#">kg</a>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Code</a></li>
          <?php wp_list_pages( '&title_li=' ); ?>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>


  <header>

    <div class="header-image">
      </div>
        <h1>
        <a href="<?php bloginfo( 'wpurl' );?>">
        <?php echo get_bloginfo( 'name' ); ?>
      </a>
    </h1>
      <p>
        <?php echo get_bloginfo( 'description' ); ?>
      </p>

        <p>Hello, world! The year is <?php echo date(Y);?>.</p>
  </header>
  <div class="container">
