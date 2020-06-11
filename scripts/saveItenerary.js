saveItenerary = (newIteneraryObject) => {
        return fetch("http://localhost:8088/itineraries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newIteneraryObject)
        })
    }