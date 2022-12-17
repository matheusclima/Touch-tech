module.exports = (sequelize, DataTypes) => {

    let Categoria = sequelize.define(
        'Categoria',
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'categorias',
            timestamps: false,
        }
    )

    return Categoria
}