function Home() {
    return (
        <div>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <body>
                <div>
                    <div class="card">
                        <img src="https://raw.githubusercontent.com/gabrielpatricksouza/gabrielpatricksouza/master/foto_perfil.jpg" />
                        <h1 class="title">Gabriel Patrick</h1>
                        <p>Sofware Developer</p>

                        <form action="https://documentacao-api-universidades.vercel.app/">
                            <button class="btn" type="submit" >Documentação</button>
                        </form>
                    </div>

                    <div class="icons">

                        <a href="https://www.instagram.com/gabrielpatricksouza/"><i class="fa fa-instagram fa-2x"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=5538991656566"><i class="fa fa-whatsapp fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/gabriel-patrick-8132b7153/"><i class="fa fa-linkedin fa-2x"></i></a>
                        <a href="https://github.com/gabrielpatricksouza"><i class="fa fa-github fa-2x"></i></a>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Home