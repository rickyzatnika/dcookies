let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function () {
  sidebar.classList.toggle('active');
};

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('#para').css({
    transform: 'translate(0px, ' + wScroll / 26 + '%)',
  });
});

// Google Map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('#map'), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
// scrollTop
mybutton = document.getElementById('myBtn');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('portfolio-item')) {
    const src = e.target.getAttribute('src');
    document.querySelector('.modal-img').src = src;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
    myModal.show();
  }
});
AOS.init();
