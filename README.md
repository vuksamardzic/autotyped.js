# autotyped.js
autotyped.js is a library that types any string.

[Demo](https://autotypedjs.surge.sh/)

### Includes

Just add a link to the css file in your `<head>`:

```html
<link rel="stylesheet" type="text/css" href="./dist/autotyped.css"/>
```

Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="./dist/autotyped.min.js"></script>
```

### Usage
```html
<h1 class="autotyped-init">Text to be autotyped!</h1>
```

```html
<script>
    autotyped.init();
</script>
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
selector | string | '.autotyped-init' | CSS selector. Also your element needs to have `autotyped-init` class regardless what selector you choose.
animate | boolean | true | Choose whether you animate or not.
animation | string | 'bounce' | Choose which animation you use. Available `'bounce'`, `'rotate'`, `'rubber-band'`, `'pop-in'`, `'left-slide'`, `'right-slide'`, `'meteor-shower'`.
speed | int | 500 | Autotype speed in ms.
text | string | undefined | Text you feed to autotyped.js

### Example
```html
<p class="autotyped-init">Text to be autotyped!</p>
 
<script>
    //we want it to go faster or slower than default (500)
    autotyped.init({speed: 200});
</script>
```
```html
<p class="autotyped-init">Text to be autotyped!</p>
 
<script>
    //we somehow don't want animations... weird.. but hey, your choice
    autotyped.init({animate: false});
</script>
```
```html
<p id="myElement" class="autotyped-init">Text to be autotyped!</p>
 
<script>
    //we want specific selector with custom speed and other animation
    autotyped.init({speed: 250, animation: 'rotate', selector: '#myElement'});
</script>
```
#### License

Licensed under the MIT license.

Made with :heart: by Vuk Samardžić.