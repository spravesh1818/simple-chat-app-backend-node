const Sequelize=require("sequelize");
const RoomModel=require("./models/rooms");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './chat_history.sqlite'
});

const Room=RoomModel(sequelize,Sequelize);

sequelize.sync({force:true}).then(()=>{
    console.log("Database and tables created")
});

module.exports={
    Room
}

