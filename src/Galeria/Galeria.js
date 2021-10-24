import React from "react";
import './Galeria.css'

export default function Galeria(){

    return(
        <div>

            <div className="title">
                <h1>Galeria de imagens</h1>
                <p>Aqui você encontra as imagens mais diversas</p>
            </div>

            <div className="conteiner-cards">
                <div className="cards">
                    <div className="card">
                        <img src="https://conexaoplaneta.com.br/wp-content/uploads/2020/03/elevacao-nivel-mar-pode-provocar-desaparecimento-praias-2-conexao-planeta.jpg"></img>
                        <h3>Heading</h3>
                        <p>This is a media card. You can use this section to describe the content</p>
                        <p className="rodape">VER</p>
                    </div>

                    <div className="card">
                        <img src="https://conexaoplaneta.com.br/wp-content/uploads/2020/03/elevacao-nivel-mar-pode-provocar-desaparecimento-praias-2-conexao-planeta.jpg"></img>
                        <h3>Heading</h3>
                        <p>This is a media card. You can use this section to describe the content</p>
                        <p className="rodape">VER</p>
                    </div>

                    <div className="card">
                        <img src="https://conexaoplaneta.com.br/wp-content/uploads/2020/03/elevacao-nivel-mar-pode-provocar-desaparecimento-praias-2-conexao-planeta.jpg"></img>
                        <h3>Heading</h3>
                        <p>This is a media card. You can use this section to describe the content</p>
                        <p className="rodape">VER</p>
                    </div>
                </div>    
            </div>

        </div>
    );
}