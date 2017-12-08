'use strict';
var app = app || {};

(function (module) {
    const cardView = {};

    cardView.initIndexPage = () => {
        $('main section').hide();
        $('#cards').empty().show();
        app.Card.all.map(card => $('#cards').append(card.toHtml()));   
    }

    cardView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#cards').empty().show();
        console.log(ctx.card);
        $('#cards').append(ctx.card.toHtml());
    }

    module.cardView = cardView;
})(app);
