module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: '.dev/.sqlite3'
        },
        useNullAsDefault: true
    },
    test: {
        client: 'sqlite3',
        connection: {
            filename: ':memory:'
        },
        seeds: {
            directory: './tests/seeds'
        },
        useNullAsDefault: true
    } 
}