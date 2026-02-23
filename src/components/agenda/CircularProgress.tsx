'use client';

import { useEffect, useState } from 'react';

interface CircularProgressProps {
  value: number;
  max: number;
  label: string;
  size?: number;
  strokeWidth?: number;
}

export default function CircularProgress({
  value,
  max,
  label,
  size = 140,            // Tamanho dos circulos
  strokeWidth = 11,       // Grossura dos circulos
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const percentage = (value / max) * 100;
    setProgress(percentage);
  }, [value, max]);

  const formattedValue = value < 10 ? `0${value}` : `${value}`;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90 absolute top-0 left-0">
          {/* Círculo de fundo (cinza claro) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#d1d5db" // cinza claro
            strokeWidth={strokeWidth}
          />
          {/* Círculo de progresso (rosa) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#FAC2C2"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        {/* Número dentro do círculo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            {formattedValue}
          </span>
          <span className="text-xs uppercase text-black dark:text-white mt-1">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}