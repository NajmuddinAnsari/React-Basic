// import EventList from "../../components/events/event-list";
// import FilterEvents from "../../components/events/filter-events";
// import { getAllEvents } from "../../dummy-data";
// import { useRouter } from "next/router";
// export default function allEvents(props) {

//     const filterEvents = (year, month) => {
//         router.push(`/${year}/${month}`);
//     }
//     return (
//         <div>
//             <FilterEvents onSubmit={filterEvents} />
//             <EventList items={events} />
//         </div>
//     );
// }
// export async function getStaticProps() {
//     return {
//         props: {
//             events: "najmuddin"
//         }
//     };
// }

import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import FilterEvents from "../../components/events/filter-events";
import { getAllEvents } from "../../dummy-data";
export default function allEvents(props) {
    const router = useRouter();
    const filterEvents = (year, month) => {
        router.push(`/events/${year}/${month}`);

    }
    return (
        <Fragment>
            <FilterEvents onSubmitBtn={filterEvents} />
            <EventList items={props.events} />


        </Fragment>
    )
}
export async function getStaticProps(props) {
    return {
        props: {
            events: await getAllEvents(props)
        }
    }
}
