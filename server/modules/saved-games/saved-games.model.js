'use strict';

const Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity: 'saved_game',
  connection: 'myLocalPostgres',
  attributes: {
    user_id: 'integer',
    score: 'integer',
    saved_game: 'json',
    player: {
      collection: 'user',
      via: 'savedGames'
    }
  }
});
