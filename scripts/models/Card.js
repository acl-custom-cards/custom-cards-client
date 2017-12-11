'use strict';
var app = app || {};
// const API_URL = 'https://acl-cards-demo.herokuapp.com';
const API_URL = 'http://localhost:3000';

(function(module) {
    function Card (obj) {
        this.id = obj.id;
        this.recipient = obj.recipient;
        this.sender = obj.sender;
        this.content = obj.content;
    }

    Card.all = [];

    Card.create = card => {
        $.post(`${API_URL}/api/v1/cards`, card)
            .then(console.log)
            .catch(console.error);
    }

    Card.update = (id, data) => {
        console.log( id );
        console.log( 'data', data );
        $.ajax({
            url: `${API_URL}/api/v1/cards/${id}`,
            method: 'PUT',
            data: data
        })
            .then(data => {
                console.log(data);
                page(`/cards/${id}`);
            })
            .fail(console.error);
    }

    Card.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/cards/${ctx.params.id}`)
            .then(data => {
                ctx.card = new Card(data[0]);
                cb();
            })
            .fail(console.error);
    };

    Card.fetchAll = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/cards/`)
            .then(data => {
                Card.loadAll(data);
                ctx.cards = Card.all;
            })
            .then(cb)
            .fail(console.error);
    }

    Card.loadAll = (data) => {
        Card.all = data.map(obj => new Card(obj));
    }

    Card.prototype.toHtml = function () {
        let fillTemplate = Handlebars.compile($('#card-template').text());
        return fillTemplate(this);
    }

    module.Card = Card;
})(app);