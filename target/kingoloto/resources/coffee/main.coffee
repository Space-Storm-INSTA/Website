$ ->
  $('#owl').owlCarousel
    navigation: false
    slideSpeed: 400
    paginationSpeed: 500
    singleItem: true
    pagination: true
  return

  $('#test').click ->
    if $('.highscorenyanresult').css 'display' == 'block'
      $('.highscorenyanresult').css 'display', 'none'
    else
      $('.highscorenyanresult').css 'display', 'block'
    return
