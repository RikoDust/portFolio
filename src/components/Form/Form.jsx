import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../Form/_form.scss";



const Form = () => {
    const form = useRef();
    const [modalMessage, setModalMessage] = useState(""); // Stocke le message
    const [isModalOpen, setIsModalOpen] = useState(false); // Gère l'affichage de la modale

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        emailjs.sendForm(
            "service_ej67eb9",  // Service ID - EMAILJS
            "template_4kc29wd", // Template ID - EMAILJS
            form.current,
            "pjNRT6_IF-NLANWOj" // Public Key - EMAILJS
        )
        .then(
            (result) => {
                console.log("Message envoyé", result.text);
                setModalMessage("Message envoyé avec succès ! ✅");
                setIsModalOpen(true);
                form.current.reset(); // Réinitialise le formulaire après envoi
            },
            (error) => {
                console.log("Erreur", error.text);
                setModalMessage("Erreur lors de l'envoi du message ❌");
                setIsModalOpen(true);
            }
        );
    };



    return (
        <div className="form-container">
            <h2>Contacter-moi !</h2>
            <div className="contact-form">
                <form ref={form} onSubmit={handleSubmit}>
                    <label htmlFor="email">Adresse mail</label>
                    <input type="email" id="email" name="user_email" placeholder="exemple@mail.com" required />

                    <label htmlFor="user_name">Nom</label>
                    <input type="text" id="user_name" name="user_name" placeholder="Votre nom" required />
            
                    <label htmlFor="subject">Objet</label>
                    <input type="text" id="subject" name="subject" placeholder="Objet du contact" required />
            
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message" required></textarea>
            
                    <button type="submit">Envoyer</button>
                </form>
            </div>


            {/* Modale conditionnelle */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        <button onClick={() => setIsModalOpen(false)}>OK</button>
                    </div>
                </div>


            )}
        </div>
    );
};

export default Form;
