import { Children } from 'react'
import Button from '../Button'
import {Card} from '../Interface/interface'
import './style.css'

export default function Card(props: Card) {
    return (
        <div className='Card'>
            <img src={props.imgSrc} alt={props.alternativeText} />
            <div>
                <h2>{props.titleH2}</h2>
                <p>{props.paragrafo}</p>
            </div>
        </div>
    )
}