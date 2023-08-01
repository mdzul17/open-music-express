/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn("albums", {
    coverUrl: {
      type: "VARCHAR(200)",
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn("albums", "coverUrl");
};
