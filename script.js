window.addEventListener('load', () => {
  const popup = document.getElementById('fake-virus-popup');
  setTimeout(() => {
    popup.removeAttribute('hidden');
  }, 5000);

  popup.querySelector('.close-btn').addEventListener('click', () => {
    popup.setAttribute('hidden', '');
  });

  popup.querySelector('.ok-btn').addEventListener('click', () => {
    popup.setAttribute('hidden', '');
  });
});
