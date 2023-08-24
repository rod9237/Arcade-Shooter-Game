const shooter = document.querySelector('.shooter');
const target = document.querySelector('.target');

let isShooting = false;

shooter.addEventListener('click', () => {
  if (!isShooting) {
    isShooting = true;
    target.style.top = '-10px';
    
    setTimeout(() => {
      isShooting = false;
      target.style.top = '20px';
    }, 1000);
  }
});
