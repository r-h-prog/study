<?php get_header(); ?>

<main>
  <div class="main-wrapper">
  <h1 class="header">新着のお知らせ</h1>
    <div class="post-list">
      <?php
        if(have_posts()):
          // 記事を繰り返し表示するプログラムをここに記述します
          while(have_posts()) : the_post();
          ?>
          <div class="post-item">
            <?php 
              if (has_post_thumbnail() ){
                // the_post_thumbnail()はアイキャッチ画像をimgタグで出力するWordPressの関数.
                // かっこの中に画像タイプを入れるとサイズを変更できる
                the_post_thumbnail('thumbnail');
              }else{
                ?>
                <img src="https://via.placeholder.com/72?text=N" alt="attachment-thumbnail">
              <?
              }
            ?>
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <p class="post-meta">
              <span class="post-date"><?php the_time('Y年n月j日'); ?> <?php the_time('H:i'); ?></span>
              <span class="post-categories"><?php the_category(','); ?></span>
            </p>
            <?php the_excerpt();?>
          </div>
          <?php
          endwhile;
        else:
        ?>
        <div class="post">
          <h2>記事はありません</h2>
          <p>お探しの記事はありませんでした</p>
        </div>
      <?php
        endif;
      ?>
    </div>
    <?php the_posts_pagination(); ?>
  </div>
</main>

<!-- ページネーション -->
<?php the_posts_pagination(); ?>

<?php get_footer(); ?>
