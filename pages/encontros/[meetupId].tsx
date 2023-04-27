import MeetupDetail from '@/components/meetups/meetup-detail'
import { GetStaticPropsContext } from 'next'
import { Condition, FindOptions, MongoClient, ObjectId, WithId } from 'mongodb'
import { Meetup } from '@/types/meetup'
import Head from 'next/head'

type Props = {
    meetupData: Meetup
}

export default function MeetupDetails(props: Props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name="description"
                    content={props.meetupData.description}
                ></meta>
            </Head>
            <MeetupDetail meetup={props.meetupData} />
        </>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(`${process.env.DB_URL}`)

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = (await meetupsCollection
        .find({}, {
            _id: 1,
        } as FindOptions<Document>)
        .toArray()) as WithId<Document>[]

    client.close()

    return {
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const meetupId = context.params?.meetupId

    const client = await MongoClient.connect(`${process.env.DB_URL}`)

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const selectedMeetup = (await meetupsCollection.findOne({
        _id: new ObjectId(meetupId?.toString()),
    } as Condition<ObjectId>)) as Meetup

    client.close()

    return {
        props: {
            meetupData: {
                _id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            },
        },
    }
}
