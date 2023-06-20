/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("song", {
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
    "song",
    "fk_song.albumid_album.id",
    "FOREIGN KEY(albumid) REFERENCES album(id) ON DELETE CASCADE"
  );
};

exports.down = (pgm) => {
  pgm.dropTable("song");
  pgm.dropConstraint("song", "fk_song.albumid_album.id");
};
