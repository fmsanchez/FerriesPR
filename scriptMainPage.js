$(document).ready(function () {
    var rutaIda;
    var rutaRegreso;
    var pasajeros;
    var fechaIda;
    var fechaRegreso;
    var horaIda;
    var horaRegreso;
    var idaVuelta;
    var costo;
    var servicio;
    var total;
    
    $('#PaginaPago').hide();
    $('#ConfirmPage').hide()

    $('.HeaderText').click(function() {
        location.reload();
    });

    $('#botonIda').click(function () {
        if ($(this).attr('class')==='rutaNotSelected') {
            $(this).removeClass('rutaNotSelected').addClass('rutaSelected');
            $('#botonVuelta').removeClass('rutaSelected').addClass('rutaNotSelected');
            $('#fechaRegresoBox').fadeOut('slow');
            $('#horaRegresoDropdown').fadeOut('slow');
        }
    });
    $('#botonVuelta').click(function () {
        if ($(this).attr('class')==='rutaNotSelected') {
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
        var date = new Date($(this).val());
        if ($('#rutaDropdown').val()==='FajardoCulebra') {
            //if (date.getDay()>0 && date.getDay()<6) {
                $('#horaIda').empty();
                $('#horaIda').append($('<option>9:30am</option>'));
                $('#horaIda').append($('<option>3:00pm</option>'));
                $('#horaIda').append($('<option>7:00pm</option>'));
            //}

        }
        else if ($('#rutaDropdown').val()==='FajardoVieques') {
            if (date.getDay()>0 && date.getDay()<6) {
                $('#horaIda').empty();
                $('#horaIda').append($('<option>9:00am</option>'));
                $('#horaIda').append($('<option>1:00pm</option>'));
                $('#horaIda').append($('<option>6:00pm</option>'));
            }
            else {
                $('#horaIda').empty();
                $('#horaIda').append($('<option>9:00am</option>'));
                $('#horaIda').append($('<option>3:00pm</option>'));
                $('#horaIda').append($('<option>6:00pm</option>'));
            }
        }
        else if ($('#rutaDropdown').val()==='CulebraFajardo') {
            //if (date.getDay()>0 && date.getDay()<6) {
                $('#horaIda').empty();
                $('#horaIda').append($('<option>6:30am</option>'));
                $('#horaIda').append($('<option>1:00pm</option>'));
                $('#horaIda').append($('<option>5:00pm</option>'));
            //}
        }
        else if ($('#rutaDropdown').val()==='ViequesFajardo') {
            if (date.getDay()>0 && date.getDay()<6) {
                $('#horaIda').empty();
                $('#horaIda').append($('<option>6:00am</option>'));
                $('#horaIda').append($('<option>11:00am</option>'));
                $('#horaIda').append($('<option>4:30pm</option>'));
            }
            else {
                $('#horaIda').empty();
                $('#horaIda').append($('<option>9:00am</option>'));
                $('#horaIda').append($('<option>11:00am</option>'));
                $('#horaIda').append($('<option>1:00pm</option>'));
                $('#horaIda').append($('<option>4:30pm</option>'));
            }
        }
    });

    $('#fechaCalendarRegreso').change(function() {
        var date = new Date($(this).val());
        if ($('#rutaDropdown').val()==='FajardoCulebra') {
            //if (date.getDay()>0 && date.getDay()<6) {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>6:30am</option>'));
                $('#horaRegreso').append($('<option>1:00pm</option>'));
                $('#horaRegreso').append($('<option>5:00pm</option>'));
            //}
        }
        else if ($('#rutaDropdown').val()==='FajardoVieques') {
            if (date.getDay()>0 && date.getDay()<6) {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>6:00am</option>'));
                $('#horaRegreso').append($('<option>11:00am</option>'));
                $('#horaRegreso').append($('<option>4:30pm</option>'));
            }
            else {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>9:00am</option>'));
                $('#horaRegreso').append($('<option>11:00am</option>'));
                $('#horaRegreso').append($('<option>1:00pm</option>'));
                $('#horaRegreso').append($('<option>4:30pm</option>'));
            }
        }
        else if ($('#rutaDropdown').val()==='CulebraFajardo') {
            //if (date.getDay()>0 && date.getDay()<6) {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>9:30am</option>'));
                $('#horaRegreso').append($('<option>3:00pm</option>'));
                $('#horaRegreso').append($('<option>7:00pm</option>'));
            //}
        }
        else if ($('#rutaDropdown').val()==='ViequesFajardo') {
            if (date.getDay()>0 && date.getDay()<6) {
                $('#horaRegreso').empty();
                $('#horaRegreso').append($('<option>9:00am</option>'));
                $('#horaRegreso').append($('<option>1:00pm</option>'));
                $('#horaRegreso').append($('<option>6:00pm</option>'));
            }
            else {
                $('#horaIda').empty();
                $('#horaRegreso').append($('<option>9:00am</option>'));
                $('#horaRegreso').append($('<option>3:00pm</option>'));
                $('#horaRegreso').append($('<option>6:00pm</option>'));
            }
        }
    });
    

    $('#continueButton').click(function() {
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
        fechaIda = $('#fechaCalendarIda').val();
        fechaRegreso = $('#fechaCalendarRegreso').val();
        horaIda = $('#horaIda').val();
        horaRegreso = $('#horaRegreso').val();
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

    });

    $('#confirmButton').click(function() {
        $('#PaginaPago').hide();
        $('#ConfirmPage').show();
    });

});