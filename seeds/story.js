
exports.seed = function(knex, Promise) {

  return knex('story').del()
    .then(function () {

      return knex('story').insert([
        {id: 1, name: 'The Wormhole', body: 'There needs to be an insanely long string of text stored in this table column because it is a story and therefore will take up a lot of room when it gets stored and I am not sure about how to avoid the limit of characters and have I exceeded 255 yet? I wonder, but I am not sure so I will just keep on typing. This stupid q3 project is killing me. Dude stole my idea and I would not want to work with him on it anyway because I want it to be fun and visually stunning and if I worked with him, I would probably hate coming to school for the next 9 days. UGH!!!!!'},
        {id: 2, name: 'Ghost Story A Mongous', body: 'Second story. There needs to be an insanely long string of text stored in this table column because it is a story and therefore will take up a lot of room when it gets stored and I am not sure about how to avoid the limit of characters and have I exceeded 255 yet? I wonder, but I am not sure so I will just keep on typing. This stupid q3 project is killing me. Dude stole my idea and I would not want to work with him on it anyway because I want it to be fun and visually stunning and if I worked with him, I would probably hate coming to school for the next 9 days. UGH!!!!!'},
        {id: 3, name: 'Porridge Monster', body: 'Third story.'}
      ]);
    });
};
