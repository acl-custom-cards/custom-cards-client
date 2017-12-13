'use strict';
var app = app || {};

(function (module) {
    const cardView = {};

    cardView.initIndexPage = (ctx) => {
        $('main section').hide();
        $('#cards').empty().show();
        ctx.cards.map(card => $('#cards').append(card.toHtml()));   
    }

    cardView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#cards').empty().show();
        $('#cards').append(ctx.card.toHtml());
    }

    cardView.initNewPage = (ctx) => {
        $('main section').hide();
        $('#new-card').parent().show();

        $('#new-card').on('submit', function () {
            event.preventDefault();
            const newCard = {
                recipient: this.recipient.value,
                sender: this.sender.value,
                content: this.content.value
            };
            
            app.Card.create(newCard);
        });
        $('#new-card').on('submi', function (){
            event.preventDefault();
            console.log('whatever');
        });
    }

    module.cardView = cardView;
})(app);
