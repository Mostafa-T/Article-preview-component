// Setup

const shareBtn = document.querySelector('.share-btn');
const shareMenu = document.querySelector('.share-menu');

// Click function

shareBtn.addEventListener('click', () => {

  shareMenu.classList.toggle('active');

});