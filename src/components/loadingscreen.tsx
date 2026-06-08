import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-bg-primary flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo / Name */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-black tracking-tight">
          <span className="text-text-primary">Avith</span>{' '}
          <span className="text-gradient">Poojary</span>
        </h1>
        <p className="text-text-secondary text-sm mt-2 tracking-widest uppercase">
          Portfolio
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-border-default rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-primary transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-text-muted text-xs mt-3 font-mono">{progress}%</p>
    </div>
  );
}