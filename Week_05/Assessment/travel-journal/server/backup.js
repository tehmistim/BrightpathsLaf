getCountries: (req, res) => {
    sequelize.query(`SELECT * FROM countries`)
        .then((dbRes) => res.status(200).send(dbRes[0]))
        .catch((err) => console.log(err));
},

createCity: (req, res) => {
    const {name, rating, countryId} = req.body
    sequelize
        .query(`INSERT into cities (name, rating, country_id`)
        values ('${name}', '${rating}', '${countryId}')returning *;
        )
        .then((dbRes) => res.status(200).send(dbRes[0]))

        .catch((err) => console.log(err));
},

getCities: (req, res) => {
sequelize
    .query(
        
SELECT
cit.city_id, cit.name city, cit.rating,
count.country_id, count.name country  
FROM cities cit
JOIN countries count
        on cit.country_id = count.country_id;

    )
    .then((dbRes) => res.status(200).send(dbRes[0]))
    .catch((err) => console.log(err));
},

deleteCity: (req, res) => {
const city_id = req.params.id;
sequelize
    .query(
        DELETE FROM CITIES where city_id = ${city_id}
     )
    .then((dbRes) => res.status(200).send(dbRes[0]))
    .catch((err) => console.log(err));
}
