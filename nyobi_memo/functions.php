<?php // functions.phpは、すべてのページで利用できる独自の関数を記述するファイル ?>

<?php

function new_excerpt_more($post) {
    return ' <a href="'. esc_url( get_permalink() ) . '">' . '…続きを読む' . '</a>';
}
add_filter('excerpt_more', 'new_excerpt_more');

// jquery呼び出す
function my_scripts(){
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'javascript',get_template_directory_uri().'/js/sample.js',array('jquery'));
}

add_action( 'wp_enqueue_scripts', 'my_scripts');
// 管理画面でアイキャッチ画像が編集できるようになる
add_theme_support( 'post-thumbnails' );

?>
