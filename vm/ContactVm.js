var Contact = {
    Name: ko.observable(),
    Mail: ko.observable(),
    Message: ko.observable(),
    Send: function (data, event) {

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