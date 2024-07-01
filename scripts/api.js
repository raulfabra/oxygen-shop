class Api {
    constructor(url){
        this.url = url
    }

    async getRequest () {
        try{
            const request = await fetch(this.url)
            if (request.ok){
                const data = await request.json()
                return data
            }
        }
        catch(error){
            console.log(error)
        }
    }
}