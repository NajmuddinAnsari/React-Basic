import { useRef } from "react";
export default function FilterEvents(props) {
    const refYear = useRef();
    const refMonth = useRef();
    const formHandler = (event) => {
        event.preventDefault();
        const selectedYear = +refYear.current.value;
        const selectedMonth = +refMonth.current.value;
        props.onSubmitForm(selectedYear, selectedMonth);

    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <label htmlFor="Year">Year</label>
                <select name="Year" ref={refYear} >
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
                <label htmlFor="month">Month</label>
                <select name="month" ref={refMonth}>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Jun</option>
                </select>
                <button>Filter</button>
            </form>
        </div>
    )
}