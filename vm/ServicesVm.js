var ServicesVm = {
    CurrentServices: ko.observableArray([]),
    Details: ko.observableArray([]),
    LoadData: function(){
        var self = this;
        var services = [{Id: 0, Name: 'Cursos', Icon:'fa fa-graduation-cap'},
                        {Id: 1, Name:'Asesorías', Icon:'fa fa-comments-o'},
                        {Id: 2, Name:'Auditorías', Icon:'fa fa-bar-chart'},
                        {Id: 3, Name:'Tramites', Icon:'fa fa-files-o'}]
        self.CurrentServices(services);
    },
    ShowDetails: function(data, event){
        var self = ServicesVm;
        var details = [['Curso1', 'Curso2', 'Curso3'],['Asesoría Contable y Financiera', 'Asesoría en Gestión Pública'],['Item1', 'Item2', 'Item3'],['Item1','Item2']];
        $('.all-details').fadeOut('slow', function() { 
            self.Details(details[data.Id]); 
            $('.all-details').fadeIn(); 
        });
    },
    init: function(){
        ServicesVm.LoadData();
        ko.applyBindings(ServicesVm, $('.serv-data')[0]);
        $('div[data-type="1"]').click();
    }
};

ServicesVm.init();


