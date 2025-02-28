import '../Footer/_footer.scss';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="liens_reseaux" >
                <a href="https://www.linkedin.com/in/emeric-pataut/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/RikoDust" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-github"></i>
                </a>
            </div>
        </footer>
    );
};


export default Footer