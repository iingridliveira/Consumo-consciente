const Home = () => {
  return (
    <>
      {/* Primeira seção */}
      <section
        className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-5"
        style={{ minHeight: "75vh" }}
      >
        {/* Texto da citação */}
        <article
          className="text-center text-md-start mb-4 mb-md-0"
          style={{ maxWidth: "650px" }}
        >
          <h1
     
          >
            "A tecnologia é destrutiva apenas nas mãos de pessoas que não
            percebem que são uma e que estão no mesmo processo que o universo."
          </h1>
          <p className="mt-3 text-muted">— Alan Watts</p>
        </article>

        {/* Imagem */}
        <div className="text-center">
          <img
            src="https://media.canva.com/v2/image-resize/format:PNG/height:351/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FrBGkM%2FMAFzxYrBGkM%2F1%2Fp.png/watermark:F/width:351?csig=AAAAAAAAAAAAAAAAAAAAALXYUTXyG5TOKAVAiGI1miRdweMTgHKYRR0esN4ziG0R&exp=1735341594&osig=AAAAAAAAAAAAAAAAAAAAACT6aeuIs-eHkzj619lfP1PdJYV6NSTAPtr-RABWIbkG&signer=media-rpc&x-canva-quality=screen"
            alt="Ilustração"
            className="img-fluid rounded shadow w-100"
            style={{ maxWidth: "1000px", height: "auto" }} // Aumenta o tamanho da imagem
          />
        </div>
      </section>

      {/* Segunda seção (opcional) */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Explore Mais</h2>
          <p className="text-muted">
            Descubra como a tecnologia pode transformar o mundo quando utilizada
            com responsabilidade e sabedoria.
          </p>
          <button className="btn btn-primary mt-3">Saiba Mais</button>
        </div>
      </section>
    </>
  );
};

export default Home;
