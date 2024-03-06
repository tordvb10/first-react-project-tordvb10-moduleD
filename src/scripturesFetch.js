import content from "../verses.json" assert {type: "json"}
export default async function scripturesFetch() {
    const errorArray = []
    const endpoint = `bibles`
    const url = `https://api.scripture.api.bible/v1/${endpoint}`
    const option = {
        method: "GET",
        headers: {
            "api-key": '3af8b89d0b868bd0d3a19e92c6ae82bd',//process.env.API_KEY,
            "accept": "application/json"
        }
    }
    let input = `/${content.bibleId}/verses/${content.verseId[Math.floor(Math.random()*content.verseId.length)]}`
    try{
        const response = await fetch(url+input, option)
        if (response.ok !== true) {
            return;
        }
        const data = await response.json()
        return data
    } catch (error){
        errorArray.push(error)
        console.log("Error fetching from api", error)
    }
}