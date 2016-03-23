import inheritFrom from './inherit';
import animal from './inherit/animal';

export default function(sequelize, DataTypes) {
  const Dog = inheritFrom(sequelize, DataTypes)('dog', animal, {
  }, {
    classMethods: {
    },

    instanceMethods: {
    },

    hooks: {
    }
  });

  return Dog;
};
