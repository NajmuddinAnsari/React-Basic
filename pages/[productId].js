import { getEventById } from "../helper";

export default function productDetails(props) {
    console.log(props.product);
    return (
        <div>
            <h1>{props.event.title}</h1>
        </div>
    );
}
export async function getServerSideProps(context) {
    const { params } = context;
    const productId = params.productId;
    const data = await getEventById(productId);
    console.log(data);
    return {
        props: {
            event: data
        }

    };
}