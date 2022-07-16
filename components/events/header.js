import Link from "next/link";

export default function Header(props) {

    return (
        <div>
            <header>
                <Link href={`/`}>
                    <a style={{
                        color: 'blue', marginLeft: '20px', fontSize: '30px'
                    }}>Featured Events</a>
                </Link>
                <Link href={`/events`}>
                    <a style={{
                        color: 'blue', marginLeft: '50px', fontSize: '30px'
                    }}>Browse all events</a>
                </Link>
            </header>
            <main>{props.children}</main>
        </div>
    )
}