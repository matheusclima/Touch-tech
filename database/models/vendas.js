module.exports = (sequelize, DataTypes) => {
    let Vendas = sequelize.define(
        'Vendas',
        {
            produto_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                ForeignKey: true
        },
            cliente_id: {
                type: DataTypes.STRING,
                allowNull: false
        },
        id: {
           type: DataTypes.STRING,
           allowNull: false
         },
        status: {
                type: DataTypes.STRING,
                allowNull: false
        },
        valor: {
                type: DataTypes.NUMBER,
                allowNull: false
        },
        
            tablename: 'vendas',
            timestamps: false
    }
)
    Vendas.associate = (models) => {
        Vendas.BelongsToMany(models.Produtos, {
            through: 'vendas_produtos',
            foreignKey: 'vendas_id',
            foreignKey: 'produtos_id',
            as: 'produtos'
        })
    }
    return Vendas
}