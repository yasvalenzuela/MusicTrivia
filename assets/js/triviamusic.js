$(document).ready(function(){
  let url = 'https://opentdb.com/api.php?amount=10&category=12';
  let urlTrueFalse = 'https://opentdb.com/api.php?amount=10&category=12&type=boolean';
  let urlMultipleChoice = 'https://opentdb.com/api.php?amount=10&category=12&type=multiple';
  let btnStart = $('#btnStart');

  btnStart.click(function(){
    btnStart.hide();

    let alternatives = `
    <div class="row text-center">
      <div class="col-sm-6 col-md-6 col-lg-6">
        <button type="button" class="btn btn-primary btn-sm btn-lg" id="btnTrueFalse">True or False</button>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6">
        <button type="button" class="btn btn-primary btn-sm btn-lg" id="btnMultipleChoice">Multiple Choice</button>
      </div>
    </div>
    `;
    $('#containerAlternativas').append(alternatives);

    /*evento de click al boton de true/false*/
    let btnTrueFalse = $('#btnTrueFalse');
    btnTrueFalse.click(function(){
      btnTrueFalse.hide();
      btnMultipleChoice.hide();
      $('#icono').hide();
      $('h2').hide();
      let urlTrueFalse = 'https://opentdb.com/api.php?amount=10&category=12&type=boolean';
      true_false(urlTrueFalse);
    });

    /*evento de click al boton de multiple chocice*/
    let btnMultipleChoice = $('#btnMultipleChoice');
    btnMultipleChoice.click(function(){
      btnTrueFalse.hide();
      btnMultipleChoice.hide();
      $('#icono').hide();
      $('h2').hide();
      let urlMultipleChoice = 'https://opentdb.com/api.php?amount=10&category=12&type=multiple';
      multiple_choice(urlMultipleChoice);
    });

    function true_false(urlTrueFalse) {
      fetch(urlTrueFalse)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data.results);
        let i = 0;
        let questionTrueFalse = `
        <div class="container" id="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <p>Category: ${data.results[i].category}</p>
              <p>Difficulty: ${data.results[i].difficulty}</p>
              <p class="question"><strong>${data.results[i].question}</strong></p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6">
              <button type="button" class="btn btn-primary btn-sm btn-lg btnTrue">${data.results[i].correct_answer}</button>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <button type="button" class="btn btn-primary btn-sm btn-lg btnFalse">${data.results[i].incorrect_answers}</button>
            </div>
          </div>
        </div>
        `;
        $('#containerQuestions').append(questionTrueFalse);
      })
    };

    function multiple_choice(urlMultipleChoice) {
      fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data.results);
        let i = 0;
        let questionTrueFalse = `
        <div class="container id="containerPregunta">
          <div class="row" id="rowMultiple">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <p>Category: ${data.results[i].category}</p>
              <p>Difficulty: ${data.results[i].difficulty}</p>
              <p class="question"><strong>${data.results[i].question}</strong></p>
            </div>
          </div>
          <div class="row" id="btnRespuestas">
            <div class="col-sm-10 col-md-10 col-lg-10">
              <button type="button" class="btn btn2 btn-primary btn-sm btn-lg" id="btnCorrect">${data.results[i].correct_answer}</button>
              <button type="button" class="btn btn2 btnIncorrect btn-primary btn-sm btn-lg">${data.results[i].incorrect_answers[i]}</button>
              <button type="button" class="btn btn2 btnIncorrect btn-primary btn-sm btn-lg">${data.results[i].incorrect_answers[i +1]}</button>
              <button type="button" class="btn btn2 btnIncorrect btn-primary btn-sm btn-lg">${data.results[i].incorrect_answers[i +2]}</button>
            </div>
          </div>
        </div>
        `;
        $('#containerQuestions').append(questionTrueFalse);
      })
    };




  });
/*aqui termina el evento de click de start y todas las funciones dentro de ella*/







})









/*
function getTrivia(){
  
/*
var miImagen = document.querySelector('img');

fetch('flores.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  miImagen.src = objectURL;
});
*/
