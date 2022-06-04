import styles from "../styles/Home.module.css";
import HeadComponent from "./../components/HeadComponent";
import Gap from "./../components/Gap";
import CreditCardForm from "./../components/CreditCardElements/CreditCardForm";
import { CreditCardProvider } from "../components/contexts/CreditCardProvider";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComponent
        title="Credit Card Payment Page"
        content="Credit Card Payment Page"
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Credit Card Payment Page</h1>
        <Gap />
        <CreditCardProvider>
          <CreditCardForm />
        </CreditCardProvider>
      </main>
    </div>
  );
}
