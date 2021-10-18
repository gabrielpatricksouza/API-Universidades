import NextCors from 'nextjs-cors';

async function universidades (request, response){

    await NextCors(request, response, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200, 
     });


    response.json(require('./dados_api_universidades.json'));
}

export default universidades;