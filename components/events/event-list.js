import EventItem from "./event-item";

export default function EventList(props) {
    return (
        <div>
            {props.items.map((event) => (
                <EventItem key={event.id}
                    id={event.id}
                    date={event.date}
                    title={event.title}
                    image={event.image}
                />
            ))}
        </div>
    );
}