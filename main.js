$(document).ready(function() {
  console.log('.');
  $('a').click(function() {
    let clickUrl = $(this).attr('href');
    gtag('event', 'click', {
      'event_category' : 'a_tag',
      'event_label' : clickUrl,
    });
    console.log(clickUrl);
  });
});