// import API from "./Settings.js"


// get the value of the user Input to be used for api 
let parkData = [];
let userSearchParks;
let userState;
let parkNames = []

// the below function deals with collecting data from user inputs and 
// using that information to gather data from the NPS API


const myUserInputSearch = (API) => {


    document.querySelector(".parks__UserInputSearch").addEventListener("click", event => {
        /*
            Collect the user put by selecting the input fields, one
            at a time, and accessing the `value` property
        */
        const parksSearchString = document.querySelector("#parkSearch").value
        const parksState = document.querySelector("#parkState").value

        userSearchParks = parksSearchString;
        userState = parksState;

       

        const getLocationData = () => {
            return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userState}&q=${userSearchParks}&api_key=${API.npsKey}`).then(
                (httpResponse) => {
                    return httpResponse.json()
                }
            )
                .then(
                    (arrayOfNPS) => {
                        // 100 percent sure the data is back\
                        let localArrayofParks = []
                        localArrayofParks = arrayOfNPS.data
                        for (let park = 0; park < localArrayofParks.length; park++) {

                            // adding if statement that checks the state
                            
                                parkData.push(localArrayofParks[park])
                            // parkData.push(localArrayofParks[park].states)
                        }
                        console.log(parkData)
                        return parkData

                    }
                ).then((dataCollection) => {
                    clearDataConverter()
                    userInputParks();
                    myParkList(dataCollection);
                    parkData = [];
                    actionAddingPark(API);

                })

        }

         getLocationData()


    })


}














