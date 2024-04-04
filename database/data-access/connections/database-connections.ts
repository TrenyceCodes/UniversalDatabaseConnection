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

    await sqlConnection.connect();

    return sqlConnection;
}

export async function createFirebaseConnection(firebaseDatabaseConfiguration: firebaseDatabaseConfiguration) {
    const initializeConnection = admin.initializeApp(firebaseDatabaseConfiguration)

    try {
        if (initializeConnection) {
            console.log("Firebase connection is up");
        }
    } catch (error) {
        throw new Error(`Firebase Connection is not working ${error}`);
    }
}
