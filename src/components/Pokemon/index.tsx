import Snorlax from '../../assets/snorlax.svg';

import styles from './styles.module.scss';

export function Pokemon() {

    return (
        <div className={styles.playerContainer}>

            <header>
                <Snorlax width={50} height={50} />
                <strong>Tocando agora</strong>
            </header>


            <div className={styles.currentEpisode}>
                {/* <Snorlax
                    width={400}
                    height={400}
                />

                <strong>Sonrlax</strong>
                <span>Normal</span> */}

                <div className={styles.emptyPlayer}>
                    <strong>Selecione um podcast pokemon</strong>
                </div>
            </div>


            <footer className={styles.empty} >
                <div className={styles.progress}>
                    <span>Controles</span>

                </div>
                <div className={styles.buttons}>
                    <span>Numero</span>
                </div>

            </footer>
        </div >
    )
}