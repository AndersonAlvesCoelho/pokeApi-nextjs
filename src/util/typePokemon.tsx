import styles from '../pages/home.module.scss';

export function TypePokemonRender(name: string) {
  switch (name) {
    case "normal":
      return (
        <p className={`${styles.badge} ${styles.badgeNormal}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "fighting":
      return (
        <p className={`${styles.badge} ${styles.badgeFighting}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "water":
      return (
        <p className={`${styles.badge} ${styles.badgeWater}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "flying":
      return (
        <p className={`${styles.badge} ${styles.badgeFlying}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "fire":
      return (
        <p className={`${styles.badge} ${styles.badgeFire}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "grass":
      return (
        <p className={`${styles.badge} ${styles.badgeGrass}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "poison":
      return (
        <p className={`${styles.badge} ${styles.badgePoison}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "electric":
      return (
        <p className={`${styles.badge} ${styles.badgeElectric}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "ground":
      return (
        <p className={`${styles.badge} ${styles.badgeGround}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "psychic":
      return (
        <p className={`${styles.badge} ${styles.badgePsychic}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "rock":
      return (
        <p className={`${styles.badge} ${styles.badgeRock}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "ice":
      return (
        <p className={`${styles.badge} ${styles.badgeIce}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "bug":
      return (
        <p className={`${styles.badge} ${styles.badgeBug}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "dragon":
      return (
        <p className={`${styles.badge} ${styles.badgeDragon}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "ghost":
      return (
        <p className={`${styles.badge} ${styles.badgeGhost}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "dark":
      return (
        <p className={`${styles.badge} ${styles.badgeDark}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "steel":
      return (
        <p className={`${styles.badge} ${styles.badgeSteel}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
    case "fairy":
      return (
        <p className={`${styles.badge} ${styles.badgeFairy}`} >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      )
  }
}