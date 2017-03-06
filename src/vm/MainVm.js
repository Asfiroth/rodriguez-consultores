var MainViewModel = {
    navigate: function(data, event){
        var self = this;
        var item = $(event.currentTarget);
        $('.item').removeClass('active');
        item.addClass('active');

        var url = item.attr('data-url');
        $('.content').load('./views/' + url + '.html');
    },    
    init: function(){
        ko.applyBindings(MainViewModel, $('#main')[0]);
    }
}

MainViewModel.init();