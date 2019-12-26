<?php get_header(); ?>

<main>
  <?php while(have_posts()):the_post(); ?>
   <ul class="breadcrumb-list">
    <li class="breadcrumb-item">トップ</li>
    <li class="breadcrumb-item"><?php $cat = get_the_category(); $cat = $cat[0]; { echo '<a href="'.get_category_link($cat->term_id).'">'.$cat->cat_name.'</a>'; } ?></li>
  </ul>
  <div id="post-<?php the_ID(); ?>" class="post-article">
    <?php
      if(has_post_thumbnail()){
        the_post_thumbnail('large', array( 'class' => 'image-responsive'));
      }
    ?>
    <h1>
      <?php the_title(); ?>
      <br>
          <?php // get_fieldはカスタムフィールドの情報を取得する関数 ?>
          <?php // the_fieldはカスタムフィールドの情報を出力する関数 ?>
          <?php if(get_field('sub-title')): ?>
            <div class="sub-title"><?php the_field('sub-title'); ?></div>
          <?php endif; ?>
    </h1>
    <p class="post-meta">
      <span class="post-date"><?php the_time('Y年n月j日'); ?></span>
    </p>
    <?php the_content(); ?>
    <?php if(get_field('relation-link')): ?>
          <p class="relation-link">
            関連リンク：
            <a href="<?php the_field('relation-link'); ?>" target="_blank">
              <?php the_field('relation-link'); ?>
            </a>
          </p>
        <?php endif; ?>
    <?php 
    // 表示される内容を変更する
    $args = array(
        'before' => '<div class="pager">',
        'after' => '</div>',
        'link_before' => '<span>',
        'link_after' => '</span>',
      );
    wp_link_pages($args); ?>
    <div class="author">
      <?php //　複数人で記事を投稿した時に、記事に投稿者を表示する機能 ?>
      <?php the_author(); ?>
    </div>
    <div class="author-description">
      <?php // get_the_author_metaはユーザーのプロフィール情報を呼び出す ?>
      <?php echo get_the_author_meta('description') ?>
    </div>
  </div>
  <div class="navigation">
    <?php //前のページを表示するためにはprevious_post_link()、次の記事を表示するにはnext_post_link()という関数を使います。()の中に「%link」と入れると、前後の記事のタイトルを表示することができます。 ?>
    <?php if(get_next_post()): ?>
      <div class="next-page">次の記事:<?php next_post_link('%link'); ?></div>
    <?php 
    endif;
    
    if(get_previous_post()):
    ?>
      <div class="prev-page">前の記事:<?php previous_page_link('%link'); ?></div>
    <?php endif; ?>
  </div>
  <?php // コメントフォームの呼び出し ?>
  <?php comments_template ?>
  <?php endwhile; ?>
</main>

<?php get_footer(); ?>
