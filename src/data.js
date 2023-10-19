import winterOne from "./images/winter-one.png";
import winterTwo from "./images/winter-two.png";
import winterThree from "./images/winter-three.png";
import winterFour from "./images/winter-four.png";

import springOne from "./images/spring-one.png";
import springTwo from "./images/spring-two.png";
import springThree from "./images/spring-three.png";
import springFour from "./images/spring-four.png";

import summerOne from "./images/summer-one.png";
import summerTwo from "./images/summer-two.png";
import summerThree from "./images/summer-three.png";
import summerFour from "./images/summer-four.png";

import autumnOne from "./images/autumn-one.png";
import autumnTwo from "./images/autumn-two.png";
import autumnThree from "./images/autumn-three.png";
import autumnFour from "./images/autumn-four.png";

import sliderOne from "./images/slider-one.png";
import sliderTwo from "./images/slider-two.png";
import sliderThree from "./images/slider-three.png";
import sliderFour from "./images/slider-four.png";
import sliderFive from "./images/slider-five.png";

const booksData = [
  [
    {
      id: 1,
      season: "winter",
      name: "The Book Eaters",
      writer: "Sunyi Dean",
      description:
        "An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.       ",
      image: winterOne,
    },
    {
      id: 2,
      season: "winter",
      name: "Cackle",
      writer: "Rachel Harrison",
      description:
        "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.",
      image: winterTwo,
    },
    {
      id: 3,
      season: "winter",
      name: "Dante: Poet of the Secular World",
      writer: "Erich Auerbach",
      description:
        "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",
      image: winterThree,
    },
    {
      id: 4,
      season: "winter",
      name: "The Last Queen",
      writer: "Clive Irving",
      description:
        "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.",
      image: winterFour,
    },
  ],
  [
    {
      id: 1,
      season: "spring",
      name: "The Body",
      writer: "Stephen King",
      description:
        "Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.",
      image: springOne,
    },
    {
      id: 2,
      season: "spring",
      name: "Carry: A Memoir of Survival on Stolen Land",
      writer: "Toni Jenson",
      description:
        "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
      image: springTwo,
    },
    {
      id: 3,
      season: "spring",
      name: "Days of Distraction",
      writer: "Alexandra Chang",
      description:
        "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.",
      image: springThree,
    },
    {
      id: 4,
      season: "spring",
      name: "Dominicana",
      writer: "Angie Cruz",
      description:
        "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.",
      image: springFour,
    },
  ],
  [
    {
      id: 1,
      season: "summer",
      name: "Crude: A Memoir",
      writer: "Pablo Fajardo & Sophie Tardy-Joubert",
      description:
        "Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people",
      image: summerOne,
    },
    {
      id: 2,
      season: "summer",
      name: "Let My People Go Surfing",
      writer: "Yvon Chouinard",
      description:
        "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.",
      image: summerTwo,
    },
    {
      id: 3,
      season: "summer",
      name: "The Octopus Museum: Poems",
      writer: "Brenda Shaughnessy",
      description:
        "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.",
      image: summerThree,
    },
    {
      id: 4,
      season: "summer",
      name: "Shark Dialogues: A Novel",
      writer: "Kiana Davenport",
      description:
        "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.",
      image: summerFour,
    },
  ],
  [
    {
      id: 1,
      season: "autumn",
      name: "Casual Conversation",
      writer: "Renia White",
      description:
        "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. ",
      image: autumnOne,
    },
    {
      id: 2,
      season: "autumn",
      name: "The Great Fire",
      writer: "Lou Ureneck",
      description:
        "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide",
      image: autumnTwo,
    },
    {
      id: 3,
      season: "autumn",
      name: "Rickey: The Life and Legend",
      writer: "Howard Bryant",
      description:
        "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?",
      image: autumnThree,
    },
    {
      id: 4,
      season: "autumn",
      name: "Slug: And Other Stories",
      writer: "Megan Milks",
      description:
        "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.",
      image: autumnFour,
    },
  ],
];

const sliderData = [sliderOne, sliderTwo, sliderThree, sliderFour, sliderFive];

const drinkData = [
  { id: 1, product: "Cold Brew Coffee", price: 3 },
  { id: 2, product: "French Press Pot", price: 5 },
  { id: 3, product: "Espresso", price: 2 },
  { id: 4, product: "Cappuccino", price: 4 },
  { id: 5, product: "Hot tea", price: 2 },
  { id: 6, product: "Cold tea", price: 2 },
];

const eatData = [
  { id: 1, product: "Forest Gateau", price: 16 },
  { id: 2, product: "Blue Moon", price: 16 },
  { id: 3, product: "Truffle Cake", price: 15 },
  { id: 4, product: "Chocolate Cake", price: 18 },
  { id: 5, product: "Poet’s Dream Cake", price: 16 },
  { id: 6, product: "Pineapple Cake", price: 14 },
];

const phoneData = [
  {
    id: 1,
    text: "Please call",
    link: "tel:+6177302370",
    number: "(617) 730-2370",
  },
  {
    id: 2,
    text: "For TTY service, please call",
    link: "tel:+6177302370",
    number: "(617) 730-2370",
  },
  {
    id: 3,
    text: "Putterham Library:",
    link: "tel:+6177302385",
    number: "(617) 730-2385",
  },
];

export { booksData, sliderData, drinkData, eatData, phoneData };
