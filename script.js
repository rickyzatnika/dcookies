$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  console.log(wScroll);

  $('#pg').css({
    transform: 'translate(0px, ' + wScroll / 20 + '%)',
  });
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('#ig').css({
    transform: 'translate(0px, ' + wScroll / 30 + '%)',
  });
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('#po').css({
    transform: 'translate(0px, ' + wScroll / 40 + '%)',
  });
});
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
