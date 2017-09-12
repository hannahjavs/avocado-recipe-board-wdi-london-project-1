console.log('Hello world');


const $recipeType = $('#recipeType-form');
const $form = $('form');


// make form work
if($recipeType.length > 0) $recipeType.find('select').on('change', () => $recipeType.trigger('submit'));

if($form.length>0) $form.validate();

// function copyContent () {
//   document.getElementById("hiddenTextArea").value =
//   document.getElementById("myContentEditable").innerText;
//   return true;
// }
