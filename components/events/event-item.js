import Link from "next/link";

export default function EventItem(props) {
    return (
        <div>
            <h1>{props.title} <span>{props.date}</span></h1>
            <button>
                <Link href={`/${props.id}`}>Explore</Link></button>



        </div>

    )
}