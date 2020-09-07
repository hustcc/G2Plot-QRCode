# G2Plot-QRCode

> G2Plot-QRCode: plugin based on G2Plot v2. [LIVE DEMO](https://git.hust.cc/g2plot-qrcode)

[![npm Version](https://img.shields.io/npm/v/g2plot-qrcode.svg)](https://www.npmjs.com/package/g2plot-qrcode)
[![npm License](https://img.shields.io/npm/l/g2plot-qrcode.svg)](https://www.npmjs.com/package/g2plot-qrcode)


## Install

```bash
$ npm i --save g2plot-qrcode
```


## Usage

```ts
import { G2Plot } from '@antv/g2plot';
import { adaptor, defaultOptions } from 'g2plot-qrcode';

const qr = new G2Plot('container', {
  data: 'Hello, g2plot qrcode!',
  padding: 8,
  width: 120,
  height: 120,
  backgroundColor: 'white',
  foregroundColor: 'black',
  typeNumber: 0,
  correctLevel: 'H', // L M H Q
}, adaptor, defaultOptions);

qr.render();
```


## License

MIT@[hustcc](https://github.com/hustcc).
