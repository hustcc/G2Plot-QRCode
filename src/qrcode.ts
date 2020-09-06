import qrcode from 'qrcode-generator';
import { QRCodeOptions } from './types';

// Enable UTF_8 support
qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];

/** 生成 qr 的 arr 数组 */
export function qr(
  data: QRCodeOptions['data'],
  correctLevel: QRCodeOptions['correctLevel'],
  typeNumber: QRCodeOptions['typeNumber'],
): boolean[][] {
  const qr = qrcode(typeNumber, correctLevel);
  qr.addData(data);
  qr.make();
  const count = qr.getModuleCount();

  // 两层 map
  return new Array(count).fill(0).map((_, i) => new Array(count).fill(0).map((_, j) => qr.isDark(i, j)));
}
