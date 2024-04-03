import { SupportedDatabases, mySqlDatabaseConfiguration } from "../data-access/configurations/database-configurations";
import { createSqlConnection } from "../data-access/connections/database-connections";
import { UniversalDatabaseConnection } from "../index";
jest.mock("../data-access/connections/database-connections");

test('if we choose sql as our database, it should return connecting message', async () => {
  const databaseConfigurations: mySqlDatabaseConfiguration = {
    host: 'localhost',
    user: 'root',    
    password: 'password',
    databaseName: '',
  };

  const connection = await UniversalDatabaseConnection(SupportedDatabases.Sql, databaseConfigurations);
  expect(connection).toEqual("Sql Database Connected");
});
