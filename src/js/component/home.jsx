import React from "react";

//include images into your bundle
import { Cards } from "./card.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Navbar } from "./navbar.jsx";
import {Footer} from "./footer.jsx";

//create your first component
const cardArray = [
  {
    title: "Bee",
    image:
      "https://i0.wp.com/www.honeybeesuite.com/wp-content/uploads/2011/03/David-Cappaert-3.jpg?fit=810%2C665&ssl=1",
    buttontext: "Wiki",
    text: "Bees are winged insects closely related to wasps and ants, known for their roles in pollination and, in the case of the best-known bee species, the western honey bee, for producing honey.",
	link: "https://en.wikipedia.org/wiki/Bee"
  },
  {
	title: "Bts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPzinoHua7C7x_ePiJGGucRmWPG7EAINpqQ&usqp=CAU",
    buttontext: "Wiki",
    text: "is a South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook, who co-write and co-produce the majority of their material",
	link: "https://en.wikipedia.org/wiki/BTS"
  },
  {
	title: "Vikings:Valhalla",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaT6_kHXBuPlCkMQgHajMnfE9TZz5CIhUrg&usqp=CAU",
    buttontext: "Wiki",
    text: "is a historical drama streaming television series created by Jeb Stuart for Netflix. It is a sequel to History's Vikings, filmed in County Wicklow, Ireland. Set one hundred years after the events of Vikings, the series chronicles the beginning of the end of the Viking Age, marked by the Battle of Stamford Bridge in 1066.",
	link: "https://en.wikipedia.org/wiki/Vikings:_Valhalla"
  },
  {
	title: "Bridgerton",
    image: "https://th.bing.com/th/id/OIP.y6OCUjpvf-vviC9Ce0HtWAHaDt?w=326&h=175&c=7&r=0&o=5&pid=1.7",
    buttontext: "Wiki",
    text: "is an American historical fiction-romance streaming television series created by Chris Van Dusen for Netflix. Based on the book series by Julia Quinn, it is Shondaland's first scripted show for Netflix. It revolves around the eponymous Bridgerton family and is set in the competitive world of Regency era London's ton during the social season where marriageable youth of nobility and gentry are launched into society",
	link: "https://en.wikipedia.org/wiki/Bridgerton"
  },
];

const Home = () => {
  return (
	<><></><Navbar />
	<Jumbotron/>
	<div className="text-center">
		  <div className="container">
			  <div className="row">
				  {cardArray.map((element, index) => {
					  return (

						  <div className="col-3" key={index}>
							  <Cards
								  title={element.title}
								  image={element.image}
								  buttontext={element.buttontext}
								  text={element.text}
								  link={element.link} />
						  </div>
					  );
				  })}
			  </div>
		  </div>
	  </div>
	  <Footer/>
	  </>
  );
};

export default Home;
