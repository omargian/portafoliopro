<?php
/**
* Template Name: Single-articulos
*/

// Exit if accessed directly
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

get_header();?>

<?php
// Exit if accessed directly
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
?>

<?php get_header(); ?>

<!-- ====== MENU AREA ====== -->
  <div class="menu-area-posts sticky-top">
          <nav class='navbar navbar-expand-lg navbar-light bg-light'>            
              <a class="navbar-brand px-3" href="<?php echo get_home_url(); ?>">Navbar</a>
                <button class='navbar-toggler' data-bs-target="#navbarNavDropdown" data-bs-toggle='collapse' type='button'>
                  <span class="navbar-toggler-icon"></span>
                </button>         
            <div class='navbar-collapse collapse justify-content-end px-3' id="navbarNavDropdown">
              <ul class='navbar-nav'>
                <!-- Top Nav -->
                <li class="nav-item"><a class='smoth-scroll nav-link active' href='https://portafoliochef.stw.mx/#home'>Home <div class='ripple-wrapper'></div></a></li>
                <li class="nav-item"><a class='smoth-scroll nav-link' href='https://portafoliochef.stw.mx/#about'>About me</a></li>
                <li class="nav-item"><a class='smoth-scroll nav-link' href='https://portafoliochef.stw.mx/#experience'>experience</a></li>
                <li class="nav-item"><a class='smoth-scroll nav-link' href='https://portafoliochef.stw.mx/#service'>Service</a></li>
                <li class="nav-item"><a class='smoth-scroll nav-link' href='https://portafoliochef.stw.mx/#work'>Portfolio</a></li>
                <li class="nav-item"><a class='smoth-scroll nav-link' href='https://portafoliochef.stw.mx/#testimonial'>Testimonial</a></li>
                <li class="nav-item"><a class='smoth-scroll nav-link button-scroll2' data-scrollTo='contact' href='<?php the_permalink() ?>/#contact'>Contact</a></li>
                <script>
                  const link = document.querySelector('.button-scroll2');
                  link.addEventListener('click', (event) => {
                    event.preventDefault(); // evitar que la página se recargue
                    // aquí puedes agregar cualquier otra lógica que desees ejecutar
                  });
                </script>
              </ul>
            </div>
          </nav>
  </div>
<!-- ====== END MENU AREA ====== -->

<main class="container mt-5">
<div class="work-inner">
<!-- START SINGLE WORK DESIGN AREA -->
<div class="outer-wrapper">
<div class="main-wrapper px-3">
<div class="content section" id="content" name="Content">
<div class="" data-version="1" id="Blog1">
<div class="big_post_image" id="pic1">
<center>
<?php
  $content = '<div>' . get_the_content() . '</div>';
  $doc = new DOMDocument();
  libxml_use_internal_errors(true); // habilitar el uso de errores internos de libxml
  $doc->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8')); // convertir a HTML-ENTITIES para manejar caracteres especiales
  libxml_clear_errors(); // limpiar los errores internos de libxml
  $img_tags = $doc->getElementsByTagName('img');
  $first_img = $img_tags->item(0);
  $first_img_src = $first_img->getAttribute('src');
?>
<img src="<?php echo $first_img_src; ?>" class="first_post_img">
</center>
</div>

<div class="blog-posts hfeed work-posts grid">
<!--Can't find substitution for tag [defaultAdStart]-->
<h2 class="date-header">
<span>Saturday, April 19, 2014</span></h2>
<div class="date-outer">
<div class="sjps entry-content">
<div style="text-align: center;">
<h5 align="center" class="tc-title tc-title-center mt-3">
<?php the_title(); ?> 
</h5>
</div>
<div class="post-body entry-content" id="post-body-2471568112950064796" itemprop="description articleBody">
<div class="entry-title">
</div>
<div dir="ltr">
<div class="separator" style="clear: both; text-align: center;">
</div>
ACA VA LA DESCRIPCIÓN DE LA PUBLICACION!!!!!
<?php 
  $content = apply_filters('the_content', get_the_content());
  // buscar la primera imagen en el contenido
  preg_match('/<img.+?src=[\'"](.*?)[\'"].*?>/i', $content, $matches);
  $first_img = $matches[0];
  // reemplazar la primera imagen por una cadena vacía
  $content = preg_replace('/<img.+?src=[\'"](.*?)[\'"].*?>/i', '', $content, 1);
  // mostrar el contenido modificado
  echo $content;
