import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CarrosselEdit from '../components/CarrosselEdit';
import { RiArrowGoBackFill } from "react-icons/ri";
import {Helmet} from "react-helmet";


const Lista = ({listas, dados}) => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const navigate = useNavigate();


  function obtemJogos(index){
    const lista = listas && listas[index] && listas[index].ids
      ? dados.filter((jogo) => listas[index].ids.includes(jogo.id))
      : [];
    return lista;
  }
  const jogosLista = obtemJogos(id); 

  return (
    <>
    
      <section className='ml-5 mr-5 min-h-dvh'>
      <button onClick={() => navigate(-1)} /*bug de não ter pagina anterior?*/className="items-center gap-1 inline-flex px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white hover:bg-cyan-600 font-inter mt-5 ml-5 transition-all duration-300">
          <RiArrowGoBackFill />
          Voltar
        </button>
    {
      listas ? ( //tem algum jeito melhor de fazer essas verificações?

        <div className="mt-16">
           
              <div key={id} className="flex flex-col">
                <h2  className="text-2xl font-bold font-inter flex items-center gap-5">
                  {listas ? listas[id]['nome'] : ''}
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`Lista | ${listas[id]['nome']}`}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="description" content="Página de jogo" />
                  </Helmet>
                </h2>
                <CarrosselEdit jogos={jogosLista} id={numericId} />
              </div>
  
          
        </div>
      ) : <p className='font-fira p-5 text-lg text-red-700'>Não foi possível carregar a lista</p>
    }
    </section>
    </>
    

  )
}

export default Lista;