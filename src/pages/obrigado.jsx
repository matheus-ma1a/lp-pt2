import styles from "../styles/Home.module.css";



export default function Home() {

    return (
        <>
            <div className={styles.main}>

                <div className={styles.wapper}>

                    <div className={styles.container}>
                        <h1>INVERNO 24’</h1>
                        <p>PARTE II</p>
                        <div className={styles.obg}>
                            <p>OBRIGADA POR SE INSCREVER!</p>
                            <p>
                                Clique para fazer parte da nossa comunidade no whatsapp
                                e fique por dentro de todas as novidades.
                            </p>
                        </div>
                    </div>
                    <a className={styles.buttonObg} href="https://devzapp.com.br/api-engennier/campanha/api/redirect/66293b4e230a9c00011b2fd2">FAÇA PARTE</a>
                </div>
            </div>
        </>
    );
}
