# 📱 Mobile Device Emulator

<div align="center">
  <img src="https://raw.githubusercontent.com/danielangelo1/react-mobile-emulator/main/preview.png" alt="Mobile Device Emulator Preview" width="500" />
  <p>A pure CSS mobile device emulator for React</p>
</div>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#basic-usage">Basic Usage</a> •
  <a href="#api">API</a> •
  <a href="#supported-devices">Supported Devices</a> •
  <a href="#examples">Examples</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## ✨ Features

- 🔄 **Zero Dependencies** - Built with pure CSS
- 📱 **Multiple Devices** - iPhone, Galaxy, Pixel and more
- 🔄 **Orientation Modes** - Portrait and landscape
- 🖼️ **Realistic Frames** - Precise device frame visualization
- 📏 **Adjustable Scale** - Resize as needed
- 🌐 **External URL Support** - Load any URL inside the emulator
- 🧩 **Highly Customizable** - Custom device specifications

## 📦 Installation

```bash
npm install react-mobile-emulator
# or
yarn add react-mobile-emulator
# or
pnpm add react-mobile-emulator
```

## 🚀 Basic Usage

```jsx
import { MobileDeviceEmulator } from 'react-mobile-emulator';

function App() {
  return (
    <MobileDeviceEmulator
      deviceType="iphone13"
      orientation="portrait"
      scale={1}
    >
      <div>Your content here</div>
    </MobileDeviceEmulator>
  );
}
```

### Loading an External URL

```jsx
import { MobileDeviceEmulator } from 'react-mobile-emulator';

function ExternalUrlExample() {
  return (
    <MobileDeviceEmulator deviceType="galaxyS21" url="https://example.com" />
  );
}
```

## 📋 API Reference

### `<MobileDeviceEmulator />`

| Prop              | Type                                                                 | Default      | Description                                            |
| ----------------- | -------------------------------------------------------------------- | ------------ | ------------------------------------------------------ |
| `deviceType`      | `'iphone13' \| 'iphone14Pro' \| 'galaxyS21' \| 'pixel6' \| 'custom'` | `'iphone13'` | Device type to emulate                                 |
| `orientation`     | `'portrait' \| 'landscape'`                                          | `'portrait'` | Device orientation                                     |
| `children`        | `ReactNode`                                                          | -            | Content to display inside device frame                 |
| `url`             | `string`                                                             | -            | URL to load in an iframe (alternative to children)     |
| `scale`           | `number`                                                             | `1`          | Optional CSS scale factor                              |
| `customSpecs`     | `DeviceSpecs`                                                        | -            | Custom device specifications (for deviceType='custom') |
| `showFrame`       | `boolean`                                                            | `true`       | Display device frame                                   |
| `showButtons`     | `boolean`                                                            | `true`       | Display device buttons (power, volume)                 |
| `className`       | `string`                                                             | -            | Custom container class name                            |
| `backgroundColor` | `string`                                                             | `'#f5f5f5'`  | Optional background color                              |

### Types

```typescript
type DeviceType =
  | 'iphone13'
  | 'iphone14Pro'
  | 'galaxyS21'
  | 'pixel6'
  | 'custom';

type Orientation = 'portrait' | 'landscape';

type DeviceSpecs = {
  width: number;
  height: number;
  borderRadius: number;
  bezelColor: string;
  bezelThickness: number;
  notchType?: 'dynamic-island' | 'notch' | 'punch-hole' | 'none';
  notchWidth?: number;
  notchHeight?: number;
};
```

## 📱 Supported Devices

| Device        | Type            | Resolution   | Notes                  |
| ------------- | --------------- | ------------ | ---------------------- |
| iPhone 13     | `'iphone13'`    | 390 × 844    | Standard notch         |
| iPhone 14 Pro | `'iphone14Pro'` | 393 × 852    | Dynamic Island         |
| Galaxy S21    | `'galaxyS21'`   | 360 × 800    | Punch-hole             |
| Pixel 6       | `'pixel6'`      | 393 × 830    | Punch-hole             |
| Custom        | `'custom'`      | User-defined | Requires `customSpecs` |

## 💡 Advanced Examples

### Custom Device

```jsx
<MobileDeviceEmulator
  deviceType="custom"
  customSpecs={{
    width: 375,
    height: 812,
    borderRadius: 40,
    bezelColor: '#000000',
    bezelThickness: 10,
    notchType: 'none',
  }}
>
  <YourApp />
</MobileDeviceEmulator>
```

### Controlling Orientation and Scale

```jsx
import { useState } from 'react';
import { MobileDeviceEmulator, Orientation } from 'react-mobile-emulator';

function ResponsiveExample() {
  const [orientation, setOrientation] = useState < Orientation > 'portrait';
  const [scale, setScale] = useState(1);

  return (
    <div>
      <div className="controls">
        <button
          onClick={() =>
            setOrientation(
              orientation === 'portrait' ? 'landscape' : 'portrait'
            )
          }
        >
          Toggle Orientation
        </button>
        <input
          type="range"
          min={0.5}
          max={1.5}
          step={0.1}
          value={scale}
          onChange={e => setScale(Number(e.target.value))}
        />
      </div>

      <MobileDeviceEmulator
        deviceType="iphone14Pro"
        orientation={orientation}
        scale={scale}
      >
        <YourApp />
      </MobileDeviceEmulator>
    </div>
  );
}
```

### Frameless Emulation

```jsx
<MobileDeviceEmulator deviceType="pixel6" showFrame={false}>
  <YourApp />
</MobileDeviceEmulator>
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Inspired by various device emulators
- Built with React and TypeScript
- Developed with performance and zero dependencies in mind

---

<div align="center">
  <sub>Crafted with ❤️ for the React Community</sub>
</div>
```
