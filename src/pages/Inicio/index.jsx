import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import { VideosProvider, useVideosContext } from "contextos/Videos";

import styles from "./Inicio.module.css";

import { useEffect } from "react";

function Inicio() {
  const { videos, setVideos } = useVideosContext();

  useEffect(() => {
    if (!videos) {
      fetch("https://my-json-server.typicode.com/Chikrem/cinetag-json/videos")
        .then((resposta) => resposta.json())
        .then((dados) => {
          setVideos(dados);
        });
    }
  }, [videos, setVideos]);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {(videos || []).map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
