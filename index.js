const images = Array.from(document.querySelectorAll('.grid img'));
const modal = document.querySelector('.modal');

const closeBtn = document.querySelector('.btn');


images.forEach(image => {
  image.addEventListener('click', () => {
    modal.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    if(modal.children[1]){
      modal.removeChild(modal.children[1]);
    }
    modal.appendChild(img);
  })
})

window.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.classList.remove('active');
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
})