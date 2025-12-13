import Image1 from "../../assets/project1.jpg";
import Image2 from "../../assets/chatty-app.png";
import Image4 from "../../assets/chatty-app.png";
import Image8 from "../../assets/advanced-auth.png";

const data = [
  {
    id: 1,
    category: "backend",
    image: Image8,
    title: "Advanced Authentication System (Backend)",
    desc: "This system secures the full user lifecycle using cryptographically signed, time-sensitive JWTs delivered via automated transactional emails. It enforces rigorous access control through immediate email verification and one-time password recovery links, while providing a transparent security audit trail via proactive account change alerts.",
    demo: "https://adavanced-authentication-system.onrender.com",
    pic: "Image4",
    github: "https://github.com/egattor",
  },   
  {
    id: 4,
    category: "fullstack",
    image: Image4,
    title: "Madangure Chatty App (Fullstack)",
    desc: "A full-stack chat platform engineered with React and Node.js that features live, zero-latency messaging using Socket.io. The application supports secure user login, multi-room channels, and database persistence with MongoDB, highlighting my ability to manage real-time data flow and complex state management.",
    demo: "https://madangure-chatt-app.onrender.com",
    github: "https://github.com/egattor",
  },
];

export default data;
