$(document).ready(function () {
    var rutaIda;
    var rutaRegreso;
    var pasajeros;
    var fechaIda;
    var fechaRegreso;
    var horaIda;
    var horaRegreso;
    var idaVuelta = true;
    var costo;
    var servicio;
    var total;
    var fechaIdaTotal;
    var fechaRegresoTotal;
    var dateError;
    var emptyFieldError;
    console.log(new Date('3/24/2014 6:30 am'));
    $('#PaginaPago').hide();
    $('#ConfirmPage').hide();
    $('#ErrorMessage').hide();

    $('.HeaderText').click(function() {
        location.reload();
    });

    $('#botonIda').click(function () {
        if ($(this).attr('class')==='rutaNotSelected') {
            idaVuelta = false;
            $(this).removeClass('rutaNotSelected').addClass('rutaSelected');
            $('#botonVuelta').removeClass('rutaSelected').addClass('rutaNotSelected');
            $('#fechaRegresoBox').fadeOut('slow');
            $('#horaRegresoDropdown').fadeOut('slow');
            $('#fechaCalendarRegreso').val('');
            fechaRegreso = undefined;
            $('#horaRegreso').empty();
        }
    });
    $('#botonVuelta').click(function () {
        if ($(this).attr('class')==='rutaNotSelected') {
            idaVuelta = true;
            $(this).removeClass('rutaNotSelected').addClass('rutaSelected');
            $('#botonIda').removeClass('rutaSelected').addClass('rutaNotSelected');
            $('#fechaRegresoBox').fadeIn('slow');
            $('#horaRegresoDropdown').fadeIn('slow');
        }
    });
    $('#rutaDropdown').change(function() {
        $('#fechaCalendarIda').val('');
        $('#fechaCalendarRegreso').val('');
        $('#horaIda').empty();
        $('#horaRegreso').empty();
    });

    $('#fechaCalendarIda').change(function() {
        fechaIda = new Date($(this).val());
        if (fechaRegreso !== undefined && fechaIda > fechaRegreso) {
            fechaRegreso = undefined;
            $('#fechaCalendarRegreso').val('');
            $('#horaRegreso').empty();
        }
            if ($('#rutaDropdown').val()==='FajardoCulebra') {
                $('#horaIda').empty();
                $('#horaIda').append($('<option>9:30 am</option>'));
                $('#horaIda').append($('<option>3:00 pm</option>'));
                $('#horaIda').append($('<option>7:00 pm</option>'));
            }
            else if ($('#rutaDropdown').val()==='FajardoVieques') {
                if (date.getDay()>0 && date.getDay()<6) {
                    $('#horaIda').empty();
                    $('#horaIda').append($('<option>9:00 am</option>'));
                    $('#horaIda').append($('<option>1:00 pm</option>'));
                    $('#horaIda').append($('<option>6:00 pm</option>'));
                }
                else {
                    $('#horaIda').empty();
                    $('#horaIda').append($('<option>9:00 am</option>'));
                    $('#horaIda').append($('<option>3:00 pm</option>'));
                    $('#horaIda').append($('<option>6:00 pm</option>'));
                }
            }
            else if ($('#rutaDropdown').val()==='CulebraFajardo') {
                $('#horaIda').empty();
                $('#horaIda').append($('<option>6:30 am</option>'));
                $('#horaIda').append($('<option>1:00 pm</option>'));
                $('#horaIda').append($('<option>5:00 pm</option>'));
            }
            else if ($('#rutaDropdown').val()==='ViequesFajardo') {
                if (date.getDay()>0 && date.getDay()<6) {
                    $('#horaIda').empty();
                    $('#horaIda').append($('<option>6:00 am</option>'));
                    $('#horaIda').append($('<option>11:00 am</option>'));
                    $('#horaIda').append($('<option>4:30 pm</option>'));
                }
                else {
                    $('#horaIda').empty();
                    $('#horaIda').append($('<option>9:00 am</option>'));
                    $('#horaIda').append($('<option>11:00 am</option>'));
                    $('#horaIda').append($('<option>1:00 pm</option>'));
                    $('#horaIda').append($('<option>4:30 pm</option>'));
                }
            }
    });

    $('#fechaCalendarRegreso').change(function() {
        fechaRegreso = new Date($(this).val());
        if (fechaIda !== undefined  && fechaIda > fechaRegreso) {
            fechaIda = undefined;
            $('#fechaCalendarIda').val('');
            $('#horaIda').empty();
        }
        if ($('#rutaDropdown').val()==='FajardoCulebra') {
            //if (date.getDay()>0 && date.getDay()<6) {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>6:30 am</option>'));
                $('#horaRegreso').append($('<option>1:00 pm</option>'));
                $('#horaRegreso').append($('<option>5:00 pm</option>'));
            //}
        }
        else if ($('#rutaDropdown').val()==='FajardoVieques') {
            if (date.getDay()>0 && date.getDay()<6) {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>6:00 am</option>'));
                $('#horaRegreso').append($('<option>11:00 am</option>'));
                $('#horaRegreso').append($('<option>4:30 pm</option>'));
            }
            else {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>9:00 am</option>'));
                $('#horaRegreso').append($('<option>11:00 am</option>'));
                $('#horaRegreso').append($('<option>1:00 pm</option>'));
                $('#horaRegreso').append($('<option>4:30 pm</option>'));
            }
        }
        else if ($('#rutaDropdown').val()==='CulebraFajardo') {
            //if (date.getDay()>0 && date.getDay()<6) {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>9:30 am</option>'));
                $('#horaRegreso').append($('<option>3:00 pm</option>'));
                $('#horaRegreso').append($('<option>7:00 pm</option>'));
            //}
        }
        else if ($('#rutaDropdown').val()==='ViequesFajardo') {
            if (date.getDay()>0 && date.getDay()<6) {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>9:00 am</option>'));
                $('#horaRegreso').append($('<option>1:00 pm</option>'));
                $('#horaRegreso').append($('<option>6:00 pm</option>'));
            }
            else {
                $('#horaIda').empty();
                $('#horaRegreso').append($('<option>9:00 am</option>'));
                $('#horaRegreso').append($('<option>3:00 pm</option>'));
                $('#horaRegreso').append($('<option>6:00 pm</option>'));
            }
        }
    });


    $('#continueButton').click(function() {
        $('#ErrorMessage').hide()
        $('#ErrorMessage').empty();
        fechaIda = $('#fechaCalendarIda').val();
        fechaRegreso = $('#fechaCalendarRegreso').val();
        horaIda = $('#horaIda').val();
        horaRegreso = $('#horaRegreso').val();
        fechaIdaTotal = new Date(fechaIda + ' ' + horaIda);
        fechaRegresoTotal = new Date(fechaRegreso + ' ' + horaRegreso);

        if (fechaIda == '' || (fechaRegreso == '' && idaVuelta)) {
            $('#ErrorMessage').show();
            $('#ErrorMessage').append('Error: Informaci&oacute;n sin llenar.');
        } else if (fechaIdaTotal > fechaRegresoTotal) {
            $('#ErrorMessage').show();
            $('#ErrorMessage').append('Error: Hora de ida no puede ocurrir despu&eacute;s de fecha de regreso.');
        } else {
            if ($('#rutaDropdown').val()==='FajardoCulebra') {
                rutaIda = 'Fajardo a Culebra';
                rutaRegreso = 'Culebra a Fajardo';
            }
            else if ($('#rutaDropdown').val()==='FajardoVieques') {
                rutaIda = 'Fajardo a Vieques';
                rutaRegreso = 'Vieques a Fajardo';
            }
            else if ($('#rutaDropdown').val()==='CulebraFajardo') {
                rutaIda = 'Culebra a Fajardo';
                rutaRegreso = 'Fajardo a Culebra';
            }
            else if ($('#rutaDropdown').val()==='ViequesFajardo') {
                rutaIda = 'Vieques a Fajardo';
                rutaRegreso = 'Fajardo a Vieques';
            }

            if ($('#rutaDropdown').val()==='FajardoCulebra'||$('#rutaDropdown').val()==='CulebraFajardo') {
                costo = 2.25;
            }
            else {
                costo = 2.00;
            }

            pasajeros = $('#pasajeroNum').val();
            servicio = 5.00;
            idaVuelta = ($('#botonIda').attr('class')==='rutaSelected')? false:true;
            total = (idaVuelta)? 2.0*parseInt(pasajeros)*costo+servicio : parseInt(pasajeros)*costo+servicio;
            $('#MainPage').hide();
            $('#PaginaPago').show();
            $('#costosTable').append($('<tr><td>'+rutaIda+', ' +fechaIda+' '+horaIda+'</td><td>'+pasajeros+' x $'+costo+'</td></tr>'));
            if (idaVuelta) {
                $('#costosTable').append($('<tr><td>'+rutaRegreso+', '+fechaRegreso+' '+horaRegreso+'</td><td>'+pasajeros+' x $'+costo+'</td></tr>'));
            }
            $('#costosTable').append($('<tr><td>Servicio</td><td>$'+(servicio).toFixed(2)+'</td></tr>'));
            $('#costosTable').append($('<tr><td><b>Total</b></td><td><b>$'+(total).toFixed(2)+'</b></td></tr>'));
        }
    });

    var stripeResponseHandler = function(status, response) {
        var form = $('#payment-form');

          if (response.error) {
            // Show the errors on the form
            form.find('.payment-errors').text(response.error.message);
            form.find('button').prop('disabled', false);
          } else {
            // token contains id, last4, and card type
            var token = response.id;
            // Insert the token into the form so it gets submitted to the server
            form.append($('<input type="hidden" name="stripeToken" />').val(token));
            // and submit
            form.get(0).submit();
        }
    };

    $('#payment-form').submit(function() {
        var form = $('#payment-form');

        // Disable the submit button to prevent repeated clicks
        form.find('button').prop('disabled', true);

        Stripe.card.createToken(form, stripeResponseHandler);

        // Prevent the form from submitting with the default action
        return false;
       /* $('#PaginaPago').hide();
        $('#ConfirmPage').show(); */
    });


});