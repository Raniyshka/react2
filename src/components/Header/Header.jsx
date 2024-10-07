import { Btn } from '../Btn/Btn'
import s from './Header.module.css'

export function Header(){
    return(
        <header className={s.header}>
                <div className={s.header__inner}>
                    <nav className={s.nav}>
                        <a className='active' href="/">О нас</a>
                        <a href="/catalog">Каталог</a>
                        <a href="/location">Где нас найти</a>
                    </nav>
                    <div className={s.logo}></div>

                    <div className={s.buttons}>
                        <a className="reg-btn" href="#">Регистрация</a>
                        <button className="vhod-btn">Вход</button>
                    </div>
            </div>
        </header>
    )
}