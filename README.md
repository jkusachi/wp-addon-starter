## WP Theme Add On

### Description
A simple collection of files used to kick start a project to use some helpful development tools

- livereload
- jquery
- babel
- webpack
- sass
- gulp

You don't need to have this be specifically for Wordpress. It's only the case I'm using.

This is to be taken very lightly and as a work in progress. I'm mainly using it because I build sites so often, it's nice to have a lil toolkit I can port on the go.


## Installation

```
npm install -g webpack 		//install webpack if you dont have it 
npm install -g gulp   		//install gulp if you dont have it 
npm install 				//install packages
```

## Setup

Add the following to your `functions.php`

Copy the `src` directory into your theme or project root

```
- src
	- js 
		- main.js
		- parts
	- scss
		- includes
		- parts		
		- vendor
	
- gulpfile.js
- package.json
- webpack.config.js
```

**Summary**

`src/js/main.js` The Entry point for Webpack.  This can be configured in the `webpack.config.js`

`src/js/parts` Sample include directory. 


`src/scss` Where SASS Files are stored. 

- `includes` Contains generic SASS partials for use in your site  

  - Fonts
  -  Mixins
  -  Variables
- `/parts` Page Layout Elements  
  - Header
  - Footer
- `vendor` Store anything libs `Neat`, `Bourbon`, in here

The `src/main.scss` file includes partials that are named the same as the directories they are in (`includes/includes`,`parts/parts`, `vendor/vendor`). If you add any Include, Parts, or Vendor stuff, be sure to update the main Partial to include it.

`gulpfile.js` - Gulpfile

`webpack.config.js` - Webpack Config.  If you want a different entrypoint or destination for JS, look here


### Add the files to WP Functions
```
//CSS
wp_enqueue_style( 'yourtheme-style', get_template_directory_uri() . '/dist/css/main.css' );

//JS
wp_enqueue_script( 'yourtheme-bundlejs', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '0', true );
```


### Destination

Files will be built to the `/dist` directory in your project/theme root

After running the project, you will see a structure similar to

```
- dist
	- js
		- [js files here]
	- css
		- [css files here]
```

## Running

To run, type in terminal:

`npm run dev`

This will start up the task runner, live reload, listen for file changes, etc...