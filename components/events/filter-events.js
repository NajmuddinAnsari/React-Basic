import { useRef } from "react";

export default function FilterEvents(props) {
    const refYear = useRef();
    const refMonth = useRef();
    const formHandler = (event) => {
        event.preventDefault();
        const selectedyear = refYear.current.value;
        // console.log("file: filter-events.js ~ line 9 ~ formHandler ~ selectedyear", selectedyear);
        const selectedmonth = refMonth.current.value;
        // console.log("file: filter-events.js ~ line 10 ~ formHandler ~ selectedmonth", selectedmonth);

        props.onSubmitBtn(selectedyear, selectedmonth);

    }
    return (
        <form onSubmit={formHandler}>
            <label htmlFor="year">Year</label>
            <select name="year" ref={refYear}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
            <label htmlFor="month" >Month</label>
            <select name="month" ref={refMonth}>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
            </select>
            <button type="submit">Filter</button>
        </form>
    );
}