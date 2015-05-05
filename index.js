
var tau = Math.PI * 2;

export default function sin(t, f) {
  return Math.sin(t * tau * f);
}

export function noise() {
  return Math.random() * 2 - 1;
}