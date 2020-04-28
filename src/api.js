
const DATA_API_END_POINT = "https://api.covid19api.com/summary";

export default function fetchData(){
    return fetch(DATA_API_END_POINT).then(r => r.json())
}