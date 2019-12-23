import React from 'react';
import './components.css';
import match_goal from '../img/match_goal_iphone.png'
import burger_queen from '../img/burger_queen_web.png'
import cipher from '../img/cipher_web.png'
import battleship from '../img/battleship_web.png'
import moodie from '../img/moodie_tablet.png'
import wikipokemon from '../img/wikipokemon_tablet.png'

export default class Experience extends React.Component {
    render() {
        //TO DO: Connect projects with links - Add modal to show project info's
        return (
            <div className="section_projects">
                <div className="container_projects">
                    <a className="link_burger">
                        <div className="project burger_queen">
                            <img className="img_burger" alt="Proyecto" src={burger_queen}/>
                        </div>
                    </a>
                    <a className="link_moodie">
                        <div className="project moodie">
                            <img className="img_moodie" alt="Proyecto" src={moodie}/>
                        </div>
                    </a>
                    <a className="link_wikipokemon">
                        <div className="project wikipokemon">
                            <img className="img_wikipokemon" alt="Proyecto" src={wikipokemon}/>
                        </div>
                    </a>
                    <a className="link_battleship">
                        <div className="project battleship">
                            <img className="img_battleship" alt="Proyecto" src={battleship}/>
                        </div>
                    </a>
                    <a className="link_match">
                        <div className="project match_goal">
                            <img className="img_match" alt="Proyecto" src={match_goal}/>
                        </div>
                    </a>
                    <a className="link_cipher">
                        <div className="project cipher">
                            <img className="img_cipher" alt="Proyecto" src={cipher}/>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}