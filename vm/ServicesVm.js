var ServicesVm = {
    CurrentServices: ko.observableArray([]),
    CurrentService: ko.observable(new Service({})),
    loadData: function () {
        var self = this;
        var services = [{ Id: 0, Name: 'Capacitación', Icon: 'fa fa-graduation-cap' },
        { Id: 1, Name: 'Asesorías y Consultorías', Icon: 'fa fa-comments-o' },
        { Id: 2, Name: 'Trámites', Icon: 'fa fa-files-o' }]
        self.CurrentServices(services);
    },
    showDetails: function (data, event) {
        var self = ServicesVm;
        var details = [
            {
                Paragraphs: ['En Rodríguez Consultores & Asociados brindamos el servicio de charlas, talleres y seminarios, contamos con un equipo multidisciplinario de instructores de nivel, con experiencia en el área docente y la capacitación empresarial. Son dictados en salas adecuadamente habilitadas para ello y también pueden ser dictados in-company', 'El temario de nuestras capacitaciones es diverso y en él se incluyen temas de carácter empresarial tales como:'],
                Details: ['Análisis y Evaluación de Información Financiera.', 'Evaluación y control de gestión pública.', 
                'Contrataciones y adquisiciones del estado.', 'Temas de derecho corporativo, laboral, tributario, societario, civil y comercial.',
                'Derecho administrativo y su aplicación ante organismos públicos.', 'Implementación y uso de sistemas de información, con especial énfasis en la gestión y/o ',
                'planificación de proyectos de tecnologías de la información']
            },
            {
                Paragraphs: ['Rodríguez Consultores & Asociados pone a disposición de ustedes, nuestro servicio de asesoría y consultoría en:'],
                Details: ['Asesoría contable y financiera', 'Asesoría y consultoría tributaria especializada','Soporte y asesoría en procedimientos de fiscalización de organismos públicos.', 'Asesoría y consultoría legal en materia civil, laboral y comercial.', 'Asesoría y consultoría en temas de gestión pública.']
            },
            {
                Paragraphs: ['Para constituir una empresa Rodríguez Consultores & Asociados te ofrece todo el asesoramiento que necesitas para crear una empresa.', 'Una vez constituida tu empresa te brindamos asesoría en todos aquellos aspectos societarios, de carácter laboral, tributario y de gestión que requieras para la buena marcha de tu organización', 'De esta manera brindamos:'],
                Details: ['Asesoramiento previo', 'Solicitud de nombre ante SUNARP', 'Elaboración de minuta de constitución (según tipo de sociedad', 'Asistencia a la firma en notaría', 'Inscripción en SUNARP', 'Solicitud y obtención del RUC', 'Elección del Régimen tributario', 'Inscripción en REMYPE', 'Asesoría para libros societarios y contables', 'Asesoría para Licencia Municipal']
            }
        ];
        $('.all-details').fadeOut('slow', function () {
            self.Details(new Service(details[data.Id]));
            $('.all-details').fadeIn();
        });
    },
    toContact: function (data, event) {
        $('.content').load('./views/contact.html');
    },
    init: function () {
        ServicesVm.loadData();
        ko.applyBindings(ServicesVm, $('.serv-data')[0]);
        $('div[data-type="1"]').click();
    }
};

ServicesVm.init();

function Service(data){
    var self = this;
    self.Paragraphs = ko.observableArray(data.Paragraphs || []);
    self.Details = ko.observableArray(data.Details || []);
}

