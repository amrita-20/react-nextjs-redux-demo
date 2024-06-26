import React from "react";
import Link from "next/link";
import { initStore, initialCards, addItem } from "../store";
import styles from "./index.module.css";
import Card from "./Card";
import data from "./API/data.json";

class Index extends React.Component {
  static async getInitialProps({ store }) {
    //return store.dispatch(initialCards());
    return {cards: data};
  }
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <nav>
            <Link href="/home">Home</Link>

            <Link href="/about">About</Link>
          </nav>
          {/* <img src="./logo.png" className={styles.logo} alt="logo" /> */}
        </header>
        <div className={styles.grid}>
          {this.props.cards.map((card) => {
            return <Card key={card.id}></Card>;
          })}
        </div>
      </div>
    );
  }
}

export default initStore.withRedux(Index);
