// import path from "path"
// import fs from "fs/promises"
// export async function getProductById(id) {

//     const filePath = path.join(process.cwd(), 'data', 'dummy-data.json');
//     const jsonData = await fs.readFile(filePath);
//     const data = JSON.parse(jsonData);
//     const { products } = data;

//     return products.filter((product) => product.id === id);
// }
export async function getAllEvents() {
    const response = await fetch("https://clienside-factching-data-default-rtdb.firebaseio.com/events.json");
    const data = await response.json();
    const transformedData = [];
    for (const key of Object.values(data)) {
        transformedData.push(key);
    }
    return transformedData;
}
export async function getFeaturedEvents() {
    const events = await getAllEvents();
    return events.filter((event) => event.isFeatured);

}
export async function getEventById(id) {
    const events = await getAllEvents();
    return events.find((event) => event.id === id);
}
export async function getFilteredEvents(year, month) {
    const events = await getAllEvents();
    const filteredEvents = [];
    // return await events.filter((event) =>  event.date.getFullYear()===year);
    // const eventDate = new Date(event.date);
    // console.log(eventDate);
    // const eventYear = eventDate.getFullYear();
    // const eventMonth = eventDate.getMonth();
    // return eventYear === year && eventMonth === month;
    for (const key of events) {
        const date = new Date(key.date);
        const eventYear = date.getFullYear();
        console.log("file: helper.js ~ line 42 ~ getFilteredEvents ~ eventYear", eventYear);
        const eventMonth = date.getMonth()+1;
        console.log("file: helper.js ~ line 44 ~ getFilteredEvents ~ eventMonth", eventMonth);
        
        if (eventYear === year && eventMonth === month) {
            filteredEvents.push(key);
        }

    }

    return filteredEvents;
}