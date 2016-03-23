import inheritFrom from './inherit';
import animal from './inherit/animal';

export default function(sequelize, DataTypes) {
  const Cat = inheritFrom(sequelize, DataTypes)('cat', animal, {
  }, {
    classMethods: {
    },

    instanceMethods: {
    },

    hooks: {
    }
  });

  return Cat;
};
