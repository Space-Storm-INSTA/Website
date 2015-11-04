(function() {
  $(function() {
    $('#owl').owlCarousel({
      navigation: false,
      slideSpeed: 400,
      paginationSpeed: 500,
      singleItem: true,
      pagination: true
    });
    return;
    return $('.highscorenyan').click(function() {
      if ($('.highscorenyanresult').css('display' === 'block')) {
        $('.highscorenyanresult').css('display', 'none');
      } else {
        $('.highscorenyanresult').css('display', 'block');
      }
    });
  });

}).call(this);
