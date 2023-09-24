<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  
  <title><?php the_title(); ?></title>
  <meta name="description" content="<?php echo get_the_excerpt(); ?>"/>
  
  <?php wp_head();?>
</head>
