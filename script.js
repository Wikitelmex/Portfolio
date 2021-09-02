function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

const modal = document.getElementById('myModal');
const container = document.getElementById('myContainer');
const body = document.getElementsByTagName('body');
const cardContainer = document.querySelector('.card-container');

const mockData = [
  {
    headerCard: 'Profesional Art Printing Data More',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './assets/Snapshoot-Portfolio.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/wikitelmex',
  },
  {
    headerCard: 'Data Dashboard Healthcare',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './assets/Snapshoot-Portfolio.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/wikitelmex',
  },
  {
    headerCard: 'Website Protfolio',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './assets/Snapshoot-Portfolio.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/wikitelmex',
  },
  {
    headerCard: 'Profesional Art Printing Data More',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './assets/Snapshoot-Portfolio.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/wikitelmex',
  },
  {
    headerCard: 'Data Dashboard Healthcare',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './assets/Snapshoot-Portfolio.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/wikitelmex',
  },
  {
    headerCard: 'Website Protfolio',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './assets/Snapshoot-Portfolio.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/wikitelmex',
  },
];

function loadCards(cardsData = mockData) {
  cardsData.forEach((element) => {
    const card = document.createElement('div');
    card.className = 'card';
    const header = document.createElement('h2');
    header.className = 'card-title';
    header.innerText = element.headerCard;
    const body = document.createElement('div');
    body.className = 'card-body';
    const bodyText = document.createElement('p');
    bodyText.innerText = element.textCard;
    const badgeList = document.createElement('ul');
    badgeList.className = 'tags';
    element.badgesCard.forEach((e) => {
      const badgeCurrent = document.createElement('li');
      badgeCurrent.className = 'card-tag';
      badgeCurrent.innerText = e;
      badgeList.appendChild(badgeCurrent);
    });
    const footer = document.createElement('div');
    footer.className = 'card-footer';
    const footerLink = document.createElement('a');
    footerLink.innerText = 'See Project';
    const variable = `openModal('${element.headerCard}',['${element.badgesCard.join("','")}'],'${element.imageURL}','${element.textCard}','${element.liveURL}','${element.projectURL}')`;
    footerLink.setAttribute('onClick', variable);

    body.appendChild(bodyText);
    body.appendChild(badgeList);

    footer.appendChild(footerLink);

    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);

    cardContainer.appendChild(card);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function openModal(
  header = 'header text',
  badges = ['badge1', 'badge2'],
  modalImage = './assets/Snapshoot-Portfolio.png',
  modalText = 'some text',
  liveUrl = 'https://www.github.com',
  source = 'https://www.github.com',
) {
  // details
  modal.querySelector('#modalHeader').textContent = header;
  const modalBadges = modal.querySelector('#modalBadges');
  removeAllChildNodes(modalBadges);
  badges.forEach((element) => {
    const liNode = document.createElement('li');
    liNode.textContent = element;
    liNode.className = 'card-tag-crystal';
    modalBadges.appendChild(liNode);
  });
  modal.querySelector('#modalImage').src = modalImage;
  modal.querySelector('#modalText').textContent = modalText;
  modal.querySelector('#modalGoLive').setAttribute('onClick', `window.open('${liveUrl}')`);
  modal.querySelector('#modalGoSource').setAttribute('onClick', `window.open('${source}')`);

  // functionality
  modal.className = 'Modal is-visuallyHidden';
  container.className = 'MainContainer is-blurred';
  modal.className = 'Modal';
  container.parentElement.className = 'ModalOpen';
}

window.onclick = function wclick(event) {
  if (event.target === modal) {
    modal.className = 'Modal is-hidden';
    body.className = '';
    container.className = 'MainContainer';
    container.parentElement.className = '';
  }
};

window.onload = function () {
  loadCards();
};

function closeModal() {
  modal.className = 'Modal is-hidden is-visuallyHidden';
  body.className = '';
  container.className = 'MainContainer';
  container.parentElement.className = '';
}

// validating form

module.exports = openNav();
module.exports = closeNav();
module.exports = openModal();
module.exports = closeModal();
module.exports = loadCards();