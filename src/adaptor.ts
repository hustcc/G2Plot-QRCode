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
  const { data, correctLevel, typeNumber, foregroundColor, backgroundColor, cellStyle } = options;

  const dataArr = [];
  // qrcode 的二维数组
  const matrix = qr(data, correctLevel, typeNumber);
  // 将qrcode 的二维数组排成数据
  matrix.forEach((item, i) => {
    item.forEach((isDark, j) => {
      dataArr.push({ i, j, isDark });
    });
  });

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
    .color('isDark', (v: boolean) => {
      return v ? foregroundColor : backgroundColor;
    })
    .style('i*j*isDark', (i: number, j: number, isDark: boolean) => {
      return typeof cellStyle === 'function' ? cellStyle(i, j, isDark) : {};
    });

  chart.coordinate().reflect('y');

  // 关闭组件
  chart.axis(false);
  chart.legend(false);
  chart.tooltip(false);
  chart.animate(false);

  return params;
}
