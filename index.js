const quoteFetcher = () => {
    const url = "https://simpsons-quotes-api.herokuapp.com/quotes"
    axios.get(url)
        .then(response=>{
            return response.data
        })
        .then(simpson=>{
            const simpsonHtml = `
                <p><strong>${simpson[0].character}</strong></p> 
                <p><strong>${simpson[0].quote}</strong></p> 
                <img src='${simpson[0].image}' />
                
            `
            document.querySelector("#simpsonQuote").innerHTML = simpsonHtml
        })
}

quoteFetcher()


