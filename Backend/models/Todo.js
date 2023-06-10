module.exports = (Sequelize, DataTypes) => {

    const Todos = Sequelize.define("Todos", {
        task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    //{
      //  timestamps: false,
      //  createdAt: false, // don't add createdAt attribute
     //   updatedAt: false,
     // }
    );
    return Todos;
}