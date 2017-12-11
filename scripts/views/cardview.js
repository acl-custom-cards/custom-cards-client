'use strict';
var app = app || {};

(function (module) {
    const cardView = {};

    cardView.initIndexPage = (ctx) => {
        $('main section').hide();
        $('#cards').empty().show();

        ctx.cards.map(card => $('#cards').append(card.toHtml()));   
        $('button[data-action]').parent().hide();
    }

    cardView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#cards').empty().show();
        $('#cards').append(ctx.card.toHtml());

        $('button[data-action]').show();

        $('button[data-action="delete"]').one('click', function () {
            const id = $(this).attr('data-id');
            app.Card.delete(id);
        });
        
        $('button[data-action="update"]').one('click', function () {
            const id = $(this).attr('data-id');
            page(`/cards/${id}/update`);
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

    cardView.initUpdatePage = (ctx) => {
        $('main section').hide();
        $('#update-card').parent().show();
        
        const card = ctx.card;
        const id = ctx.params.id;
        $('#update-card input[name="recipient"]').val(card.recipient);
        $('#update-card input[name="sender"]').val(card.sender);
        $('#update-card input[name="content"]').val(card.content);

        $('#update-card').one('submit', function () {
            event.preventDefault();
            const data = {
                recipient: this.recipient.value,
                sender: this.sender.value,
                content: this.content.value
            };
            
            app.Card.update(id, data);
        });
    }

    module.cardView = cardView;
})(app);
