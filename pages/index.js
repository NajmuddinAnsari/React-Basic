import { getFeaturedEvents } from "../helper";
import EventList from "../components/events/event-list";

export default function homePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps() {

  const data = await getFeaturedEvents();
  return {
    props: {
      events: data
    }
  };
}