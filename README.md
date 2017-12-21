# autotyped.js
autotyped.js is a library that types any string.

[Demo](https://autotypedjs.surge.sh/)

#### Includes

Just add a link to the css file in your `<head>`:

```html
<link rel="stylesheet" type="text/css" href="./dist/autotyped.css"/>
```

Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="./dist/autotyped.min.js"></script>
```

###Usage
```javascript
autotyped.init();
```

###Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
selector | string | '.autotyped' | Selector from which we fetch string, can be `#selector` or `.selector`.
animate | boolean | true | Choose whether you animate or not.
animation | string | 'bounce' | Choose which animation you use. We currently have `'bounce', 'rotate'`.
speed | int | 500 | Autotype speed in ms.

###Example
```javascript
//we want it to go faster then default (500)
autotyped.init({speed: 200});
```
```javascript
//we somehow don't want animations... weird.. but hey, your choice
autotyped.init({animate: false});
```
```javascript
//we want specific selector with speed and other animation
autotyped.init({speed: 250, animation: 'rotate', selector: '#myElement'});
```
####License

Licensed under the MIT license.

Made with :heart: by Vuk Samardžić[(@xemichar)](https://github.com/xemichar).