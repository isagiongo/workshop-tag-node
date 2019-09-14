const { MongoClient } = require('mongodb')
const axios = require( 'axios')

const [ localidade ] = process.argv.slice(2)

const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${ localidade }location.within=npm 5km&token=I6KD6XKCCQRDBM7NZL33`

const connectionString = 'mongodb+srv://sarau-usr:PastelVegano2019@sarau-tecnologico-tmp-y1mnh.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient( connectionString )

axios.get( url )
    .then( response => {

        client.connect( () => {
            const db = client.db('sarau')

            response.data.events.forEach(e => {
                db.collection( 'isadora-eventos' )
                    .insertOne({
                        nome: e.name.text,
                        resumo: e.summary,
                        gratuito: e.is_free,
                        horarioInicio: e.start.local,
                        horarioFim: e.end.local
                    })
            })
        })
        
    })

    
    // db.collection( 'isadora-eventos' )
    //     .insertOne({
    //         name: 'Mais um Sarau Tecnologico TAG',
    //         subject: 'Node.js',
    //         tags: [ 'node', 'JS', 'mongodb']
    // })

    // db.collection( 'isadora-eventos' )
    //     .find({
    //         name: 'Mais um Sarau Tecnologico TAG'
    //     }).toArray ((err, dados) => {
    //         console.log(dados)
    //     })
