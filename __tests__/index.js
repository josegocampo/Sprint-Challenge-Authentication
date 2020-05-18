const supertest = require('supertest')

const server = require('../index')

test("GET /", async () => {

    const endpoint = "/users"
    const status = 200

    const res = await supertest(server).get("/")
    
    expect(res.statusCode).toBe(status)
    expect(res.type).toBe("application/json")

})