import { Params } from '@antv/g2plot';
import { QRCodeOptions } from './types';
import { qr } from './qrcode';

/**
 * 默认配置
 * @param options
 */
export const defaultOptions = {
  data: 'Hello, g2plot qrcode!',
  backgroundColor: 'white',
  foregroundColor: 'black',
  typeNumber: 0,
  correctLevel: 'H',
  padding: 8,
  width: 120,
  height: 120,
  autoFit: false,
};

/**
 * 适配器
 * @param params
 */
export function adaptor(params: Params<QRCodeOptions>): Params<QRCodeOptions> {
  const { chart, options } = params;
  const { data, correctLevel, typeNumber, foregroundColor, backgroundColor, pixelStyle } = options;

  // qrcode 的数据
  const dataArr = qr(data, correctLevel, typeNumber);

  chart.data(dataArr);

  chart.scale({
    i: {
      type: 'cat',
    },
    j: {
      type: 'cat',
    },
  });

  chart
    .polygon()
    .position('i*j')
    .color('isForeground', (v: boolean) => {
      return v ? foregroundColor : backgroundColor;
    })
    .style(
      'i*j*isForeground*isBackground*detection*detectionPosition',
      (i, j, isForeground, isBackground, detection, detectionPosition) => {
        return typeof pixelStyle === 'function'
          ? pixelStyle({ i, j, isForeground, isBackground, detection, detectionPosition })
          : {};
      },
    );

  chart.coordinate().reflect('y');

  // 关闭组件
  chart.axis(false);
  chart.legend(false);
  chart.tooltip(false);
  chart.animate(false);

  return params;
}
