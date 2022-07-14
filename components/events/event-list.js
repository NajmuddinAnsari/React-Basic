import Image from "next/image";
export default function EventList(props) {
    return (
        <div>
            {props.items.map((event) => (
                <div>
                    <li>{event.title}</li>
                    {/* <img src="images/img2.jpg" /> */}
                    {/* <img src={`${event.image}`} /> */}
                    <Image src={`/${event.image}`} alt="Image" width={399} height={300} />
                </div>
            ))}
        </div>
    );
}