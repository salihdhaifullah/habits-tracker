import { Directive } from "vue";


function rgbToHex(rgb: string) {
  const result = rgb.match(/\d+/g)!.map(Number);
  return `#${result.map(n => n.toString(16).padStart(2, '0')).join('')}`;
}

function getContrastColor(hex: string) {
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >>  8) & 0xff;
  const b = (rgb >>  0) & 0xff;

  const contrast = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff';
  return contrast;
}

const createRipple = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLElement;

  const computedStyle = window.getComputedStyle(button);
  const backgroundColor = computedStyle.backgroundColor;
  const hexColor = rgbToHex(backgroundColor);
  const rippleColor = getContrastColor(hexColor);

  if (computedStyle.position === 'static') button.style.position = 'relative';
  const old_overflow_value = button.style.overflow;
  button.style.overflow = "hidden";

  const circle = document.createElement("div");
  circle.classList.add("ripple");
  
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const rect = button.getBoundingClientRect();

  const paddingLeft = parseFloat(computedStyle.paddingLeft);
  const paddingTop = parseFloat(computedStyle.paddingTop);

  const relativeX = event.clientX - rect.left - paddingLeft - diameter / 2;
  const relativeY = event.clientY - rect.top - paddingTop - diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${relativeX}px`;
  circle.style.top = `${relativeY}px`;
  circle.style.backgroundColor = rippleColor;

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  button.appendChild(circle);

  circle.addEventListener("animationend", () => {
    circle.remove();
    button.style.overflow = old_overflow_value;
  });
}

const rippleDirective: Directive = {
  beforeMount(el: HTMLElement) {
    el.style.cursor = "pointer"
    el.addEventListener('click', createRipple);
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('click', createRipple);
  }
};

export default rippleDirective;
