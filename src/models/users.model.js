'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    /* Properties */
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      account: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      pw: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      name: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 'users',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  users.associate = models => {};

  return users;
};
