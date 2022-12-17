module.exports = (sequelize, DataTypes) => {

    let Fabricante = sequelize.define(
        'Fabricante', 
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
            tableName: 'fabricantes',
            timestamps: false
        }
    )
    
    Fabricante.associate = (models) => {
        Fabricante.hasMany(models.Produto, {
            foreignKey: 'fabricantes_id',
            as: 'produtos'
        })
    }
    return Fabricante
}