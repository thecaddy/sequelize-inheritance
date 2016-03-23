

export default function(sequelize, DataTypes) {
  return {
    definition: {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      updatedAt: { type: DataTypes.DATE },
      createdAt: { type: DataTypes.DATE }
    },
    options: {
      hooks: {
        beforeDestroy(instance, options) {
        }
      },
      classMethods: {
        associate: function () {
        }
      },
      instanceMethods: {
      }
    }
  }
}
