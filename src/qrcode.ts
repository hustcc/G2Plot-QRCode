import qrcode from 'qrcode-generator';
import { QRCodeOptions, PixelData } from './types';
import { getPositionDetection } from './detection';

// Enable UTF_8 support
qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];

/** 生成 qr 的 arr 数组 */
export function qr(
  data: QRCodeOptions['data'],
  correctLevel: QRCodeOptions['correctLevel'],
  typeNumber: QRCodeOptions['typeNumber'],
): PixelData[] {
  const qr = qrcode(typeNumber, correctLevel);
  qr.addData(data);
  qr.make();
  const count = qr.getModuleCount();

  const qrcodePixel = [];

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      const isDark = qr.isDark(i, j);

      const pd = getPositionDetection(i, j, count);

      qrcodePixel.push({
        i,
        j,
        // 前景
        isForeground: isDark,
        // 背景
        isBackground: !isDark,
        ...pd,
      });
    }
  }

  return qrcodePixel;
}
