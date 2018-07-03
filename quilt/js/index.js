
// external js: isotope.pkgd.js

var filterSelector = '*';

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  sortBy: 'selector',
  getSortData: {
    selector: function( itemElem ) {
      return !$( itemElem ).is( filterSelector );
    },
  },
});

var $items = $grid.find('.element-item');

// bind button click
$('.filters-button-group').on( 'click', 'button', function() {
  filterSelector = $( this ).attr('data-filter');
  $grid.isotope('updateSortData').isotope();
  // change is-filtered-out class
  $items.filter( filterSelector ).removeClass('is-filtered-out');
  $items.not( filterSelector ).addClass('is-filtered-out');
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});