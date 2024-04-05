import { firebaseDatabaseConfiguration, mySqlDatabaseConfiguration } from "../configurations/database-configurations";

///sql modules
const mysql = require('mysql2');

///firebase modules
const admin = require('firebase-admin');

export async function createSqlConnection(mysqlConnection: mySqlDatabaseConfiguration) {
    const sqlConnection = mysql.createConnection({
        host: mysqlConnection.host,
        user: mysqlConnection.user,
        password: mysqlConnection.password,
        database: mysqlConnection.databaseName
    });

    try {
        if (sqlConnection) {
            await sqlConnection.connect();
            return console.log("Sql connection is working");
        }
    } catch (error) {
        throw new Error(`Sql Connection is not working ${error}`);
    }

}

export async function createFirebaseConnection(firebaseDatabaseConfiguration: firebaseDatabaseConfiguration) {
    const initializeConnection = admin.initializeApp(firebaseDatabaseConfiguration)

    try {
        if (initializeConnection) {
            return console.log("Firebase connection is up");
        }
    } catch (error) {
        throw new Error(`Firebase Connection is not working ${error}`);
    }
}