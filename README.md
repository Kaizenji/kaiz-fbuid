# kaiz-fbuid

A simple Node.js package to retrieve the UID of Facebook profiles, pages, or groups using link.

## Installation :
```bash
npm install kaiz-fbuid
```

## Usage :
```js
const kaiz = require('kaiz-fbuid');

(async () => {
  const url = 'https://facebook.com/someprofile';
  const data = await kaiz(url);
  console.log(data);
})();
```
## Output Example :
```js
{
    "UID": "100095290150085"
}
```
