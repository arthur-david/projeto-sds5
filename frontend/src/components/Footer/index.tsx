const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">
                    App desenvolvido por{' '}
                    <a
                        href="https://github.com/arthur-david"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Arthur David
                    </a>
                </p>
                <p className="text-light">
                    <small>
                        <strong>Semana Spring React</strong>
                        <br />
                        Evento promovido pela escola DevSuperior:{' '}
                        <a
                            href="https://instagram.com/devsuperior.ig"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @devsuperior.ig
                        </a>
                    </small>
                </p>
            </div>
        </footer>
    )
}

export default Footer
