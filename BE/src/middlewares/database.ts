import { createPool, Pool, PoolConnection } from 'mysql2/promise';
import { Request, Response, NextFunction } from 'express';
import { Sequelize } from 'sequelize';


interface CustomRequest extends Request {
    pool: PoolConnection;
}

// Construct the database URI
const dbUri = 'mysql://root:Str0ngP@ssw0rd2023@34.142.252.30:3100/mfaisalkemal_milestone3'

// Create a connection pool using the URI
const pool: Pool = createPool({
    uri: dbUri
});

// Create Sequelize instance using the URI
const sequelize = new Sequelize(dbUri, {
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        connectTimeout: 60000
    }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Middleware function to attach the database connection pool to the request object
const attachDB = (req: CustomRequest, res: Response, next: NextFunction): void => {
    pool.getConnection().then((connection) => {
        req.pool = connection;
        next();
    }).catch((err) => {
        console.log(dbUri);
        console.error('Error getting database connection:', err);
        res.status(500).json({ message: 'Database error' });
    });
};

export { attachDB, sequelize };
