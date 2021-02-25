const apiKey = "VoyMtUR5a3aeKmGKj01JptIltKYBlN0D" //poner las comillas
fetch(`https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => {
        const arrayTerms = response.data.slice(0,5)
        console.log(arrayTerms.join(", "))
        const paragraph = document.querySelector('.search--trending-recomend')
        paragraph.textContent = arrayTerms.join(", ")
    })