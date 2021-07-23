export const autopopulate = (field) => function (next) {
    this.populate(field);
    next();
  };
  