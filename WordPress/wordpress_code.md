# WordPressプログラミング要点まとめ

## テンプレート階層
テンプレートの適用には優先順位がある。
処理は以下の図の左から右に流れていく。
<figure>
  <img src='http://wpdocs.osdn.jp/wiki/images/wp-template-hierarchy.jpg' width='1000'>
  <figcaption>引用：<a href='http://wpdocs.osdn.jp/wiki/images/wp-template-hierarchy.jpg'>WordPress CodeX</a></figcaption>
</figure>


## 使用頻度の高いタグ＆関数一覧
---
- `<?php echo home_url(); ?>`:	サイトのホームURLを表示
- `<?php bloginfo('name'); ?>`:	サイトのタイトルを表示
- `<?php echo get_stylesheet_uri(); ?>`:	テーマのスタイルシートのURLを表示
- `<?php echo get_stylesheet_directory_uri(); ?>`:	テーマのスタイルシートがあるフォルダのURLを表示
---
- `<?php get_header(); ?>`:	header.phpを読み込む
- `<?php get_footer(); ?>`: footer.phpを読み込む
- `<?php get_sidebar(); ?>`:	sidebar.phpを読み込む
- `<?php comments_template(); ?>`:	コメントテンプレートを読み込む
- `<?php get_template_part('○○'); ?>`:	○○.phpを読み込む
---
- `<?php wp_head(); ?>`:	テンプレートファイル内の`</head>`タグ直前に必ず挿入する
- `<?php wp_footer(); ?>`:	テンプレートファイル内の`</body>`タグ直前に必ず挿入する
---
- `<?php the_title(); ?>`:	投稿（固定ページ）タイトルを表示する
- `<?php the_permalink(); ?>`:	投稿（固定ページ）のURLを表示する
- `<?php the_content(); ?>`:	投稿（固定ページ）の本文を表示する
- `<?php the_excerpt(); ?>`:	投稿（固定ページ）の抜粋を表示する
- `<?php the_category(); ?>`:	投稿が属するカテゴリーのリンク付きリストを表示する
- `<?php the_tags(); ?>`:	投稿につけられたタグのリンク付きリストを表示する
- `<?php the_date(); ?>`:	投稿（固定ページ）の公開日時を表示する
- `<?php next_post_link(); ?>`:	1つ新しい投稿へのリンクを表示する
- `<?php previous_post_link(); ?>`:	1つ古い投稿へのリンクを表示する
- `<?php next_posts_link(); ?>`:	現在表示中の一覧より新しい投稿一覧へのリンクを表示する（投稿一覧ページ）
- `<?php previous_posts_link(); ?>`:	現在表示中の一覧より古い投稿一覧へのリンクを表示する（投稿一覧ページ）
---
- `<?php esc_html(); ?>`:	HTMLの文字列をエスケープ（無害化）する
- `<?php esc_url(); ?>`:	URLの文字列をエスケープ（無害化）する
---
- `is_front_page()`:	サイトのフロントページが表示されている場合
- `is_admin()`:	ダッシュボードが表示されている場合
---
- `is_page()`:	固定ページが表示されている場合
- `is_page('15')`:	ID15の固定ページが表示されている場合
- `is_page('about-us')`:	スラッグ”about-us”の固定ページが表示されている場合
- `is_page( array ( 4, 10, 15) )`:	IDが4、10、15のいずれかの固定ページが表示されている場合
---
- `is_single()`:	単一の投稿（固定ページではない）が表示されている場合
- `is_single('24')`:	ID24の投稿が表示されている場合
- `is_single('hello')`:	スラッグ”hello”の投稿が表示されている場合
- `is_single( array ( 3, 10, 22 ) )`:	IDが3、10、22のいずれかの投稿が表示されている場合
- `in_category('blog')`:	スラッグ”blog”のカテゴリーに属する投稿が表示されている場合
---
- `is_archive()`:	アーカイブページが表示されている場合
---
- `is_category('news')`:	スラッグ”news”のカテゴリーのアーカイブページが表示されている場合
- `is_category( array(1, 2, 5) )`:	IDが1、2、5のいずれかのカテゴリーのアーカイブページが表示されている場合
---
- `is_author('taro')`:	ニックネーム”taro”の作成者のアーカイブページが表示されている場合
---
- `is_date()`:	日付別アーカイブページが表示されている場合
- `is_year()`:	年別アーカイブページが表示されている場合
- `is_month()`:	月別アーカイブページが表示されている場合
---
- `is_search()`:	検索結果ページが表示されている場合
- `is_404()`:	404 Not Foundページが表示されている場合


参考: [WordPress Codex](http://wpdocs.osdn.jp/Main_Page)

## テンプレート階層
WordPressはファイル名によって表示するページのテンプレートが決まるようにルールが用意されている。このことを「テンプレート階層」と呼ぶ

- トップページ：`index.php`もしくは`home.php`、`front-page.php`
- 個別記事ページ： `single.php`
- 記事一覧ページ：　`archive.php`
- カテゴリーページ：　`category.php`
- タグページ：　`tag.php`
- 固定ページ：　`page.php`


