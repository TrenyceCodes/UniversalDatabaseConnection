import { SupportedDatabases, mySqlDatabaseConfiguration } from "./data-access/configurations/database-configurations"
import { createSqlConnection } from "./data-access/connections/database-connections";

export async function UniversalDatabaseConnection(chosenDatabase: string, databaseConfigurations: mySqlDatabaseConfiguration): Promise<any> {
    switch (chosenDatabase) {
        case SupportedDatabases.Sql:
            return await createSqlConnection(databaseConfigurations);
            break;
        default:
            throw new Error(`Unsupported databases ${chosenDatabase}`);
    }
}