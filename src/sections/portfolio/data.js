import Image4 from "../../assets/chatty-app.png";
import Image8 from "../../assets/AdvAuth.png";
import Image9 from "../../assets/NutriFit.png";

const data = [
  {
    id: 1,
    category: "backend",
    image: Image8,
    title: "Advanced Security, Identity & Authentication System (Backend)",
    desc: "This system secures the full user lifecycle using cryptographically signed, time-sensitive JWTs delivered via automated transactional emails. It enforces rigorous access control through immediate email verification and one-time password recovery links, while providing a transparent security audit trail via proactive account change alerts.",
    demo: "https://adavanced-authentication-system.onrender.com",
    pic: "Image4",
    github: "https://github.com/donald-madangure",
    design: "",
  },   
  {
    id: 2,
    category: "fullstack",
    image: Image4,
    title: "Real-time Chat Engine (MERN + WebSockets)",
    desc: "A full-stack chat platform engineered with React and Node.js that features live, zero-latency messaging using Socket.io. The application supports secure user login, multi-room channels, and database persistence with MongoDB, highlighting my ability to manage real-time data flow and complex state management.",
    demo: "https://madangure-chatt-app.onrender.com",
    pic: "Image4",
    github: "https://github.com/donald-madangure",
    design: "",
  },
  {
    id: 2,
    category: "fullstack",
    image: Image9,
    title: "AI Agentic Nutrition & Fitness Coach (Fullstack)",
    desc: "NutriFit AI is a voice-first platform that converts natural conversation into structured fitness and nutrition data. Built with Next.js, Convex, and Vapi, it uses a proprietary validation layer to ensure 100% schema compliance for every generated user plan. Securely powered by Clerk, the platform delivers actionable, real-time, validated insights via a reactive, low-latency UI.",
    demo: "https://nutrifit-ai-jade.vercel.app",
    pic: "Image9",
    github: "https://github.com/donald-madangure",
    design: "",
  },
];

export default data;
