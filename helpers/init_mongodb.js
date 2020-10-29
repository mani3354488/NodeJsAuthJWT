const mongooose = require('mongoose')

mongooose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME, 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true 
})
    .then(() => {
        console.log('mongodb connected')
    })

    .catch((err) => {
        console.log(err.message)
    })

mongooose.connection.on('connected', () => {
    console.log('Mongoose connected to db')
})

mongooose.connection.on('error', (err) => {
    console.log(err.message)
})

mongooose.connection.on('disconnected', () => {
    console.log('Mongose connection is disconnected')
})

process.on('SIGINT', async () => {
    await mongooose.connection.close()
    process.exit(0)
})

