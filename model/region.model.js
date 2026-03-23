module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: true
    });

    Region.associate = (models) => {
        Region.hasMany(models.Venue, {
            foreignKey: "regionId",
            as: "venues"
        });

        Region.hasMany(models.District, {
            foreignKey: "regionId",
            as: "districts"
        });
    };

    return Region;
};