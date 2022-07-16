import { useRouter } from "next/router"
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
export default function (props) {
    const str = 'najmuddin'
    console.log(props.events)
    if (props.events.length === 0) {
        return (
            <p>no events fount for the given time</p>
        );
    }
    return (
        <div>

            <EventList items={props.events} />
        </div>
    )
}
export async function getServerSideProps(context) {
    const { params } = context;
    const fullPaths = params.slug;
    const year = +fullPaths[0];
    const month = +fullPaths[1];

    const filteredEVents = getFilteredEvents(year, month);
    return {
        props: {
            events: filteredEVents
        }
    }
}