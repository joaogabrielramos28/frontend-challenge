import axios from 'axios'

const apiRestCountries = axios.create({
    baseURL:"https://restcountries.com/v2/"
})

const apiLocal = axios.create({
    baseURL:"http://localhost:3333/"
})


export{ apiRestCountries,apiLocal }