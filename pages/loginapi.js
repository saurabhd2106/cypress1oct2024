const { restclient } = require("../cypress/support/restclient")

export class LoginApi {

    loginToApplication(email, password){

        let header = {
            "Content-Type": "application/json"
        }

        const payload = {
            "user": {
                "email": email,
                "password": password
            }
        }

       return restclient.sendPostRequest("/api/users/login", payload, header )

    }

}

export const loginapi = new LoginApi();