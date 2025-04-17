
import { DeviceSpecs, DeviceType } from './types';

export const deviceSpecs: Record<Exclude<DeviceType, 'custom'>, DeviceSpecs> = {
  iphone13: {
    width: 390,
    height: 844,
    borderRadius: 44,
    bezelColor: '#1A1A1C',
    bezelThickness: 12,
    notchType: 'notch',
    notchWidth: 150,
    notchHeight: 34,
  },
  iphone14Pro: {
    width: 393,
    height: 852,
    borderRadius: 53,
    bezelColor: '#1A1A1C',
    bezelThickness: 12,
    notchType: 'dynamic-island',
    notchWidth: 120,
    notchHeight: 35,
  },
  galaxyS21: {
    width: 360,
    height: 800,
    borderRadius: 34,
    bezelColor: '#121212',
    bezelThickness: 10,
    notchType: 'punch-hole',
    notchWidth: 10,
    notchHeight: 10,
  },
  pixel6: {
    width: 393,
    height: 830,
    borderRadius: 30,
    bezelColor: '#1F1F1F',
    bezelThickness: 14,
    notchType: 'punch-hole',
    notchWidth: 10,
    notchHeight: 10,
  },
};

// Default device specs to fall back to if needed
const defaultDeviceSpecs: DeviceSpecs = {
  width: 390,
  height: 844,
  borderRadius: 44,
  bezelColor: '#1A1A1C',
  bezelThickness: 12,
  notchType: 'notch',
  notchWidth: 150,
  notchHeight: 34,
};

export const getDeviceSpecs = (deviceType: DeviceType, customSpecs?: DeviceSpecs): DeviceSpecs => {
  if (deviceType === 'custom' && customSpecs) {
    return customSpecs;
  }
  
  // Check if the device type exists in our specs
  if (deviceType !== 'custom' && deviceSpecs[deviceType]) {
    return deviceSpecs[deviceType];
  }
  
  // Log error and return default specs if device type is invalid
  console.error(`Invalid device type: ${deviceType}. Falling back to default device.`);
  return defaultDeviceSpecs;
};
