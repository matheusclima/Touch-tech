module.exports = (sequelize, DataTypes) => {
    let Clientes = sequelize.define(
        'Clientes',
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
        endereço:{
           type: DataTypes.STRING,
           allowNull: false
         },
        email: {
                type: DataTypes.STRING,
                allowNull: false
        },
        telefone: {
                type: DataTypes.STRING,
                allowNull: false
        },
        documento:  {
                type: DataTypes.STRING,
                allowNull: false
        },
        senha: {
                type: DataTypes.STRING,
                allowNull: false
        },
            tablename: 'clientes',
            timestamps: false
        } 
    )
    Clientes.associate = (models) => {
        Clientes.hasMany(models.Vendas, {
            foreignKey: 'clientes_id',
            as: 'Vendas'
        })
    }
    return Clientes
}