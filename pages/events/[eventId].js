import { getEventById } from "../../dummy-data";

export default function eventDetails(props) {
    return (
        <div>
            <h1>{props.event.title}</h1>
        </div>
    )
}
export async function getServerSideProps(context) {
    const { params } = context;
    const eventId = params.eventId;
    const event = await getEventById(eventId);

    return {
        props: {
            event:event
        }
    }
}