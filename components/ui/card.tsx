import { ChildrenProps } from '@/types/next_defaults'
import classes from './card.module.css'

function Card(props: ChildrenProps) {
    return <div className={classes.card}>{props.children}</div>
}

export default Card
