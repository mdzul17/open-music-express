/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("user", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    username: {
      type: "VARCHAR(50)",
      unique: true,
      notNull: true,
    },
    password: {
      type: "text",
      notNull: true,
    },
    fullname: {
      type: "text",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("user");
};
