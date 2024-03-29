const { MongoClient } = require( 'mongodb' )

module.exports = {
    listarGratuitos: async function() {
        const connectionString = 'mongodb+srv://'
        const client = await MongoClient.connect( connectionString )
        const db = client.db( 'sarau' )
        const eventosCollection = 'isadora-eventos'
        const collection = db.collection( eventosCollection )
    
        const gratuitos = await collection.find( {
            gratuito: true
        } ).toArray()
    
        gratuitos.forEach( e => console.log( e.nome ) )
    
        client.close()
        
        return gratuitos
    }
}