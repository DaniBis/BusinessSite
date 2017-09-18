carousel = (function(){
  var box = document.querySelector('.carouselbox');
  var cap = document.querySelector('.header');
  var next = cap.querySelector('.right_arrow');
  var prev = cap.querySelector('.left_arrow');
  var items = box.querySelectorAll('.content li');
  var titleitems = box.querySelectorAll('.theoffice .text');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  var currentitems = titleitems[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    currentitems.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 &&
        counter < 0) {
      counter = amount - 1;
    }

    if (direction === 1 &&
        !items[counter] && !titleitems[counter]) {
      counter = 0;
    }
    current = items[counter];
    currentitems = titleitems[counter];
    current.classList.add('current');
    currentitems.classList.add('current');
  }

  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();

function texttoggle() {
    var x = document.getElementsByClassName('details_pharagraph_extended');
    if (x[0].style.display === 'none') {
        x[0].style.display = 'inline-block';
    } else {
        x[0].style.display = 'none';
    }
}

function showButtons() {
    var x = document.getElementsByClassName('hidden_second_details');
    var y = document.getElementsByClassName('viewmore_link');
    if (x[0].style.display === 'none') {
        x[0].style.display = 'inline-block';
        y[0].style.display = 'none';
    } else {
        x[0].style.display = 'none';
    }
}

function displaylogin() {
    var x = document.getElementsByClassName('panel');
    if (x[0].style.visibility === 'hidden') {
        x[0].style.visibility = 'visible';
    } else {
        x[0].style.visibility = 'hidden';
    }
}
