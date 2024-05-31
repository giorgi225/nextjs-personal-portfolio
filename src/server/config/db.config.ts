const {DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST} = process.env;

const database = {
    name: DB_NAME || 'database_name',
    username: DB_USERNAME || 'root',
    password: DB_PASSWORD || '',
    host: DB_HOST
}

export default database;