module.exports = (sequelize, DataTypes) => {
    
    let Produto = sequelize.define(
        'Produto', 
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            preco: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            quantidade: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            ativo: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            fabricantes_id: {
                type: DataTypes.STRING,
                allowNull: false
            },

        },
        {
            tableName: 'produtos',
            timestamps: false
        }
    )
    
    return Produto
}