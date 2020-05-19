const supertest = require('supertest')
const db = require('../database/dbConfig')
const server = require('../index')

beforeEach(async () =>{
    await db.seed.run()
})


it("GET the users", async () =>{

    const res = await supertest(server).get("/users")

    expect(res.body[0].username).toBe("jose")
    expect(res.satusCode).toBe(200)

})

it("REGISTER a new user", async () =>{
    const data = {username: "Damein", password: "0707"}
    const res = await supertest(server).post("/api/auth/register").send(data)

    expect(res.body.username).toBe("Damein")
    expect(res.statusCode).toBe(201)
})

it("LOGIN a new user", async () =>{
    const data = {username: "jose", password: "12345"}
    const res =  supertest(server).post("/api/auth/login").send(data)
    console.log(res)
    expect(res.body.username).toBe("jose")
    expect(res.statusCode).toBe(200)

})