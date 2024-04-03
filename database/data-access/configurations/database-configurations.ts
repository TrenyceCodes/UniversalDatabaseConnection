export interface mySqlDatabaseConfiguration {
    host: string,
    user: string,
    password: string,
    databaseName: string,
}

export interface firebaseDatabaseConfiguration {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string
}

// this holds all the database types(postgres, sql, firebase)
export enum SupportedDatabases {
    Sql = "sql",
    Postgres = "postgres",
    Firebase = "firebase"
}