const Koa = require( 'koa' )
const app = new Koa()

const {
    listarGratuitos
} = require( './listarGratuitos' )

const {
    buscarEventosPorLocalidade
} = require( './buscarEventoPorLocalidade' )

app.use( async ctx => {
    const { localidade } = ctx.request.query
    //ctx.body = await listarGratuitos()
    ctx.body = await buscarEventosPorLocalidade( localidade )
} )

app.listen( 3000 )