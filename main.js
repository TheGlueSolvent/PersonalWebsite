const invis = document.getElementById('invis');
let opacity = 0;
document.getElementById('projects').addEventListener('click', () => {transparency(invis)});
function transparency(target) {
  target.style.opacity = opacity;
  const intervalId = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.01;
      target.style.opacity = opacity;
    } else {
      clearInterval(intervalId);
    }
  }, 20); 
}