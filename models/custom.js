module.exports = (sequelize, Sequelize) => {
    const Log = sequelize.define("logs", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        ipAddress: {
            type: Sequelize.STRING
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
        }
    });
  
    return Log;
  };