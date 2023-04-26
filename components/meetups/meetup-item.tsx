import { Meetup } from '@/types/meetup'
import Card from '../ui/card'
import classes from './meetup-item.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

function MeetupItem(props: Meetup) {
    const router = useRouter()

    function showDetailsHandler() {
        router.push('/encontros/' + props.id)
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <Image
                        src={props.image}
                        alt={props.title}
                        width={400}
                        height={200}
                    />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailsHandler}>Ver Mais</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem
