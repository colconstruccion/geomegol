const btn  = document.getElementById('moverBtn');
const dxEl = document.getElementById('deltaX');
const dyEl = document.getElementById('deltaY');

function condition() {
  const dx = parseFloat(dxEl.value) || 0;
  return Math.abs(dx) < 1e-9; // your rule
}

function showAuxButton() {
  if (!condition()) {
    document.getElementById('resetBtn')?.remove();
    return;
  }
  if (document.getElementById('resetBtn')) return;

  const reset = document.createElement('button');
  reset.id = 'resetBtn';
  reset.type = 'button';
  reset.textContent = 'Reset';
  reset.className = 'aux-btn';
  btn.insertAdjacentElement('afterend', reset);

  reset.addEventListener('click', () => {
    // your reset logic...
    reset.remove();
  });
}

// Triggers:
dxEl.addEventListener('input', showAuxButton); // typing in ΔX
dyEl.addEventListener('input', showAuxButton); // typing in ΔY
btn.addEventListener('click', showAuxButton);  // optional: re-evaluate on move
showAuxButton();                               // evaluate once on load
