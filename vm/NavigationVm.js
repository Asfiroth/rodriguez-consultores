var Navigation = {
    navigate: function (data, event) {
        var self = this;
        var item = $(event.currentTarget);
        $('.item').removeClass('active');
        item.addClass('active');

        var url = item.attr('data-url');
        $('.content').load('./views/' + url + '.html');
    },
    init: function () {
        ko.applyBindings(Navigation, $('.navigation')[0]);
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });
        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');

    }
}

Navigation.init();