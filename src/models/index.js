const City = require("./City");
const User = require("./User");

User.belongsTo(City);
City.hasMany(User);
