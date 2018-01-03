//currency converter  from USD to INR 
//23 USD is Worth __ INR . You can Spend these  in the following countries.
const axios = require('axios');



// const getExchangeRate = (from,to)=>{
//    return axios.get(`http://api.fixer.io/latest?base=${from}`)
//     .then((response)=>{
//         return response.data.rates[to];
//     });
// };

//using Aysnc Await function
const getExchangeRateAlt = async (from,to)=>{
    try{
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
       const rate =  response.data.rates[to];
        if(rate){
            return rate;
        }else{
            throw new Error();
        }
    }catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}`)
    }
 
};

// const getCountries = (currencyCode)=>{
//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
//     .then((response)=>{
//         return response.data.map((country)=>country.name);
//     })
// }

//using Aysnc Await function
const getCountriesAlt =  async (currencyCode)=>{
    try{
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country)=>country.name);
    }catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`)
    }

   
}


// const convertCurrency = (from,to,amount)=>{
// return getCountries(to).then((countries)=>{
//      return getExchangeRate(from,to).then((rate)=>{
//         const exchangeAmount = amount * rate;
//         return `${amount} ${from} is worth ${exchangeAmount} ${to}.${to} currency can be in the Following countries: ${countries} `;
//      });
// });
// };

//Using Async await function
const convertCurrencyAlt = async (from,to,amount)=>{
    const countries = await getCountriesAlt(to);
    const rate = await getExchangeRateAlt(from,to);
    const exchangeAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangeAmount} ${to}.
            ${to} currency can be in the Following countries: ${countries} `;
}



// getExchangeRate('USD','INR').then((rate)=>{
//     console.log(rate)
// })
// .catch((e)=>{
//     console.log(e);
// })

// getCountries('usd')
// .then((countries)=>{
//     let count = countries.length;
// console.log(countries,count);
// })
// .catch((e)=>{
//     console.log(e);
// })

convertCurrencyAlt('USD','INR',1).then((rate)=>{
    console.log(rate);
}).catch((e)=>{
    console.log(e.message);
})