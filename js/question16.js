
// Array of Objects
const quiz = [
    {
        q: 'When you need more advanced features such as true asynchronous support, indexing for faster searching, or transactions for offline web storage, which of the following you might use?',
        options: ['localStorage',
            'sessionStorage',
            'Web SQL',
            'Indexeddb',
            'Indexeddb & Web SQL'],
        answer:4
    },
    {
        q: 'Which one of the following offline web storage is an object database providing the power of indexing and transactions without the need to set up a formal relational structure? ',
        options: ['localStorage',
            'sessionStorage',
            'Web SQL',
            'Indexeddb'],
        answer: 3
    },
    {
        q: 'Which one the following storage is suitable for storing files such as images, text files, XML, or even movies?',
        options: ['HTTP cache',
            'Filesystem API',
            'Web SQL',
            'Indexeddb'],
        answer: 1
    },
    {
        q: ' Which one the following can you use to make an entire website offline-friendly with very little effort?',
        options: ['HTTP cache',
            'Filesystem API',
            'Web SQL',
            'Indexeddb'],
        answer: 0
    },
    {
        q: 'Which one provides all the features of a relational database on the client side?',
        options: ['HTTP cache',
            'Filesystem API',
            'Web SQL',
            'Indexeddb'],
        answer: 2
    },
    {
        q: ' Which one provides object-based database on the client side?',
        options: ['Web storage',
            'Filesystem API',
            'Web SQL',
            'Indexeddb'],
        answer: 3
    },
    {
        q: 'Which one is ideal for storage of files like text file, xml files or even media files on the client side?',
        options: ['Web storage',
            'Filesystem API',
            'Web SQL',
            'Indexeddb'],
        answer: 1
    },
    {
        q: 'Which database standard the most current implementation of Web SQL is built on?',
        options: ['SQL Server',
            'MySql',
            'SQLite',
            'Oracle'],
        answer: 2
    },
    {
        q: ' When you attempt to open a database openDtatabase method of the Web SQL API, what will happen if the database you are trying to open does not exist?',
        options: ['the openDatabase method will return ‘undefined',
            'a database will be created automatically',
            'an exception will be thrown',
            'a prompt will be opened asking to enter database name'],
        answer: 1
    },
    {
        q: 'Which one is the complete definition of the openDatabase method of Web SQL API?',
        options: ['openDatabase (name, version)',
            'openDatabase (name, version, displayName)',
            'openDatabase (name, version, displayName, creationCallback)',
            'openDatabase (name, version, displayName, estimatedSize, creationCallback)'],
        answer: 3
    },
    {
        q: 'When is the creationCallback passed in the openDatabase method invoked?',
        options: ['Always, if already exists or if the database does not yet exist and is being created, the callback will be invoked',
            'If the database exists, the callback will be invoked',
            'If the database does not yet exist and is being created, the callback will be invoked',
            'If the database version is changed, the callback will be invoked'],
        answer: 2
    },
    {
        q: 'How do you close a database connection with Web SQL?',
        options: ['Call the close method on database object',
            'Set database object to null',
            'Call the transaction on the database object, inside the method call the commit method on the transaction object',
            'You don’t have to close the connection manually, it is automatically handled'],
        answer: 3
    },
    {
        q: 'What is the typical default database size in Web SQL?',
        options: ['1 MB',
            '5 MB',
            '10 MB',
            'Unlimited'],
        answer: 1
    },
    {
        q: 'How do apply modifications such as adding or dropping a table to an existing database with the Web SQL?',
        options: ['Use changeVersion method',
            'Use transaction method',
            'Use creationCallback in openDatabase method',
            'Use executeSql method '],
        answer: 0
    },
    {
        q: '  The name of the database you pass to openDatabase method is case-sensitive.',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: 'Which method of the Database object in Web SQL provides a transaction to execute SQL statements allowing both read and write commands? ',
        options: ['transaction',
            'readTransaction',
            'writeTrasnsaction',
            'executeSql'],
        answer: 0
    },
    {
        q: 'What is the required parameter of the transaction method of the Database object in Web SQL?',
        options: ['A callback function',
            'A success callback function',
            'An error callback function',
            'A Database object'],
        answer: 0
    },
    {
        q: ' What does the callback function of the Database object’s transaction method accept as parameter?',
        options: ['A Database object',
            'A transaction object',
            'A SQL statement',
            'Array of objects'],
        answer: 1
    },
    {
        q: ' With Web SQL, Schema migration support is available by using the ____________method.',
        options: ['migrated()',
            'changeVersion()',
            'transaction()',
            'executeSql()'],
        answer: 1
    },
    {
        q: 'In Web SQL, what does the openDatabase method do?',
        options: ['Opens a database if exists and returns the opened database. If the database does not exist returns null',
            'Opens a database and returns it if it exists otherwise throws exception',
            'Opens a database, if it does not exist it create one and returns it',
            'Opens a database if exists and returns the opened database. If the database does not exist does nothing'],
        answer: 2
    },
    {
        q: 'To insert a row in a table in Web SQL database which method of the Web SQL database object do you use?',
        options: ['transaction', 'executeSql', 'insert', 'add'],
        answer: 0
    },
    {
        q: ' Which one following is the required parameter of the transaction method of the Web SQL database object?',
        options: ['Callback to execute command ',
            'All of the above',
            'Callback method to invoke if an error occurs while the transaction is being processed',
            'Callback method to invoke if all statements successfully execute within the transaction'],
        answer: 0
    }
]