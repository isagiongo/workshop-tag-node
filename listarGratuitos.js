const { MongoClient } = require('mongodb')

async function main() {

    const connectionString = 'mongodb+srv://sarau-usr:PastelVegano2019@sarau-tecnologico-tmp-y1mnh.mongodb.net/test?retryWrites=true&w=majority'
    
    const client = await MongoClient.connect( connectionString )
    const db = client.db( 'sarau' )
    const collection = db.collection('isadora-eventos')

    const gratuitos = await collection.find({
            gratuito: true
        }).toArray()
            gratuitos.forEach(e => console.log(e.nome))
        
    client.close()
}
main()


