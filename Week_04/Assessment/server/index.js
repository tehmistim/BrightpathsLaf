const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

// let globalID = 20


// function myFortune() {
//   var x = document.getElementById("fortune");
//   x.querySelector("#fortune").innerHTML = "";
// }

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					              "Cool shirt!",
					              "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["to truly find yourself you should play hide and seek alone",
					            "if you said this out-loud, you are not illiterate",
					            "error 404, fortune not found",
                      "the fortune you seek is in another click",
					            "it could be better but this is good enough",
                      "no snowflake in an avalanche ever feels responsible",
					            "marriage lets you annoy one special person for the rest of your life",
					            "run",
					            "photoshop can make anything possible",
					            "borrow money from a pessimist, they won't expect it back",
					            "try the nightlife, people like to boogie",
					            "nobody can be exactly like you",
					            "never tease a midget with a high five",
					            "you are almost at the top & that means you have further to fall",
					            "ssoorrrryy,, dduupplleexx sswwiittcchh oonn"

  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/videos", (req, res) => {
	const data = ["https://youtu.be/f-PRMB1SsHM", 
				"https://youtu.be/DSLZRQ9RBlU", 
				"https://youtu.be/bbg95kEP85k", 
				"https://youtu.be/3E4yQxCCev4", 
				"https://youtu.be/iTdciT6QfJ4", 
				"https://youtu.be/WFnrNcg3DiM", 
				"https://youtu.be/35FriPVFftw", 
				"https://youtu.be/CBRwF0LU3Ys", 
				"https://youtu.be/WH6JBQlioX4" 
];

			res.status(200).send(data);
			
});

app.get("/api/coharts", (req, res) => {
	const data = [	"Mason Bryant",
					"Michael Bodin",
					"Immanuel Mamou",
					"Tamara Chance",
					"Adam Ray",
					"Christian Colson",
					"Beaux Delcambre",
					"Cameron Robinson",
					"Edrea Robinson",
					"Destiny Williams",
					"Jeffery Derbes",
					"Jagruti Depan",
					"Daravy Derouen",
					"Cody Dupuis",
					"Katie Griffith",
					"Carter Dooley",
					"Jerrell Prier",
					"Michael Fender",
					"Icarus Romero",
					"Natalie Jones",
					"James Proctor",
					"Emily Simpson",
					"Celena Rock",
					"Tim Washington",
					"Laurance Vincent",
					"Clayton Wilkerson",
					"Logan Willis",
					"Jerahmeel Wilson",
					"Logan Young",
	];
    res.status(200).send(data);
});

app.delete(`/api/coharts/:id`, (req, res) => {
	let index = charts.findIndex(elem => elem.id === +req.params.id)
	coharts.splice(index, 1)
	res.status(200).send(coharts)
});

app.post(`/api/coharts`,(req, res) => {
	let { title, rating, imageURL } = req.body
	let newCohart = {
		id: globalId,
			name,
			squad,
			imageURL
	}
	coharts.push(newCohart)
	res.status(200).send(cohart)
});

app.listen(4000, () => console.log("Server running on 4000"));