?>
</div>
<div style="clear: both;"></div>
<div class="row justify-content-md-end mt-5 mb-3">
        <div class="col anterior" style="text-align:left;">
          <?php previous_post_link( '%link', 'Anterior Post', true ); ?>
        </div>
        <div class="col siguiente" style="text-align:right;">
          <?php next_post_link( '%link', 'Siguiente Post', true ); ?>
        </div>
    </div> 
</div>

<div class="post-footer">
<span class="group" id="post-tags"><span id="tags-name">Tags: </span>
<a href="#" rel="tag">
Gallery
</a>
<a href="#" rel="tag">
Life &amp; style
</a>
<a href="#" rel="tag">
ver
</a>
<a href="#" rel="tag">
Video
</a>
</span>

<ul class="single-share social-pop group">
<li>
  <a data-text="Leave Your Shoes At Home" data-via="Intense" href="http://twitter.com/share?url=<?php the_permalink(); ?>&amp;title=<?php the_title(); ?>" onclick="window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;" rel="nofollow"><i class="fa fa-twitter"></i></a></li>
<li>
  <a href="http://www.facebook.com/sharer.php?u=<?php the_permalink(); ?>&amp;title=<?php the_title(); ?>" onclick="window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;" rel="nofollow"><i class="fa fa-facebook"></i></a></li>
<li><a href="https://plus.google.com/u/0/share?url=<?php the_permalink(); ?>" onclick="window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;" rel="nofollow"><i class="fa fa-google-plus"></i></a></li>
<li><a href="http://pinterest.com/pin/create/button/?url=<?php the_permalink(); ?>&amp;media=<?php echo $first_img_src; ?>&amp;description=<?php the_excerpt(); ?>" onclick="window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;" rel="nofollow"><i class="fa fa-pinterest"></i></a></li>
</ul>
</div>
</div>
<div class="aisa-author">
<div class="aisa-author-info">
<div class="author-avatar">

<a href="#">
<img alt="stw.mx" src="https://stw.mx/wp-content/uploads/2023/02/logoSTW-ABSTRACT-2.png" title="stw" avatar="" avatar-91="" photo"="" height="91" width="91">
</a>
</div>
<div class="author-content">
<a class="author-name" href="#" rel="author" title="stw">
Stw.mx
</a>
<p>
<script type="text/javascript">document.write(authorbio);
</script>Hello, esta es una autobiografía</p>
</div>
</div>

<ul class="social">
<li>
<script>
document.write("<a href='"+Furl+"' target='_blank'><i class='fa fa-facebook'></i></a>");
</script><a href="https://facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a>
</li>
<li>
<script>
document.write("<a href='"+Turl+"' target='_blank'><i class='fa fa-twitter'></i></a>");
</script><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a>
</li>
<li>
<script>
document.write("<a href='"+Lurl+"' target='_blank'><i class='fa fa-linkedin'></i></a>");
</script><a href="https://skype.com/" target="_blank"><i class="fa fa-linkedin"></i></a>
</li>
<li>
<script>
document.write("<a href='"+Iurl+"' target='_blank'><i class='fa fa-instagram'></i></a>");
</script><a href="https://instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a>
</li>
</ul>
</div>
<!-- RELATED POSTS --> 
<div class="content-inner">
      <h3 id="related-header">Related Posts</h3>
      <div class="related-list right-img">
         <ul id="related-posts" class="related-posts group">
      <?php 
        // Define our WP Query Parameters
        $the_query = new WP_Query( 'posts_per_page=6' ); ?>
        <?php 
        // Start our WP Query
        while ($the_query -> have_posts()) : $the_query -> the_post(); 
        // Muestra el hiperLink el titulo del post y la miniatura en 100x100 dentro de un array
      ?>
            <li class="related-post">
               <div class="post-thumb">
               <?php $image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'sidebar-custom-image' ); ?>
                  <img width="247" height="157" src="<?php echo $image_url[0]; ?>" class="attachment-futuremag-related-thumb size-futuremag-related-thumb wp-post-image" alt="I had spent time with my dad">
                  <a href="<?php the_permalink(); ?>" class="thumb-overlay">
                  </a>
               </div>
               <div class="small-content">
                  <h4 class="post-title">
                     <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                  </h4>
               </div>
               <span class="post-divider"><span>
            </li>
            <?php 
              // Repeat the process and reset once it hits the limit
              endwhile;
              wp_reset_postdata();
            ?>
         </ul>
      </div>
