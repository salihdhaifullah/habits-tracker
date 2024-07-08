import { Directive } from "vue";


const createRipple = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLElement;

  if (window.getComputedStyle(button).position === 'static') {
    button.style.position = 'relative';
  }

  const circle = document.createElement("div");
  circle.classList.add("ripple");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const rect = button.getBoundingClientRect();

  const style = window.getComputedStyle(button);
  const paddingLeft = parseFloat(style.paddingLeft);
  const paddingTop = parseFloat(style.paddingTop);

  const relativeX = event.clientX - rect.left - paddingLeft - diameter / 2;
  const relativeY = event.clientY - rect.top - paddingTop - diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${relativeX}px`;
  circle.style.top = `${relativeY}px`;

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  button.appendChild(circle);

  circle.addEventListener("animationend", () => {
    circle.remove();
  });
}

const rippleDirective: Directive = {
  beforeMount(el: HTMLElement) {
    el.addEventListener('click', createRipple);
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('click', createRipple);
  }
};

export default rippleDirective;
