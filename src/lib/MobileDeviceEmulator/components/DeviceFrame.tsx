
import React from 'react';
import { DeviceSpecs, Orientation } from '../types';
import { cn } from '../../../lib/utils';

interface DeviceFrameProps {
  specs: DeviceSpecs;
  orientation: Orientation;
  showButtons?: boolean;
  children: React.ReactNode;
  className?: string;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({
  specs,
  orientation,
  showButtons = true,
  children,
  className,
}) => {
  // Add validation - if specs is undefined, use default values
  if (!specs) {
    console.error('DeviceFrame: specs prop is undefined, using default values');
    specs = {
      width: 390,
      height: 844,
      borderRadius: 44,
      bezelColor: '#1A1A1C',
      bezelThickness: 12,
      notchType: 'notch',
      notchWidth: 150,
      notchHeight: 34,
    };
  }
  
  const isLandscape = orientation === 'landscape';
  
  const frameStyle: React.CSSProperties = {
    width: isLandscape ? specs.height : specs.width,
    height: isLandscape ? specs.width : specs.height,
    borderRadius: specs.borderRadius,
    backgroundColor: specs.bezelColor,
    padding: specs.bezelThickness,
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transform: isLandscape ? 'rotate(90deg)' : 'none',
    transition: 'transform 0.5s ease',
  };

  const screenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: Math.max(0, specs.borderRadius - specs.bezelThickness),
    overflow: 'hidden',
    backgroundColor: '#fff',
    position: 'relative',
  };

  const renderNotch = () => {
    if (!specs.notchType || specs.notchType === 'none') return null;

    const notchStyle: React.CSSProperties = {
      position: 'absolute',
      backgroundColor: specs.bezelColor,
      zIndex: 10,
    };

    if (specs.notchType === 'dynamic-island') {
      return (
        <div 
          style={{
            ...notchStyle,
            top: isLandscape ? '50%' : 0,
            left: isLandscape ? 0 : '50%',
            transform: isLandscape 
              ? 'translateY(-50%)' 
              : 'translateX(-50%)',
            width: isLandscape ? specs.notchHeight : specs.notchWidth,
            height: isLandscape ? specs.notchWidth : specs.notchHeight,
            borderRadius: Math.min(specs.notchWidth || 0, specs.notchHeight || 0) / 2,
          }}
        />
      );
    }

    if (specs.notchType === 'notch') {
      return (
        <div 
          style={{
            ...notchStyle,
            top: isLandscape ? 'auto' : 0,
            bottom: isLandscape ? 0 : 'auto',
            left: isLandscape ? 0 : '50%',
            transform: isLandscape 
              ? 'none' 
              : 'translateX(-50%)',
            width: isLandscape ? specs.notchHeight : specs.notchWidth,
            height: isLandscape ? specs.notchWidth : specs.notchHeight,
            borderBottomLeftRadius: isLandscape ? 0 : (specs.notchWidth || 0) / 4,
            borderBottomRightRadius: isLandscape ? 0 : (specs.notchWidth || 0) / 4,
            borderTopLeftRadius: isLandscape ? (specs.notchWidth || 0) / 4 : 0,
            borderTopRightRadius: isLandscape ? 0 : 0,
          }}
        />
      );
    }

    if (specs.notchType === 'punch-hole') {
      return (
        <div 
          style={{
            ...notchStyle,
            top: isLandscape ? 'auto' : (specs.notchHeight || 0),
            right: isLandscape ? (specs.notchHeight || 0) : 'auto',
            left: isLandscape ? 'auto' : (specs.notchHeight || 0),
            width: specs.notchWidth,
            height: specs.notchHeight,
            borderRadius: '50%',
          }}
        />
      );
    }

    return null;
  };

  const renderButtons = () => {
    if (!showButtons) return null;

    return (
      <>
        {/* Power button */}
        <div
          style={{
            position: 'absolute',
            right: isLandscape ? '40%' : -5,
            top: isLandscape ? -5 : '30%',
            width: isLandscape ? 15 : 5,
            height: isLandscape ? 5 : 15,
            backgroundColor: '#0F0F0F',
            borderRadius: 2,
          }}
        />
        
        {/* Volume buttons */}
        <div
          style={{
            position: 'absolute',
            left: isLandscape ? '40%' : -5,
            top: isLandscape ? -5 : '25%',
            width: isLandscape ? 25 : 5,
            height: isLandscape ? 5 : 25,
            backgroundColor: '#0F0F0F',
            borderRadius: 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: isLandscape ? '70%' : -5,
            top: isLandscape ? -5 : '35%',
            width: isLandscape ? 25 : 5,
            height: isLandscape ? 5 : 25,
            backgroundColor: '#0F0F0F',
            borderRadius: 2,
          }}
        />
      </>
    );
  };

  return (
    <div 
      className={cn("mobile-device-emulator-frame", className)}
      style={frameStyle}
    >
      <div style={screenStyle}>
        {renderNotch()}
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          {children}
        </div>
      </div>
      {renderButtons()}
    </div>
  );
};

export default DeviceFrame;
