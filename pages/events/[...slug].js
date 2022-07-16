import { getFilteredEvents } from "../../helper";
import EventList from "../../components/events/event-list";
export default function filteredEvents(props) {
    if (props.events.length === 0) {
        return (
            <h2>we dont have any events on this date</h2>
        );
    }
    return (
        <div>
            <EventList items={props.events} />
        </div>
    );
}
export async function getServerSideProps(context) {
    const { params } = context;
    const paths = params.slug;
    const year = + paths[0];
    const month = + paths[1];
    const data = await getFilteredEvents(year, month);
    return {
        props:
        {
            events: data
        }
    }
}