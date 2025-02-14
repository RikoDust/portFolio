import '../Form/_form.scss';


const Form = () => {
    const handleSubmit = (e) => {
      e.preventDefault(); // Empêche le rechargement de la page
      window.location.href = "emeric.pataut@gmail.com";
    };
  
    return (
        <div className='form-container'>
            <h2>Contacter-moi !</h2>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Adresse mail</label>
                    <input type="email" id="email" name="email" placeholder="exemple@mail.com" required />
            
                    <label htmlFor="subject">Objet</label>
                    <input type="text" id="subject" name="subject" placeholder="Objet du contact" required />
            
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message" required></textarea>
            
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    );
};


export default Form