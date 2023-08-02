import tour_img1 from "./images/tour-1.jpeg";
import tour_img2 from "./images/tour-2.jpeg";
import tour_img3 from "./images/tour-3.jpeg";
import tour_img4 from "./images/tour-4.jpeg";
const Lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const servicesData = [
  { id: 1, icon: "fas fa-wallet fa-fw", title: "saving money", text: Lorem },
  { id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking", text: Lorem },
  { id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort", text: Lorem },
];

export const toursData = [
  {
    id: 1,
    title: "Tibet Adventure",
    img: tour_img1,
    text: Lorem,
    place: "china",
    date: "august 26th, 2020",
    interval: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    title: "best of Java",
    img: tour_img2,
    text: Lorem,
    place: "indonesia",
    date: "october 1th, 2020",
    interval: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    title: "explore hong kong",
    img: tour_img3,
    text: Lorem,
    place: "hong kong",
    date: "september 15th, 2020",
    interval: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    title: "kenya highlights",
    img: tour_img4,
    text: Lorem,
    place: "kenya",
    date: "december 5th, 2019",
    interval: "20 days",
    price: "from $3300",
  },
];