</div>
<!-- FIN RELATED POSTS --> 

<!-- COMENTARIOS -->
<?php
//if ( comments_open() || get_comments_number() ) :
//    comments_template();
//endif;
?>
<div id="top-comment">
   <div class="widget2" id="top-comment1">
      <div class="centerare1">
         <div class="comments" id="comments">
            <a name="comments"></a>
            <div class="komhead">
               <h4>13 comments:</h4>
               <div class="stripe-line"></div>
            </div>
            <div class="comments-content">
               <div id="comment-holder">
                  <div class="comment-thread toplevel-thread">
                     <div class="avatar-image-container">
                        <div class="comment-header">
                           <cite class="user">
                           <a href="#" rel="nofollow">Robet Hai</a>
                           </cite>
                           <span class="icon user ">
                           </span>
                           <span class="datetime secondary-text">
                           <a rel="nofollow" href="#">October 15, 2022 at 6:25 AM</a>
                           </span>
                        </div>
                        <p class="comment-content">some one People in here they spam . yeah the template nice. am buy sure </p>
                     </div>
                     <div class="comment-replies">
                        <div class="comment-thread inline-thread hidden">
                           <div></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p class="comment-footer">
               FOOTER COMENTARIO
            </p>
            <div class="comment-form">
               FORMULARIO DE COMENTARIO
            </div>
            <p></p>
            <div id="backlinks-container">
               <div id="Blog1_backlinks-container"></div>
            </div>
         </div>
      </div>
   </div>
</div>
<div style="clear: both;"></div>
</div>
</div>
</div>
</div>
</div><!-- /main-wrapper -->

<!-- FIN COMENTARIOS -->
<!-- SIDEBAR -->
<div class="sidebar-wrapper">
<div class="sidebar section">
<!-- POPULAR POSTS -->   
<div class="widget PopularPosts">
   <h2>Popular Posts</h2>
   <div class="popular-posts">
      <ul>
      <?php 
        // Define our WP Query Parameters
        $the_query = new WP_Query( 'posts_per_page=3' ); ?>
        <?php 
          // Start our WP Query
          while ($the_query -> have_posts()) : $the_query -> the_post(); 
          // Muestra el hiperLink el titulo del post y la miniatura en 100x100 dentro de un array
        ?>
         <li>
            <div class="item-thumbnail-only">
               <div class="item-thumbnail">
               <?php $image_url_sidebar = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'sidebar-custom-image' ); ?>
                  <a href="<?php the_permalink(); ?>" target="_blank">
                  <img alt="" border="0" height="72" src="<?php echo $image_url_sidebar[0]; ?>" width="72">
                  </a>
               </div>
               <div class="item-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></div>
            </div>
            <div style="clear: both;"></div>
         </li>
         <?php 
              // Repeat the process and reset once it hits the limit
              endwhile;
              wp_reset_postdata();
            ?>
      </ul>
      <div class="clear"></div>
   </div>
</div>
<!-- FIN POPULAR POSTS -->

<!-- ETIQUETAS -->
<div class="widget Label">
   <h2>Labels</h2>
   <div class="widget-content cloud-label-widget-content">
      <span class="label-size label-size-5">
      <a dir="ltr" href="#">Business</a>
      </span>
      <span class="label-size label-size-5">
      <a dir="ltr" href="#">Gallery</a>
      </span>
      <span class="label-size label-size-5">
      <a dir="ltr" href="#">Games</a>
      </span>
      <span class="label-size label-size-5">
      <a dir="ltr" href="#">Life &amp; style</a>
      </span>
      <span class="label-size label-size-1">
      <a dir="ltr" href="#">PHOTOGRAPHY</a>
      </span>
      <span class="label-size label-size-3">
      <a dir="ltr" href="#">Slider</a>
      </span>
      <span class="label-size label-size-5">
      <a dir="ltr" href="#">Song</a>
      </span>
      <span class="label-size label-size-1">
      <a dir="ltr" href="#">Travel</a>
      </span>
      <span class="label-size label-size-5">
      <a dir="ltr" href="#">ver</a>
      </span>
      <span class="label-size label-size-4">
      <a dir="ltr" href="#">Video</a>
      </span>
      <div class="clear"></div>
   </div>
