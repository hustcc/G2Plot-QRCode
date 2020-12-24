# G2Plot-QRCode

> G2Plot-QRCode: plugin based on G2Plot v2. [LIVE DEMO](https://git.hust.cc/G2Plot-QRCode/)

[![npm Version](https://img.shields.io/npm/v/g2plot-qrcode.svg)](https://www.npmjs.com/package/g2plot-qrcode)
[![npm License](https://img.shields.io/npm/l/g2plot-qrcode.svg)](https://www.npmjs.com/package/g2plot-qrcode)


![image](https://user-images.githubusercontent.com/7856674/98671518-5b0ff500-238f-11eb-8e61-73c17165ca10.png)


## Install

```bash
$ npm i --save g2plot-qrcode
```


## Usage

 - render

```ts
import { G2Plot } from '@antv/g2plot';
import { adaptor, defaultOptions } from 'g2plot-qrcode';

const qr = new G2Plot('container', {
  // 二维码文本
  data: 'Hello, g2plot qrcode!',
  // 间距
  padding: 8,
  // 宽高
  width: 120,
  height: 120,
  // 背景前景颜色
  backgroundColor: 'white',
  foregroundColor: 'black',
  typeNumber: 0,
  correctLevel: 'H', // L M H Q
  // 样式自定义
  pixelStyle: (pixelData) => ({}),
}, adaptor, defaultOptions);

qr.render();
```

 - update

```ts
qr.update({
  data: 'hello world!',
});
```


## License

MIT@[hustcc](https://github.com/hustcc).
