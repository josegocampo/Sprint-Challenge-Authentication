const supertest = require('supertest')

const server = require('../index')

it("POST a new user", async () =>{
    const data = {username: "Damein", password: "0707"}
    const res = await supertest(server).post("/api/auth/register").send(data)

    expect(res.body.username).toBe("Damein")

})