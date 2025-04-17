import React, { useState, useEffect } from 'react';
import { EmulatorProps, Orientation } from './types';
import { getDeviceSpecs } from './deviceData';
import DeviceFrame from './components/DeviceFrame';
import { cn } from '../../lib/utils';

const MobileDeviceEmulator: React.FC<EmulatorProps> = ({
  deviceType = 'iphone13',
  orientation = 'portrait',
  children,
  url,
  scale = 1,
  customSpecs,
  showFrame = true,
  showButtons = true,
  className,
  backgroundColor = '',
}) => {
  const [currentOrientation, setCurrentOrientation] = useState<Orientation>(
    orientation
  );
  const [iframeLoading, setIframeLoading] = useState(true);

  // Safely get device specs with validation
  const specs = getDeviceSpecs(deviceType, customSpecs);

  if (!specs) {
    console.error('Failed to load device specifications');
    return <div>Error: Failed to load device specifications</div>;
  }

  // Update orientation if prop changes
  useEffect(() => {
    setCurrentOrientation(orientation);
  }, [orientation]);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: backgroundColor,
    borderRadius: '0.5rem',
    maxWidth: '100%',
    overflow: 'auto',
  };

  const emulatorStyle: React.CSSProperties = {
    transform: `scale(${scale})`,
    transformOrigin: 'center',
    transition: 'transform 0.3s ease',
  };

  const renderContent = () => {
    if (url) {
      return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {iframeLoading && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f3f4f6',
              }}
            >
              <div
                style={{
                  animation: 'spin 1s linear infinite',
                  borderRadius: '50%',
                  height: '3rem',
                  width: '3rem',
                  borderTop: '2px solid #3b82f6',
                  borderBottom: '2px solid #3b82f6',
                }}
              ></div>
            </div>
          )}
          <iframe
            src={url}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: 'white',
            }}
            title="Mobile Device Emulator Content"
            onLoad={() => setIframeLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      );
    }
    return children;
  };

  const content = (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {renderContent()}
    </div>
  );

  return (
    <div
      className={cn('mobile-device-emulator-container', className)}
      style={containerStyle}
    >
      <div style={emulatorStyle}>
        {showFrame ? (
          <DeviceFrame
            specs={specs}
            orientation={currentOrientation}
            showButtons={showButtons}
          >
            {content}
          </DeviceFrame>
        ) : (
          <div
            style={{
              width:
                currentOrientation === 'portrait' ? specs.width : specs.height,
              height:
                currentOrientation === 'portrait' ? specs.height : specs.width,
              overflow: 'hidden',
              borderRadius: 8,
              transform:
                currentOrientation === 'landscape' ? 'rotate(90deg)' : 'none',
            }}
          >
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDeviceEmulator;
