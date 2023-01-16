const mobileFooter = document.getElementById('card__footer');
const desktopPopup = document.getElementById('desktop-popup');
const footerClicked = document.getElementById('footer-share--clicked');
const shareIcon = document.getElementById('share-icon');
const shareIconClicked = document.getElementById('share-icon--clicked');

shareIcon.addEventListener('click', (e) => {
   if (window.innerWidth < 640) {
      mobileFooter.classList.add('mobile-hide');
      footerClicked.classList.remove('mobile-hide');
   } else if (desktopPopup.classList.contains('desktop-hide')) {
      desktopPopup.classList.remove('desktop-hide');
   } else {
      desktopPopup.classList.add('desktop-hide');
   }
});

shareIconClicked.addEventListener('click', (e) => {
   footerClicked.classList.add('mobile-hide');
   mobileFooter.classList.remove('mobile-hide');
});