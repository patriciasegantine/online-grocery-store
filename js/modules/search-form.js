export default function handleSearchForm() {
  const searchForm = document.querySelector('.search-form');
  const btnSearchForm = document.querySelector('.btn-search');
  const btnSearchBox = document.querySelector('.btn-search-box');

  function searchToggle() {
    searchForm.classList.toggle('active');
  }

  function removeToggle() {
    searchForm.classList.remove('active');
  }

  btnSearchForm.addEventListener('click', searchToggle);
  btnSearchBox.addEventListener('click', removeToggle);
}
