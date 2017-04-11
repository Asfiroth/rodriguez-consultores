var Contact = {
    Name: ko.observable(),
    Mail: ko.observable(),
    Message: ko.observable(),
    Send: function (data, event) {
        $.ajax({
            url: '/SendMail',
            method: 'POST',
            data: {senderName: Contact.Name(), senderMail: Contact.Mail(), message: Contact.Message()},
            success: function(){
                alert("Mensaje enviado satisfactoriamente");
            },
            error: function(){
                alert("Error");
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