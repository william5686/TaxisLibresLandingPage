function what(){

    Swal.fire(
        '¿Que es?',
        'El evento "Hackathon 2023" de Taxis Libres es una emocionante competencia donde mentes creativas se unen para idear y desarrollar soluciones innovadoras en el ámbito de la movilidad y los servicios de taxi.',
        'info'
    )

}  

function when(){

    Swal.fire(
        '¿Cuando es?',
        'El evento "Hackathon 2023" de Taxis Libres se llevará a cabo en una fecha aún por determinar. Próximamente se anunciará la fecha exacta en la cual los participantes tendrán la oportunidad de demostrar su creatividad e innovación en el ámbito de la movilidad y los servicios de taxi. ',
        'info'
    )

} 

function where(){

    Swal.fire(
        '¿Donde es?',
        'El evento "Hackathon 2023" sera en Corferias Bogotá <br><br> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.803933672733!2d-74.09187328523795!3d4.629041196637274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd9b9e73d65%3A0x3f449bb47da9bef3!2sCorferias!5e0!3m2!1ses!2sco!4v1686101376812!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> ',
        'info'
    )

} 

function where(){

    Swal.fire(
        '¿Donde es?',
        'El evento "Hackathon 2023" sera en Corferias Bogotá <br><br> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.803933672733!2d-74.09187328523795!3d4.629041196637274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd9b9e73d65%3A0x3f449bb47da9bef3!2sCorferias!5e0!3m2!1ses!2sco!4v1686101376812!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> ',
        'info'
    )

} 

function Prime(){

    Swal.fire(
        'Premio',
        'El premio para el evento "Hackathon 2023" de Taxis Libres será una combinación de reconocimiento, oportunidades y recompensas. Además del prestigio de haber desarrollado soluciones innovadoras en el ámbito de la movilidad, los participantes tendrán la posibilidad de obtener premios en efectivo, oportunidades de colaboración con Taxis Libres y la posibilidad de implementar sus soluciones a gran escala. ',
        'info'
    )

} 


function serve(){

    Swal.fire({
      title: '<strong>Información</strong>',
      
      html:
        'selecciona una de las siguientes opciones' +
        '<p><a href="#" onclick="what()">¿Que es?</a></p>' +
        '<p><a href="#" onclick="when()">¿Cuando es?</a></p>'+
        '<p><a href="#" onclick="where()">¿Donde es?</a></p>'+
        '<p><a href="#" onclick="Prime()">Premio</a></p>',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
  }

