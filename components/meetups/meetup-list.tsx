import { Meetup, SimpleMeetupProps } from '@/types/meetup'
import MeetupItem from './meetup-item'
import classes from './meetup-list.module.css'

function MeetupList(props: SimpleMeetupProps) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />
            ))}
        </ul>
    )
}

export default MeetupList
