import Link from 'next/link'
import classes from './main-navigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Encontros</div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Lista de Encontros</Link>
                    </li>
                    <li>
                        <Link href="/encontros/novo">Novo Encontro</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
