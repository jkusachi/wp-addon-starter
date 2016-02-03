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

Create the following directory structure in your theme or project root

```
- src
	- js
		- main.js
	- scss
	
- gulpfile.js
- package.json
- webpack.config.js
```


`src/js/main.js` - The Entry point for Webpack.  This can be configured in the `webpack.config.js`

`src/scss` - where SASS Files are stored. If you dont like the path, look in the `gulpfile.js`

`gulpfile.js` - Gulpfile

`webpack.config.js` - Webpack Config.  If you want a different entrypoint or destination for JS, look here


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