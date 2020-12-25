# G2Plot-QRCode

> G2Plot-QRCode: plugin based on G2Plot v2. [LIVE DEMO](https://git.hust.cc/G2Plot-QRCode/), [CodeSandbox](https://codesandbox.io/s/g2plot-qrcode-sf6rv).

[![npm Version](https://img.shields.io/npm/v/g2plot-qrcode.svg)](https://www.npmjs.com/package/g2plot-qrcode)
[![npm License](https://img.shields.io/npm/l/g2plot-qrcode.svg)](https://www.npmjs.com/package/g2plot-qrcode)


![image](https://user-images.githubusercontent.com/7856674/103057591-e0b3d100-45da-11eb-8806-9c654bb84615.png)


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

## Configure

```ts
export interface QRCodeOptions {
  /** qrcode 的内容文本 */
  readonly data: string;
  /** 边框间距，默认 8px */
  readonly padding?: number;
  /** 二维码大小宽高，默认都是 120px */
  readonly width: string;
  readonly height: string;
  /** 二维码 correctLevel，默认 H */
  readonly correctLevel?: 'L' | 'M' | 'Q' | 'H';
  /** 二维码 typeNumber，默认 0 */
  readonly typeNumber?: any;
  // readonly effect?: 'fusion' | 'round' | 'rect';
  /** 二维码前景色，默认 black */
  readonly foregroundColor?: string;
  /** 二维码背景色，默认 white */
  readonly backgroundColor?: string;
  /** 二维码的 icon 中心图标，默认无 */
  readonly icon?: {
    readonly image: string; // 图片
    readonly width?: number; // 图片宽高
    readonly height?: number;
  };
  /** 单元格样式，默认无 */
  readonly pixelStyle?: (pixelData: PixelData) => object;
}
```


## License

MIT@[hustcc](https://github.com/hustcc).
