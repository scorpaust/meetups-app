import { ObjectId } from 'mongodb'

export type Meetup = {
    _id: ObjectId
    image: string
    title: string
    address: string
    description: string
}

export type SimpleMeetupProps = {
    meetups: Meetup[]
}

export type FunctionMeetupProps = {
    onAddMeetup: Function
}
