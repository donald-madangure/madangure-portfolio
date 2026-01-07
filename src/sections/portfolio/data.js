import Image4 from "../../assets/chatty-app.png";
import Image8 from "../../assets/AdvAuth.png";
import Image9 from "../../assets/NutriFit.png";

const data = [
  {
    id: 1,
    category: "backend",
    image: Image8,
    title: "Advanced Authentication System (Backend)",
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
    title: "Madangure Chatty App (Fullstack)",
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
    desc: "NutriFit AI is a voice-first health platform designed to transform unstructured natural conversation into structured, validated fitness data. Built on a modern stack of Next.js and Convex, the platform features a proprietary validation layer that converts Vapi voice streams into 100% schema-compliant workout and nutrition plans. By leveraging Clerk for secure identity management and Convex’s reactive database, NutriFit AI ensures that every insight is processed securely and delivered to the UI with real-time latency.",
    demo: "https://nutrifit-ai-jade.vercel.app",
    pic: "Image9",
    github: "https://github.com/donald-madangure",
    design: "",
  },
];

export default data;
