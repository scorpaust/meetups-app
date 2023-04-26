import { Meetup } from '@/types/meetup'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classes from './meetup-detail.module.css'

type Props = {
    meetup: Meetup
}

export default function MeetupDetail(props: Props) {
    const router = useRouter()

    const { _id, image, title, address, description } = props.meetup

    return (
        <section className={classes.detail}>
            <Image src={image} alt={title} width={600} height={220} />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>
        </section>
    )
}
