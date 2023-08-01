/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("songs", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    title: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    year: {
      type: "integer",
      notNull: true,
    },
    genre: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    performer: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    duration: {
      type: "integer",
    },
    albumid: {
      type: "VARCHAR(50)",
    },
  });

  pgm.addConstraint(
    "songs",
    "fk_song.albumid_albums.id",
    "FOREIGN KEY(albumid) REFERENCES albums(id) ON DELETE CASCADE"
  );
};

exports.down = (pgm) => {
  pgm.dropConstraint("songs", "fk_song.albumid_albums.id");
  pgm.dropTable("songs");
};
