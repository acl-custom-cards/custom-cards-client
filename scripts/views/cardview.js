'use strict';
var app = app || {};

(function (module) {
    const cardView = {};

    cardView.initIndexPage = (ctx) => {
        $('main section').hide();
        $('#cards').empty().show();
        ctx.cards.map(card => $('#cards').append(card.toHtml()));   

        $('button[data-method]').hide();
    }
    
    cardView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#cards').empty().show();
        $('#cards').append(ctx.card.toHtml());
        $('button[data-method]').show();

        $('button[data-method="update"]').on('click', function () {
            page(`/custom-cards-client/cards/${ctx.card.id}/update`);
        });
    }

    cardView.initNewPage = (ctx) => {
        $('main section').hide();
        $('#new-card').parent().show();

        $('#new-card').one('submit', function () {
            event.preventDefault();
            const newCard = {
                recipient: this.recipient.value,
                sender: this.sender.value,
                content: this.content.value
            };
            
            app.Card.create(newCard);
        });
    }

    cardView.initUpdatePage = (ctx, cb) => {
        console.log('ctx', ctx.card)
        const card = ctx.card;
        $('main section').hide();
        $('#update-card').parent().show();

        $('#update-card input[name="recipient"]').val(card.recipient);
        $('#update-card input[name="sender"]').val(card.sender);
        $('#update-card input[name="content"]').val(card.content);

        $('#update-card').on('submit', function () {
            event.preventDefault();
            const updatedData = {
                recipient: $('#update-card input[name="recipient"]').val(),
                sender: $('#update-card input[name="sender"]').val(),
                content: $('#update-card input[name="content"]').val()
            }

            app.Card.update(card.id, updatedData);
        });
    }

    module.cardView = cardView;
})(app);
