// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(category, {
  foreignKey: 'category_id'
});


// Categories have many Products
Category.hasMany(product, {
  foreignKey: 'category_id',
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
through: ProductTag,
foreignKey: 'tag_id'
});


// Tags belongToMany Products (through ProductTag)
tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
  });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
