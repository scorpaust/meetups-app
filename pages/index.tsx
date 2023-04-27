import Head from 'next/head'
import { Fira_Sans } from 'next/font/google'
import MeetupList from '@/components/meetups/meetup-list'
import Layout from '@/components/layout/layout'
import { useEffect, useState } from 'react'
import { Meetup, SimpleMeetupProps } from '@/types/meetup'
import { GetServerSidePropsContext } from 'next'
import { Document, MongoClient, WithId } from 'mongodb'

const firaSans = Fira_Sans({
    subsets: ['latin'],
    weight: '400',
})

export default function HomePage(props: SimpleMeetupProps) {
    return (
        <>
            <Head>
                <title>Aplicação de Encontros</title>
                <meta
                    name="description"
                    content="Lista de encontros para consulta"
                ></meta>
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

/* export async function getServerSideProps(context: GetServerSidePropsContext) {
    const req = context.req

    const res = context.res

    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
    }
} */

export async function getStaticProps() {
    const client = await MongoClient.connect(`${process.env.DB_URL}`)

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetupList = (await meetupsCollection.find().toArray()) as Meetup[]

    client.close()

    return {
        props: {
            meetups: meetupList.map((meetup: Meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                _id: meetup._id.toString(),
            })),
        },
    }
}
