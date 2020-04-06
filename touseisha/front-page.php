  <?php get_header(); ?>
    <section class="section-contents" id="news">
      <div class="wrapper">
      <?php $term_obj = get_term_by('slug', 'news', 'category'); ?>
        <span class="section-title-en">News Release</span>
        <h2 class="section-title"><?php echo $term_obj->name; ?></h2>
        <p class="section-lead"><?php echo $term_obj->description; ?></p>
        <ul class="news">
        <?php
$news_posts = get_specific_posts( 'post', 'category', 'news', 3);
if ( $news_posts->have_posts() ):
  while( $news_posts->have_posts() ): $news_posts->the_post();
        ?>
          <li class="news-item">
            <a class="detail-link" href="<?php the_permalink(); ?>">
              <time class="time"><?php the_time('Y.m.d'); ?></time>
              <p class="title"><?php the_title(); ?></p>
              <p class="news-text"><?php echo get_the_excerpt(); ?></p>
            </a>
          </li>
          <?php
endwhile;
wp_reset_postdata();
endif;
          ?>
        </ul>
        <div class="section-buttons">
          <button type="button" class="button button-ghost" onclick="javascript:location.href = '<?php echo esc_url( get_term_link( $term_obj )); ?>';">
            <?php echo $term_obj->name; ?>一覧を見る
          </button>
        </div>
      </div>
    </section>
    <section class="section-contents" id="company">
      <div class="wrapper">
      <?php
$company_page = get_page_by_path('company');
$post = $company_page;
setup_postdata( $post );
      ?>
        <span class="section-title-en">Enterprise Information</span>
        <h2 class="section-title"><?php the_title(); ?></h2>
        <p class="section-lead">
          <?php echo get_the_excerpt(); ?>
        </p>
        <div class="section-buttons">
          <button type="button" class="button button-ghost" onclick="javascript:location.href = '<?php echo esc_url( home_url( 'company ')); ?>';">
            <?php the_title(); ?>一覧を見る
          </button>
        </div>
      </div>
      <?php wp_reset_postdata(); ?>
    </section>
<?php get_footer(); ?>
