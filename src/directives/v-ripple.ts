import { Directive } from "vue";


const createRipple = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLElement;

  const computedStyle = window.getComputedStyle(button);

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
