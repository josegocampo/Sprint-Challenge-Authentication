exports.seed = async function(knex) {
	await knex("users").truncate()
	await knex("users").insert([
    {id: 1, username: 'jose', password: '12345'},
    {id: 2, username: 'cami', password: '67890'},
    {id: 3, username: 'azeroth', password: 'blood123'}
	])
}
