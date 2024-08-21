function fetchAllEvents(page = 1, perPage = 10) {
    const url = "https://cms-api.dorik.com/api/v1/collections/66c33c5a421f9b0012162975/items?page=1&perPage=10";
    const headers = {
        "X-Dorik-Key": "d70f76469758123570b23f1c5fdb16a332c4102ad68b691f7634107e57749108",
        "content-type": "application/json"
    };

    console.log("Hello");

    fetch(url, {
        method: 'GET',
        headers: headers,
        mode: 'no-cors'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the server responds with JSON
    })
    .then(data => {
        console.log(data);
        // allEvents = allEvents.concat(data.items || []);
        // if (data.items && data.items.length === perPage) {
        //     fetchAllEvents(page + 1, perPage); // Continue fetching until all pages are retrieved
        // } else {
        //     events = allEvents;
        //     renderCalendar(); // Render the calendar with all events
        // }
    })
    .catch(error => console.error('Error fetching events:', error));

}

fetchAllEvents()