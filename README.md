# iSel

iSel is icon selectbox for icon fonts. Specially for [zmdi font set](http://http://zavoloklom.github.io/material-design-iconic-font/index.html "zmdi font set"), but adaptation to any icon font should be easy enough.

![screenshot](https://user-images.githubusercontent.com/4839225/38322176-f90954c0-3839-11e8-9a10-6da8992995f1.png)

## Requirements

For default installation you will need:
- zmdi font 2.2.0 (http://zavoloklom.github.io/material-design-iconic-font/index.html)
- jQuery 3.3.1 (http://jquery.com/)

### Installation

`npm install`


### Usage

Just include isel.min.css and isel.min.js files.

There is iSel.html file with basic functionality for reference.

### Adaptation

You can freely modify and adapt functionality to your needs. Please take in account that this is only basic version with minimal number of functionalities. 

For simpler development cycle, there was used Node and Grunt.

There is created grunt watcher process, that will automatically compile project js and css files.

## License

Source code is licensed under MIT license. View LICENSE file in sources.

## Version

| Version | Date | Functionality |
| ------------ | ------------ | ------------ |
| 0.1.0 | 2018-04-04  |  Published first version with basic functionality. It is possible to select icon for each container separatelly and after selection there is class added to icon container. You must then parse each container separately for its classes. |
