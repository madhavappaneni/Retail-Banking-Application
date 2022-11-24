module.exports = {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "postgres",
    DB: process.env.DB_NAME || "postgres",
    // ...(process.env.NODE_ENV == "production") && {
    // ssl: {
    //     require: true,
    //     rejectUnauthorized: false
    // },
    // },
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};