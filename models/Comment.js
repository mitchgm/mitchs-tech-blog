const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// setting our dependencies 

class Comment extends Model {
    // this is allowing out model to utilize the model within sequalize 
}

Comment.init(
    // this sets up the structure of our model
    {
        id: {
            type: DataTypes.INTEGER,
            // this sets our data type to a number
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            // this sets our data type to a string
            allowNull: false,
            len: [1]
            // this ensures our post is at least one character long
        },
        postId: {
            type: DataTypes.INTEGER,
            // this sets our data type to a number aka integer
            references: {
                model: "post",
                key: "id"
            }
        }
    },
    {
        sequelize,
        // set our parameters
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);

module.exports = Comment;
// this exports our model