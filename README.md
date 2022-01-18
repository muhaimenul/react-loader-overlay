# react-loader-overlay
A simple loading overlay with spinner and transitions for React applications.


## Installation
Install using `npm`

```
npm install react-loader-overlay --save
```
or

```bash
yarn add react-loader-overlay --save
```

## Usage:

1. Import `Loader` from `react-loader-overlay`

2. Use `Loader` like a React component. When the `active` prop passed to `Loader` is `true`, a translucent overlay is shown over the entire page, with a spinner in the center.


```javascript
import React, { useState } from "react";
import { Loader } from "react-loader-overlay";

function App() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <Loader active={loading}/>
        <p>
          Welcome! <code>React Pre Loader with Overlay</code>.
        </p>
      </header>
    </div>
  );
}

export default App;
```


## Props :hammer_and_wrench:

- `active` (boolean)
  - default: `true` - whether the loader is visible.


## Contributing

[Muhaimenul Islam](https://github.com/muhaimenul)

## Security Vulnerabilities

If you discover a security vulnerability or bugs within React Overlay Preloader, please send an e-mail to Muhaimenul Islam via [i.muhaimen@gmail.com](mailto:i.muhaimen@gmail.com).

## License

The React Overlay Preloader package is open-sourced project licensed under the [MIT license](https://opensource.org/licenses/MIT).