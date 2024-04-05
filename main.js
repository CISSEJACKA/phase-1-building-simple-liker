
document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.like-glyph');
    heart.addEventListener('click', handleClick);
  });
  function handleClick() {
    mimicServerCall()
      .then(() => {
        updateHeart();
      })
      .catch(() => {
        displayError();
      });
  }
  function updateHeart() {
    const heart = document.querySelector('.like-glyph');
    heart.classList.add('activated-heart');
  }
  function displayError() {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 3000);
  }