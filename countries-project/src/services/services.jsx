export const getAllFlags = () => {
    const url = "https://restcountries.com/v3.1/all?fields=flags"

    return fetch(url)
    .then((response) => response.json())
    .then((response) => {
        const subArray1 = response.slice(0, 84);
        const subArray2 = response.slice(85, 167);
        const subArray3 = response.slice(168, 251);

        return [subArray1, subArray2, subArray3]
    })
    .catch((error) => console.log(error))

    
}

export const getAllCountries = () => {
    const url = "https://restcountries.com/v3.1/all?fields=name,altSpelling,cca2,area,borders,currencies,capital,coatOfArms,continents,independent,flag,population,region,subregion,flags,cca3,maps"

    return fetch(url)
    .then(response => {return response.json()})
}