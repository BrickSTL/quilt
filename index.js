 $(window).scroll(function() {
   var top = $(window).scrollTop();
   if(top==0){
  $('#logo-text').css({
    'color':'#495057',
    'background':'none',
    'border':'none',
                      });
  $('#darkblue').css('visibility','hidden');
  $('#blue').css('visibility','hidden');
  $('#lightblue').css('visibility','hidden');
  $('#purple').css('visibility','hidden');
  $('#lightred').css('visibility','hidden');
  $('#red').css('visibility','hidden');
  $('#darkred').css('visibility','hidden');
   }
   if (top > 1) {
  $('#darkblue').css('visibility','visible');
  $('#blue').css('visibility','hidden');
  $('#lightblue').css('visibility','hidden');
  $('#purple').css('visibility','hidden');
  $('#lightred').css('visibility','hidden');
  $('#red').css('visibility','hidden');
  $('#darkred').css('visibility','hidden');
   }
   if(top>41){
  $('#blue').css('visibility','visible');
   }
   if(top>81){
  $('#lightblue').css('visibility','visible');
  $('#logo-text').css({
    'color':'#495057',
    'background':'white',
    'border':'1px solid #495057',
    });
   }
   if(top>121){
  $('#purple').css('visibility','visible');
   }
   if(top>161){
  $('#lightred').css('visibility','visible');
   }
   if(top>201){
  $('#lightred').css('visibility','visible');
   }
   if(top>241){
  $('#red').css('visibility','visible');
   }
   if(top>281){
  $('#darkred').css('visibility','visible');
   }
 });
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
