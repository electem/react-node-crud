module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.INTEGER
    },
    confirmPass: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    }
  });

  return User;
};
