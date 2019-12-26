<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
<!-- wp_titleは現在のページのタイトルを表示または取得できるWordPressの関数。ここではタイトルの右側に「|」という記号を表示させるようにしている。 -->
<title>
<?php wp_title( ' | ', true, 'right' ); ?>
<?php bloginfo( 'name' ); ?>
</title>
<!-- bloginfoはサイトの情報を出力することができるWordPressの関数 -->
<!-- wp_headはWordPressに必要なさまざまな情報を読み込むための関数。</head>の直前に必ず挿入する必要がある -->
<?php wp_head(); ?>
</head>

<!-- body_classはページの種類にあわせてそれぞれ違ったクラス名を出力することができるWordPressの関数 -->
<body <?php body_class(); ?>>

<header>
  <h1 class="logo">
    <?php // esc_urlは不正・有害なURLを無害化する関数 ?>
    <a href="<?php echo esc_url( home_url('/') ); ?>">
    <?php // 画像を表示するにはget_template_directory_uriを利用する ?>
      <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="N予備校">
    </a>
  </h1>
  <nav class='pc-menu'>
    <ul class='pc-only'>
      <li><a href="#">大学受験</a></li>
      <li><a href="#">プログラミング</a></li>
      <li><a href="#">Webデザイン</a></li>
    </ul>
  </nav>
  <a class="button pc-only" href="#">お問い合わせ</a>
  <a href="#" class="menu sp-only">
    <img src="<?php echo get_template_directory_uri(); ?>/images/icon-menu.png" alt="メニュー" class="icon-menu">
    <img src="<?php echo get_template_directory_uri(); ?>/images/icon-close.png" alt="閉じる" class='icon-close'>
  </a>
</header>
<nav class="sp-menu">
  <ul>
    <li><a href="#">大学受験</a></li>
    <li><a href="#">プログラミング</a></li>
    <li><a href="#">Webデザイン</a></li>
    <li><a href="#">お問い合わせ</a></li>
  </ul>
</nav>
