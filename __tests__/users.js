const supertest = require('supertest')
const server = require('../index')
const db = require('../database/dbConfig')
const restrict =  require('../auth/authenticate-middleware')
describe("users integration tests", () =>{
    it("GET /users", async () =>{
        const res = await supertest(server).get("/users")
        console.log(res.body)
        expect(res.type).toBe("application/json")
        expect(res.body).toHaveLength(7)
        expect(res.body[0].username).toBe("jose")


    })


})