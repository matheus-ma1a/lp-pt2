import styles from "@/styles/Home.module.css";
import { useState } from "react";


export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');


  function cadastroMailbiz(e) {
    e.preventDefault();

    // const options = {
    //   method: 'POST',
    //   url: `https://mbiz.mailclick.me/api.php/Subscriber.Subscribe?APIKey=${process.env.API_KEY}&Command=Subscriber.Subscribe&ResponseFormat=JSON&ListID=13439&EmailAddress=${email}&CustomField1=${nome}&IPAddress=12`
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    history('/obrigado');
  }
  return (
    <>
      <div className={styles.main}>

        <div className={styles.wapper}>

          <div className={styles.container}>
            <h1>INVERNO 24’</h1>
            <p>PARTE II</p>
            <p>
              SE CADASTRE PARA GANHAR UM CUPOM DE <b>FRETE GRÁTIS</b> NO DIA DO LANÇAMENTO
            </p>
          </div>

          <form className={styles.form} onSubmit={cadastroMailbiz}>
            <input
              className={styles.nome}
              type="text"
              placeholder='NOME'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              className={styles.email}
              type="email"
              name="email"
              placeholder='EMAIL'
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input className={styles.button} type="submit" value={'SE INSCREVA'} />
          </form>
        </div>
      </div>
    </>
  );
}
