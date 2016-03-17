
const _merge = (base, attach) => {
  if (typeof attach === 'object') {
    const keys = Object.keys(attach)
    for (let i = 0; i < keys.length; i++) {
      if (!base[keys[i]]) {
        base[keys[i]] = attach[keys[i]];
      } else {
        base[keys[i]] = _merge(base[keys[i]], attach[keys[i]]);
      }
    }
  } else if (typeof base === 'function'
      && typeof attach === 'function') {
    return function(...args) {
      const temp = base.apply(this, args);
      if (temp) {
        return Promise.resolve(temp)
        .then(() => attach.apply(this, args))
      } else {
        attach.apply(this, args)
      }
    }
  } else {
    throw new Error('CANNOT MERGE', base, attach)
  }
  return base
}

const merge = (base, ...args) => {
  for(let i = 0, len = args.length; i < len; i++) {
    if(typeof args[i] === 'object') {
      base = _merge(base, args[i])
    }
  }
  return base
}

export default (sequelize, DataTypes) => {
  const _sequelize = sequelize;
  const _DataTypes = DataTypes;

  return (name, base, defs, opts) => {
    const {definition, options} = base(_sequelize, _DataTypes);
    const {associate} = options.classMethods;
    const def = merge(definition, defs);
    const opt = merge(opts, options);
    
    return _sequelize.define(name, def, opt);
  };
};
