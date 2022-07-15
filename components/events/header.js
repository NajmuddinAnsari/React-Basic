import Link from "next/link";

export default function Header(props) {
    return (
        <>
            <header>
                {/* <Link href={'/'} ></Link>
                <Link href={'/events'} >Browse all Events</Link> */}
                <Link href="/">
                    <a style={{ color: 'blue', fontSize: '50px', marginLeft: '10px' }} >featured Events</a>
                </Link>
                <Link href="/events">
                    <a style={{ color: 'blue', fontSize: '50px', marginLeft: '100px' }}>Browse Events</a>
                </Link>
            </header>
            <main>
                {props.children}
            </main>
        </>
    )
}