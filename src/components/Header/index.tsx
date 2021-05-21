import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Lottie from 'react-lottie';

import  loadPokemon from '../../assets/4366-game-east-west.json';
import styles from './styles.module.scss';

export function Header() {

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadPokemon,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <header className={styles.headerContainer}>
            <div className={styles.animation}>

                <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                />
            </div>

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    )
}