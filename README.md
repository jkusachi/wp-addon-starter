## WP Theme Add On

### Description
A simple collection of files used to kick start a project to use some helpful development tools

- livereload
- jquery
- babel
- webpack
- sass
- gulp

You don't need to have this be specifically for Wordpress. It's only the case I'm using



### Installation

```
npm install -g webpack 		//install webpack if you dont have it 
npm install -g gulp   		//install gulp if you dont have it 
npm install 				//install packages
```


Add the following to your `functions.php`

```
//CSS
wp_enqueue_style( 'yourtheme-style', get_template_directory_uri() . '/dist/css/main.css' );

//JS
wp_enqueue_script( 'yourtheme-bundlejs', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '0', true );
```
