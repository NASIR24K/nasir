// JavaScript for pagination
const itemsPerPage = 6; // Number of items to display per page
const $blogCards = $('.card');
const $pagination = $('.pagination');
const totalPages = Math.ceil($blogCards.length / itemsPerPage);

// Initialize pagination
function initPagination() {
  $pagination.empty();
  for (let i = 1; i <= totalPages; i++) {
    const $pageItem = $('<li class="page-item"></li>');
    const $pageLink = $(`<a class="page-link" href="#">${i}</a>`);

    $pageItem.append($pageLink);
    $pagination.append($pageItem);
  }
}

// Display the specified page
function displayPage(page) {
  $blogCards.hide();
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  $blogCards.slice(startIndex, endIndex).show();
}

// Handle page click event
$pagination.on('click', '.page-link', function (e) {
  e.preventDefault();
  const page = parseInt($(this).text(), 10);
  displayPage(page);
});

// Initialize pagination and display the first page
initPagination();
displayPage(1);
