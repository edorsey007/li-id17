var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  gutter: 12
});

// element argument can be a selector string
//   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });

// external js: masonry.pkgd.js

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   percentPosition: true,
//   gutter: 12
// });