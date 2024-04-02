import { mySqlDatabaseConfiguration } from "../configurations/database-configurations";
const mysql = require('mysql2');

export async function createSqlConnection(mysqlConnection: mySqlDatabaseConfiguration) {
    const sqlConnection = mysql.createConnection({
        host: mysqlConnection.host,
        user: mysqlConnection.user,
        password: mysqlConnection.password,
        database: mysqlConnection.databaseName
    });

    try {
        await sqlConnection.connect();
        console.log("Sql Database Connected");
    } catch (error) {
        throw new Error("Sql database connection error" + error);
    }
}