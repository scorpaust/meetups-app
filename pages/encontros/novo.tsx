import NewMeetupForm from '@/components/meetups/new-meetup-form'
import { Meetup } from '@/types/meetup'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function NewMeetup() {
    const router = useRouter()

    async function addMeetupHandler(enteredMeetupData: Meetup) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = response.json()

        console.log(data)

        router.push('/')
    }

    return (
        <>
            <Head>
                <title>Adicionar Novo Encontro</title>
                <meta
                    name="description"
                    content="Adicionar Novo Encontro"
                ></meta>
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}
