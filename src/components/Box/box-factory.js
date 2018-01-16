export const INITIAL_LEFT = window.innerWidth;

export default function create(size, droidHeight, isTop = false) {
  const top = isTop
    ? `calc(72% - ${size + droidHeight + 2}px)`
    : `calc(72% - ${size}px)`;
  return {
    id: Math.random(),
    top,
    size,
    left: INITIAL_LEFT,
    isTop,
  };
}
