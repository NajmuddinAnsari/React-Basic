import Image from "next/image";
import EventItem from "./event-item";
export default function EventList(props) {
    return (
        <div>
            {props.items.map((event) => (
                <EventItem title={event.title} image={event.image} id={event.id} />
            ))}
        </div>
    );
}