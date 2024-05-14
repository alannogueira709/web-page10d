import React, { useState, useEffect } from 'react';

function Giroscopio() {
  const [gyroData, setGyroData] = useState({
    x: null,
    y: null,
    z: null,
    alpha: null,
    beta: null,
    gamma: null
  });

  useEffect(() => {
    const handleOrientation = (event) => {
      setGyroData({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
        x: event.beta,
        y: event.gamma,
        z: event.alpha
      });
    };

    const requestPermission = () => {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', handleOrientation);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    };

    requestPermission();

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div>
      <button onClick={requestPermission}>Permitir Orientação</button>
      <div>
        X: {gyroData.x?.toFixed(3)}
        Y: {gyroData.y?.toFixed(3)}
        Z: {gyroData.z?.toFixed(3)}
      </div>
    </div>
  );
}

export default Giroscopio;
