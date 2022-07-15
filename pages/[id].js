import Image from "next/image";
import { getEventById } from "../dummy-data";
export default function eventDetails(props) {
    const event = props.event;


    return (
        <div>

            <h1>{event.title}</h1>
            <h1>{event.description}</h1>
            <Image src={`/${event.image}`} alt={event.id} height={event.height} width={event.width} />

        </div>

    );
}
export async function getStaticProps(context) {
    const { params } = context;
    const eventId = params.id;
    const event = getEventById(eventId);


    return {
        props: {
            event: event
        },

    }
}
export async function getStaticPaths() {
    return {
        paths: [{ params: { id: "e1" } }],
        fallback: true
    }
}