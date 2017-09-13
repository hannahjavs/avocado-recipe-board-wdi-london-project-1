console.log('Hello world');


const $recipeType = $('#recipeType-form');
const $form = $('form');

const $favoriteForm = $('form.favorite');

// make form work
if($recipeType.length > 0) $recipeType.find('select').on('change', () => $recipeType.trigger('submit'));

if($form.length>0) $form.validate();


// FOR USER FAVORITNG
if($favoriteForm.length > 0) {
  $favoriteForm.on('submit', (e) => {
    e.preventDefault();
    // get window position
    window.localStorage.setItem('scrollTop', $(window).scrollTop());
    e.target.submit();
  });
}
