class Api {
    constructor(url) {
        this.url = url
    }

    async getRequest() {
        try {
            const request = await fetch(this.url)
            if (request.ok) {
                const data = await request.json()
                return data
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    async postRequest(body) {
        try {
            const response = await fetch(this.url,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            )
            if (response.ok) {
                const data = await response.json()
                return data
            }

        }
        catch (error) {
            console.log(error)
        }
    }
}