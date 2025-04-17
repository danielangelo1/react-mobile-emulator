import { ReactNode } from 'react';

export type DeviceType =
  | 'iphone13'
  | 'iphone14Pro'
  | 'galaxyS21'
  | 'pixel6'
  | 'custom';

export type Orientation = 'portrait' | 'landscape';

export type DeviceSpecs = {
  width: number;
  height: number;
  borderRadius: number;
  bezelColor: string;
  bezelThickness: number;
  notchType?: 'dynamic-island' | 'notch' | 'punch-hole' | 'none';
  notchWidth?: number;
  notchHeight?: number;
};

export interface EmulatorProps {
  /** The type of device to emulate */
  deviceType: DeviceType;
  /** The orientation of the device */
  orientation?: Orientation;
  /** Content to display inside the device frame */
  children?: ReactNode;
  /** URL to load in an iframe (alternative to children) */
  url?: string;
  /** Optional CSS scale factor (default: 1) */
  scale?: number;
  /** Custom device specifications (for custom deviceType) */
  customSpecs?: DeviceSpecs;
  /** Show device frame (default: true) */
  showFrame?: boolean;
  /** Show device buttons (power, volume) (default: true) */
  showButtons?: boolean;
  /** Custom class name for the container */
  className?: string;
  /** Optional background color */
  backgroundColor?: string;
}
