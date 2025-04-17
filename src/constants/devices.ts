export type DeviceType = 'iphone14' | 'samsungS22' | 'pixel6';

export const devices: Record<
  DeviceType,
  {
    width: number;
    height: number;
    cssClass: string;
  }
> = {
  iphone14: { width: 390, height: 844, cssClass: 'iphone-frame' },
  samsungS22: { width: 360, height: 780, cssClass: 'samsung-frame' },
  pixel6: { width: 412, height: 915, cssClass: 'pixel-frame' },
};
