# EditorStyles

Scaffold styles and variables for markdown, WordPress entry content, etc.

## Demo

https://editorstyles.github.io/

## Install

**With npm:**

```shell
$ npm install --save editorstyles
```

**Or, download manually:**

[![unreset.css](https://img.shields.io/badge/Download-css-brightgreen.svg)](https://raw.githubusercontent.com/ixkaito/unreset-css/master/css)

## Import

**Sass (example of GitHub):**

```scss
@import 'node_modules/editorstyles/github';
```

**Node-sass (example of GitHub):**

1.  If you’re using [Eyeglass](http://eyeglass.rocks), skip to Step 2. Otherwise, you’ll need to add EditorStyles to your node-sass `includePaths` option. `require("editorstyles").includePaths` is an array of directories that you should pass to node-sass. How you do this depends on how node-sass is integrated into your project.

2.  Import EditorStyles into your Sass files:

    ```scss
    @import "github";
    ```

**CSS:**

```html
<link rel="stylesheet" href="github.css">
```

## Usage

Add a `editorstyle` class to the container of the markdown body or WordPress entry content.

```html
<div class="editorstyle">
    <h1>This is an H1</h1>
    <p>This is a paragraph.</p>
    <ul>
        <li>This is a list item.</li>
        <li>This is a list item.</li>
    </ul>
</div>
```

## Copyright / License

Copyright © 2016 the contributors of the EditorStyles project under the [MIT License](https://github.com/editorstyles/editorstyles/blob/master/LICENSE).
