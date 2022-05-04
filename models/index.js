const Trip = require("./Trip")
const Traveller = require("./Traveller")
const Location = require("./Location")

Location.belongsToMany(Traveller,{
    through: Trip
})

Traveller.belongsToMany(Location,{
    through: Trip
})

module.exports = {
    Trip,
    Traveller,
    Location
}