
	<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2> <!-- Tenemos el título de cada artículo que enlaza la página de publicación de blog individual. -->
    
	<p><?php the_date(); ?> <!-- muestra la fecha -->
    
    by <a href="#"><?php the_author(); ?></a></p> <!-- el autor -->

    <?php	the_post_thumbnail('thumbnail'); ?>

 <?php the_excerpt(); ?>

</div>