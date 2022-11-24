const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const icon = navToggle.querySelector('.fa-times');
const openIcon = navToggle.querySelector('.fa-bars');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
  icon.classList.toggle('close-icon');
  openIcon.classList.toggle('open-icon');
});

const loadMore = document.querySelector('.load-more');
let currentSpeakers = 3;

loadMore.addEventListener('click', (event) => {
  const speakersList = [...document.querySelectorAll('.featured-speakers-item')];
  event.target.classList.add('show-loader');

  for (let i = currentSpeakers; i < currentSpeakers + 3; i += 1) {
    setTimeout(() => {
      event.target.classList.remove('show-loader');
      if (speakersList[i]) {
        speakersList[i].style.display = 'flex';
      }
    }, 3000);
  }
  currentSpeakers += 3;
  if (currentSpeakers >= speakersList.length) {
    event.target.classList.add('loaded');
  }
});
