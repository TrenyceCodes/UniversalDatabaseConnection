import { SupportedDatabases, firebaseDatabaseConfiguration, mySqlDatabaseConfiguration } from "./data-access/configurations/database-configurations"
import { createFirebaseConnection, createSqlConnection } from "./data-access/connections/database-connections";

export async function UniversalDatabaseConnection(chosenDatabase: string, databaseConfigurations: mySqlDatabaseConfiguration | firebaseDatabaseConfiguration): Promise<any> {
    switch (chosenDatabase) {
        case SupportedDatabases.Sql:
            return await createSqlConnection(databaseConfigurations as mySqlDatabaseConfiguration);
            break;
        case SupportedDatabases.Firebase:
            return await createFirebaseConnection(databaseConfigurations as firebaseDatabaseConfiguration);
        default:
            throw new Error(`Unsupported databases ${chosenDatabase}`);
    }
}

const databaseConfiguration: mySqlDatabaseConfiguration = {
    host: "localhost",
    user: "root",
    password: "password",
    databaseName: "TaskifyDB"
}

const connection = UniversalDatabaseConnection(SupportedDatabases.Sql, databaseConfiguration);
console.log(connection);