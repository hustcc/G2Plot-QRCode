import { Options } from '@antv/g2plot';

export type PixelData = {
  i: number;
  j: number;
  isBackground: boolean;
  isForeground: boolean;
  detection: 'inner' | 'middle' | 'outer';
  detectionPosition: 'tl' | 'tr' | 'bl';
};

export interface QRCodeOptions
  extends Omit<Options, 'data' | 'xField' | 'yField' | 'xAxis' | 'yAxis' | 'axis' | 'legend' | 'tooltip' | 'label'> {
  /** qrcode 的内容文本 */
  readonly data: string;
  /** 二维码 correctLevel */
  readonly correctLevel?: 'L' | 'M' | 'Q' | 'H';
  /** 二维码 typeNumber */
  readonly typeNumber?: any;
  // readonly effect?: 'fusion' | 'round' | 'rect';
  /** 二维码前景色 */
  readonly foregroundColor?: string;
  /** 二维码背景色 */
  readonly backgroundColor?: string;
  /** 单元格样式 */
  readonly pixelStyle?: (pixelData: PixelData) => object;
}
