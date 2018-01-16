import React from 'react';
import './style.css';

export const ORIGINAL_SIZE = 200;

export default function Box({ top = 10, left = 20, size = ORIGINAL_SIZE }) {
  const realTop = Number.isNaN(+top) ? top : `${top}px`;
  const realLeft = Number.isNaN(+left) ? left : `${left}px`;
  return (
    <div
      className="box"
      style={{
        top: realTop,
        left: realLeft,
        transform: `scale(${size / ORIGINAL_SIZE})`,
      }}
    />
  );
}
