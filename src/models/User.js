module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
      id:{
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type: DataType.STRING,
        allowNull:false
      },
      email:{
        type: DataType.STRING,
        allowNull:false,
        unique:true
      },
      password:{
        type: DataType.STRING,
        allowNull:false
      },
      createdAt:{
        type:DataType.DATE,
        allowNull:false
      },
      updatedAt:{
        type:DataType.DATE,
        allowNull:false
      }
    },{
      tableName:"user",
      timestamps:true
    })
    
    // User.associate = (model) =>{
    //   User.hasOne(model.UserData,{
    //     foreignKey:'userId', 
    //     as:'userData'
    //   });
    //   User.hasMany(model.Card,{
    //     foreignKey:'userId', 
    //     as:'card'
    //   });
    //   User.hasMany(model.Order,{
    //     foreignKey:'userId', 
    //     as:'order'
    //   });
    //   User.hasMany(model.UserAddress,{
    //     foreignKey:'userId', 
    //     as:'userAddress'
    //   });
    //   User.hasMany(model.Comment,{
    //     foreignKey:'userId', 
    //     as:'comment'
    //   });
    // }
  
    return User
  }