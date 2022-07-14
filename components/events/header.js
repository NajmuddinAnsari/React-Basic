import Link from "next/link";

export default function Header(props) {
    return (
        <>
            <header>
                <Link href={'/hello'} >featured Events</Link>
                <Link href={'/events'} >Browse all Events</Link>
            </header>
            <main>
                {props.children}
            </main>
        </>
    )
}