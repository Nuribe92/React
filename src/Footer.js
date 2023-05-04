import React, {Component} from "react";

const Footer = () => {
    return(
        <div id="contact" className="container-fluid row m-1 ">
            <div id="footer" className="row col-12">
                <img classNameName="" id="lupa" src="./img/lupa-b.png" alt="lupa"/>
                <svg id="clipboard" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check col-4" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                <svg id="bank" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bank col-4" viewBox="0 0 16 16">
                  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                </svg>
            </div>
            <div id="footerbody" className="row col-12 m-0 p-0">
              <div classNameName="border col-4 text-center">
                <h2 classNameName="pb-2">¿Que buscas?</h2>
                <ul>
                  <li>Descuentos</li>
                  <li>Kits</li>
                  <li>Productos populares</li>
                </ul>
              </div>
              <div classNameName="border col-4 text-center"><div>
                <h2 classNameName="pb-2">Contactanos</h2>
                <ul>
                  <li>Whatsapp</li>
                  <li>E-mail</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
              
              <div classNameName="border col-4 text-center">
                <h2 classNameName="pb-2">Metodos de pago</h2>
                <img src="./img/metodosdepago.png" alt="formasdepago"/>
              </div>
            </div>           
          </div>
    );
}

export default Footer;