export interface mySqlDatabaseConfiguration {
    host: string,
    user: string,
    password: string,
    databaseName: string,
}

// this holds all the database types(postgres, sql, firebase)
export enum SupportedDatabases {
    Sql = "sql",
    Postgres = "postgres",
    Firebase = "firebase"
}