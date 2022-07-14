import { getAllEvents } from "../../dummy-data";
export default function (props) {
    const events = getAllEvents();

    const date = events.map((event) => event.date)
    console.log(date)

    return (
        <div>
            {events.map((event) => (
                <li>
                    <span style={{ margin: '4px' }}>{event.title}</span>
                    <span style={{ margin: '4px' }}>{event.date}</span>
                </li>
            ))}
        </div>
    );
}