import { FormEvent, useRef } from 'react'

import Card from '../ui/card'
import classes from './new-meetup-form.module.css'
import { FunctionMeetupProps, Meetup } from '@/types/meetup'

function NewMeetupForm(props: FunctionMeetupProps) {
    const titleInputRef = useRef<HTMLInputElement>(null)
    const imageInputRef = useRef<HTMLInputElement>(null)
    const addressInputRef = useRef<HTMLInputElement>(null)
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null)

    function submitHandler(event: FormEvent) {
        event.preventDefault()

        const enteredTitle = titleInputRef?.current?.value
        const enteredImage = imageInputRef?.current?.value
        const enteredAddress = addressInputRef?.current?.value
        const enteredDescription = descriptionInputRef?.current?.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Título do Encontro</label>
                    <input
                        type="text"
                        required
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Imagem</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Endereço Postal</label>
                    <input
                        type="text"
                        required
                        id="address"
                        ref={addressInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        id="description"
                        required
                        rows={5}
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Adicionar Encontro</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
