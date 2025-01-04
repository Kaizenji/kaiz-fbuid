# kaiz-fbuid

A simple Node.js package to retrieve the UID of Facebook profiles, pages, or groups using their username in the URL.

## Instalation :
```bash
> npm install kaiz-fbuid
```

## Usage :
```js
const fbuid = require('kaiz-fbuid');

const url = 'https://www.facebook.com/zuck';  // Example URL
fbuid(url).then((uid) => {
  console.log('Facebook UID:', uid);
}).catch((error) => {
  console.error('Error:', error);
});

```
## Output Example :
```
