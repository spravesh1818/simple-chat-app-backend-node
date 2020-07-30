const { sequelize } = require("../connection");


module.exports=(sequelize,type)=>{
    return sequelize.define('rooms',{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        room:type.STRING,
        user:type.STRING,
        message:type.STRING
    })
}