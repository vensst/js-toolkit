# Guide

## Introduction

[@vensst/js-toolkit](https://github.com/vensst/js-toolkit) is a JavaScript utility library that integrates commonly used frontend JavaScript functions.

## Installation

### Using npm

```shell
npm install @vensst/js-toolkit -S
```

```js
// Import all functions
import jsToolkit from "@vensst/js-toolkit"
// Import without third-party dependencies
import jsToolkit from "@vensst/js-toolkit/lib/index.js"

jsToolkit.random(1, 100)

// Import on demand
import {random} from "@vensst/js-toolkit"

random(1, 100)
```

### Using script tag

```html

<script src="https://unpkg.com/@vensst/js-toolkit"></script>
<script>
  jsToolkit.random(1, 100)
</script>
```


