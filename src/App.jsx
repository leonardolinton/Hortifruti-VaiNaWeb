import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Produtos from "./components/Produtos";
import ListaProdutos from "./components/ListaProdutos";
import Carrinho from "./components/Carrinho";

class App extends Component {

  state = {
    produtos: [
      {
        nome: "alface",
        imagem: "./assets/img/alface.png"
      },
      {
        nome: "laranja",
        imagem: "./assets/img/laranja.png"
      },
      {
        nome: "cereja",
        imagem: "./assets/img/cereja.png"
      },
      {
        nome: "cenoura",
        imagem: "./assets/img/cenoura.png"
      },
      {
        nome: "manga",
        imagem: "./assets/img/manga.png"

      },
      {
        nome: "limão",
        imagem: "./assets/img/limao.png"
      },
      {
        nome: "beterraba",
        imagem: "./assets/img/beterraba.png"
      },
      {
        nome: "tomate",
        imagem: "./assets/img/tomate.png"
      }
    ]

  }

  render() {
    return (
      <div className="container">
        {/*===== HEADER =====*/}
        <Header />
        {/*===== MAIN =====*/}
        <main>
          {/*===== PRODUTOS =====*/}
          <Produtos>

            {
              this.state.produtos.map((produto) =>
              (
                < ListaProdutos
                  nome={produto.nome}
                  imagem={produto.imagem}
                />
              )
              )
            }

          </Produtos>
          {/*===== CARRINHO =====*/}
          <Carrinho />

        </main>

      </div >
    );
  }
}

export default App;
