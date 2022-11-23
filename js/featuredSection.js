const speakers = [
  {
    id: 1,
    name: 'RAMIN MASOUDI',
    img: '../assets/Images/ramin.PNG',
    speakerDesc: '2022 International Conference on Sustainable Water Management (ICSWM-2022)',
    desc: 'Affiliation: Assistant Professor Department of Mechanical Engineering, American University in Dubai',
    conference: 'Dubai',
  },
  {
    id: 2,
    name: 'JITENDRA A. HOLE',
    img: '../assets/Images/jitendra.PNG',
    speakerDesc: '2022 International Conference on Sustainable Water Management (ICSWM-2022)',
    desc: 'Affiliation: Professor, JSPM\'S Rajarshi Shahu College of Engineering, Maharashtra, India',
    conference: 'Oxford, UK',
  },

  {
    id: 3,
    name: 'SE WOONG KIM',
    img: '../assets/Images/se_woong.PNG',
    speakerDesc: '2022 International Conference on Sustainable Water Management (ICSWM-2022)',
    desc: 'Affiliation: Professor, Doctor, Kumoh National Institute of Technology, Korea',
    conference: 'Shanghai, China',
  },

  {
    id: 6,
    name: 'DR. AMMAR ALDALLAL',
    img: '../assets/Images/ammar.PNG',
    speakerDesc: '2022 International Conference on Sustainable Water Management (ICSWM-2022)',
    desc: 'Affiliation: Computer Engineering Department, Ahlia University',
    conference: 'Berlin, Germany',
  },

  {
    id: 7,
    name: 'MUHAMMAD MUSTAFIZUR RAHMAN',
    img: '../assets/Images/mustafizure.PNG',
    speakerDesc: '2022 International Conference on Sustainable Water Management (ICSWM-2022)',
    desc: 'Affiliation: Wichita State University, Wichita, Kansas, USA',
    conference: 'Tokyo, Japan',
  },

  {
    id: 8,
    name: ' PROF. LOUANN BIERLEIN PALMER',
    img: '../assets/Images/louann.PNG',
    speakerDesc: '2022 International Conference on Sustainable Water Management (ICSWM-2022)',
    desc: 'Affiliation: Western Michigan University, Michigan, United States',
    conference: 'Pune, India',
  },
];

const partnerData = [
  {
    id: 1,
    name: 'Thomson Reutors',
    img: '../assets/Images/associate-2.jpg',
  },

  {
    id: 2,
    name: 'INDERSCIENCE PUBLISHERS',
    img: '../assets/Images/assosciate-one.jpg',
  },

  {
    id: 3,
    name: 'SCOPUS',
    img: '../assets/Images/associate-3.jpg',
  },

  {
    id: 4,
    name: 'DRJI',
    img: '../assets/Images/associate-4.jpg',
  },

  {
    id: 5,
    name: 'INTERNATIONAL SCIENTIFIC INDEXING',
    img: '../assets/Images/associate-8.jpg',
  },

  {
    id: 6,
    name: 'CONFERENCE INC',
    img: '../assets/Images/conference-incs.PNG',
  },
];

const sectionCenter = document.querySelector('.section-center');
function displayMenuItems(speakerItems) {
  let displayMenu = speakerItems.map((item) => `<article class="featured-speakers-item">
          <div class="speaker">
            <img src=${item.img} alt=${item.name} class="photo" />
            </div>
            <div class="item-info">
              <header>
                <h4>${item.name}</h4>
              </header>
              <p class="speaker-info">${item.speakerDesc}</p>
              <div class="item-detail">
              <p class="item-text item-intro">
                ${item.desc}
              </p>
              <p class="item-text">
                Conference:  ${item.conference}
              </p>
              </div>
            </div>
          </article>`);
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(speakers);
});

const partnerSection = document.querySelector('.partners');

function displayPartnerItems(partnerItems) {
  let displayPartner = partnerItems.map((item) => `<li class="partner"><img src=${item.img} alt=${item.name}></li>`);
  displayPartner = displayPartner.join('');
  partnerSection.innerHTML = displayPartner;
}

window.addEventListener('DOMContentLoaded', () => {
  displayPartnerItems(partnerData);
});