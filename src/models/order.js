const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    text: DataTypes.STRING,
  });

  Order.associate = models => {
    Order.belongsTo(models.User);
  };

  return Order;
};

export default order;
