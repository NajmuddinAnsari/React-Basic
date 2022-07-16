import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import FilterEvents from "../../components/events/filter-events";
import { getAllEvents } from "../../helper";

export default function allEvents(props) {
    const router = useRouter();
    const filterEvents = (year, month) => {
        router.push(`/events/${year}/${month}`);
    }
    return (
        <div>
            <FilterEvents onSubmitForm={ filterEvents} />
            <EventList items={props.events} />
        </div>
    );
}
export async function getStaticProps() {
    const data = await getAllEvents();
    return {
        props:
        {
            events: data
        }
    };
}