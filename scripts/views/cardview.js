'use strict';
var app = app || {};

(function (module) {
    const cardView = {};

    cardView.initIndexPage = () => {
        $('main section').hide();
        $('#cards').show();
        console.log( app.Card.all)
        app.Card.all.map(card => $('#cards').append(card.toHtml()));
    }

    module.cardView = cardView;
})(app);
