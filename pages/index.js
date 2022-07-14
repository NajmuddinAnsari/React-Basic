import { Fragment } from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
export default function (props) {
  console.log(props.events);
  return (
    <Fragment>
      <EventList items={props.events} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    }
  }
}