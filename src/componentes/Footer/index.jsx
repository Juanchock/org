import "./Footer.css"

const Footer = () => {
        return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='redes'>
                <a href='https://www.linkedin.com/in/juan-carlos-vanegas-5b5547138'>
                    <img src="/img/linkedin.png" alt='linkedin' />
                </a>
                <a href='https://github.com/juanchock'>
                    <img src="/img/gh.png" alt='github' />
                </a>
                
            </div>
            <img src='/img/Logo.png' alt='org' />
            <strong> Juan Carlos Vanegas </strong>
        </footer>
    }


export default Footer