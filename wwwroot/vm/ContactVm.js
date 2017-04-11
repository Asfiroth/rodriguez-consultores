var Contact = {
    Name: ko.observable(),
    Mail: ko.observable(),
    Message: ko.observable(),
    Send: function (data, event) {
        var element = $(event.currentTarget);
        if(element.hasClass("loading")) return false;
        element.addClass("loading");
        $.ajax({
            url: '/SendMail',
            method: 'POST',
            data: {senderName: Contact.Name(), senderMail: Contact.Mail(), message: Contact.Message()},
            success: function(){
                element.removeClass("loading");
                alert("Mensaje enviado satisfactoriamente");
            },
            error: function(){
                alert("Esta operación no puede ser procesada en este momento. Por favor intente más tarde. Si el problema persiste contacte con el Administrador del Sistema.");
            }
        })
    },
    InitializeMap: function () {
        var map = new GMaps({
            div: '#map',
            lat: -12.106398,
            lng: -77.001197
        });
        map.addMarker({
            lat: -12.106398,
            lng: -77.001197,
            title: 'Rodriguez Consultores & Asosciados'
        });
    },
    init: function () {
        ko.applyBindings(Contact, $('.contact-area')[0]);
        Contact.InitializeMap();
    }
}

Contact.init();