import '../Presentation/_presentation.scss';





const Presentation = () => {
    return (
      <div className="presentation-container">
        <h2 className="presentation-title">A propos de moi</h2>

        <div className="emeric-picture"></div>

        <article className="text-presentation">
            <h3>Je m&apos;appelle Emeric et je suis passionné par le développement web ! </h3>
            <p>Curieux et toujours en quete de nouvelles connaissances, j&apos;aime explorer les technologies pour relever des defis techniques </p>
            <p>Doté d&apos;un esprit logique et analytique, je conçois des applications modernes, performantes et accesssibles </p>
            <p>Mon objectif ? </p>
            <p>Offrir des expériences web intuitives et optimisées, alliant esthétisme et efficacité </p>
        </article>

        
        <article>

        </article>

        <a
          href="public/Emeric_Pataut_CV.pdf"
          target="_blanck"
          className="lien-cv"
        >
          Voir mon CV
        </a>
      </div>
    );
  };
  


  export default Presentation;