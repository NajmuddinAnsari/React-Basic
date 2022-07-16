import Link from "next/link";
import Image from "next/image";
export default function EventItem(props) {

    return (
        <div>
            <li>{props.title}</li>
            <Image src={`/${props.image}`} alt="Image" width={399} height={300} />
            <button><Link href={props.id}>Explore</Link></button>
        </div>
    )
}