</div>
<!-- FIN ETIQUETAS --> 

<!-- FACEBOOK -->
    <div class="widget HTML" data-version="1" id="HTML13">
      <h2 class="title">Facebook</h2>
      <div class="widget-content">
          <div id="fb-root" class=" fb_reset">
            <div style="position: absolute; top: -10000px; width: 0px; height: 0px;"></div>
          </div>
          <script>
            (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.9&appId=384288681912501";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          </script>
          <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/omargianstw/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=384288681912501&amp;container_width=293&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fwebsoham%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false">
            <span style="vertical-align: bottom; width: 293px; height: 130px;">
            <iframe name="fd620061898a8c" width="1000px" height="1000px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="TODO ESTO" style="border: none; visibility: visible; width: 293px; height: 130px;" class="">
            </iframe>
            </span>
          </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div><!-- /sidebar-wrapper -->
<div class="clr"></div>
<!-- END SINGLE WORK DESIGN AREA -->
</div>
</div>
</main>

<style>
.contact_image {
  background:url(http://giantec.test/giantec/oscarhernandez/wp-content/uploads/2023/05/foto-oscar-chef-1.jpg)
} 
</style>

<!-- ====== CONTACT AREA ====== -->
<section class='section nopaddingbottom' id='contact'>
   <div class='container-fluid'>
      <div class='row'>
         <!-- CONTACT -->
         <div class='col-md-6 contact_image'>
            <div class='overlay'>
               <div class='contact_info row'>
                  <div class='item col-md-6 col-sm-6'>
                     <i class='fa fa-user'></i>
                     <div>OSCAR hERNANDEZ</div>
                  </div>
                  <div class='item col-md-6 col-sm-6'>
                     <i class='fa fa-envelope'></i>
                     <div><a href='mailto:john@site.com?Subject=Hello' target='_top'>oscar@site.com</a></div>
                  </div>
                  <div class='item col-md-6 col-sm-6'>
                     <i class='fa fa-mobile-phone'></i>
                     <div>+123-456-789</div>
                  </div>
                  <div class='item col-md-6 col-sm-6'>
                     <i class='fa fa-map-marker'></i>
                     <div>New York, EEUU</div>
                  </div>
               </div>
            </div>
         </div>
         <!-- /Contact Image -->
         <!-- Contact Body -->
         <div class='col-md-6 contact_body'>
            <h2>SEND ME A <b style='color:#222;'>MESSAGE</b></h2>
            <div class='contact_form'>
               <div class='contact-form section' id='contact-form'>
                  <div class='ContactForm'>
                     <form id='contactForm' name='contact-form'>
                        <input class='contact_name inputfield' id='ContactForm1_contact-form-name' placeholder='Name* :' required='' type='text'/>
                        <input class='contact_email inputfield' id='ContactForm1_contact-form-email' placeholder='E-mail* :' required='' type='email'/>
                        <textarea class='contact_message inputfield' id='ContactForm1_contact-form-email-message' placeholder='Message* :' required='' type='tel'></textarea>
                        <input class='submit contact_button button' id='ContactForm1_contact-form-submit' style='visibility: visible;' type='submit' value='Send'/>
                        <div style='text-align: center; max-width: 222px; width: 100%'>
                           <p class='contact-form-error-message' id='ContactForm1_contact-form-error-message'></p>
                           <p class='contact-form-success-message' id='ContactForm1_contact-form-success-message'></p>
                        </div>
                     </form>
                     <div class='clear'></div>
                  </div>
               </div>
               <div class='messages'></div>
            </div>
         </div>
         <!-- /Contact Body -->
      </div>
   </div>
   <div class='scroll-to-up'>
      <div class='scrollup'>
         <i class='fa fa-angle-up'></i>
      </div>
   </div>
</section>
<!-- ====== END CONTACT AREA ====== -->
<?php get_footer(); ?>