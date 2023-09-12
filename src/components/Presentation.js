import avatar from '../images/Avatar02.png'
import Typewriter from 'typewriter-effect/dist/core';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { expList } from '../datas/experience'
import ExperienceList from './ExperienceList'
import { educList } from '../datas/education'
import EducList from './EducList'

function Presentation() {
	const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='snapX'>
        <section className='experience'>
            <div className='close'>
                <button onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
        <h1 className='experience__title'>EXPÉRIENCE</h1>
        <ul className='experience__list'>
            {
                expList.map(({id, title, date, desc }) => (
                    <li className='experience__list--item' key={id}>
                        <ExperienceList key={id} title={title} date={date} desc={desc} />
                    </li>
                ))
            }
        </ul>
        </section>
        <section className='experience'>
        <h1 className='experience__title'>FORMATIONS</h1>
        <ul className='experience__list'>
            {
                educList.map(({id, school, year, level}) => (
                    <li className='experience__list--item' key={id}>
                        <EducList 
                        key={id} 
                        school={school} 
                        year={year} 
                        level={level} />
                    </li>
                ))
            }
        </ul>

        </section>

        </div>

    )
    
    : (
        <div className='presentation'>
            <section className="banner">
                <h1 className="banner__text" data-aos='fade-down' data-aos-duration='2000'>Bonjour</h1>
            </section>
        <hr />
            <section className="pres">
                <p className="pres__text">Je m'appelle Sheila, je suis développeuse web front-end</p>
                <img src={avatar} className='pres__avatar'  />
                <div className='pres__here' >
                    <p className='pres__link' onClick={() => setIsOpen(true)}>ICI</p>
                    <FontAwesomeIcon icon={faArrowUp} />

                </div>
            </section>
        </div>
    )
}

AOS.init();
// Affichage dialogue - accueil
let app = document.querySelector('.pres__text');

new Typewriter(app, {
    //loop: true,
})
.start()
.changeDelay(100)
.typeString('Je m\'appelle Sheila, je suis développeuse web !')
.pauseFor(1200)
.changeDelay(50)
.typeString(' <br>Venez me découvrir ...')
.pauseFor(1500)

export default Presentation