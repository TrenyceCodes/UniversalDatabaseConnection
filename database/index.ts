import { SupportedDatabases, firebaseDatabaseConfiguration, mySqlDatabaseConfiguration } from "./data-access/configurations/database-configurations"
import { createFirebaseConnection, createSqlConnection } from "./data-access/connections/database-connections";

type DatabaseConnectionType = mySqlDatabaseConfiguration | firebaseDatabaseConfiguration | any;

export async function UniversalDatabaseConnection(chosenDatabase: string, databaseConfigurations: DatabaseConnectionType): Promise<DatabaseConnectionType> {
    switch (chosenDatabase) {
        case SupportedDatabases.Sql:
            return await createSqlConnection(databaseConfigurations);
        case SupportedDatabases.Firebase:
            return await createFirebaseConnection(databaseConfigurations);
        default:
            throw new Error(`Unsupported databases ${chosenDatabase}`);
    }
}

const databaseConfiguration: mySqlDatabaseConfiguration = {
    host: "localhost",
    user: "root",
    password: "password",
    databaseName: "MedicineDoseTracker"
} 

async function initializeConnection(supportedDatabase: SupportedDatabases, databaseConfiguration: DatabaseConnectionType) {
    try {
        const sqlConnection = await UniversalDatabaseConnection(supportedDatabase, databaseConfiguration);
        sqlConnection.query('SELECT * FROM Medicines', (error: any, results: any) => {
            if (error) {
                console.error("There was an issue in querying database: ", error);
                return;
            }
            return results;
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

initializeConnection(SupportedDatabases.Sql, databaseConfiguration);