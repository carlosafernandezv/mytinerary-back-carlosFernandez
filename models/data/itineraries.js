import "dotenv/config.js"
import "../../config/database.js"
import Itinerary from "../Itinerary.js"


let itineraries = [
    {
        title: "Día Cultural",
        description: "Explora los monumentos más icónicos de París.",
        createdBy: {
            name: "Alice",
            profilePhotoUrl: "https://example.com/alice.jpg"
        },
        price: 3,
        durationHours: 8,
        likes: 0,
        hashtags: ["#Cultura", "#Historia", "#Arte"]
    },
    {
        title: "Gastronomía Francesa",
        description: "Disfruta de la exquisita comida francesa.",
        createdBy: {
            name: "Bob",
            profilePhotoUrl: "https://example.com/bob.jpg"
        },
        price: 4,
        durationHours: 6,
        likes: 0,
        hashtags: ["#Gastronomía", "#Francia", "#Comida"]
    },
    {
        title: "Manhattan en un Día",
        description: "Visita los puntos más emblemáticos de Manhattan.",
        createdBy: {
            name: "Charlie",
            profilePhotoUrl: "https://example.com/charlie.jpg"
        },
        price: 4,
        durationHours: 10,
        likes: 0,
        hashtags: ["#NYC", "#Manhattan", "#Turismo"]
    },
    {
        title: "Sabores de Nueva York",
        description: "Un recorrido por la mejor comida callejera de la ciudad.",
        createdBy: {
            name: "Diana",
            profilePhotoUrl: "https://example.com/diana.jpg"
        },
        price: 2,
        durationHours: 4,
        likes: 0,
        hashtags: ["#Comida", "#Callejera", "#NYCEats"]
    },
    {
        title: "Moderno y Tradicional",
        description: "Descubre la mezcla de modernidad y tradición en Tokio.",
        createdBy: {
            name: "Eve",
            profilePhotoUrl: "https://example.com/eve.jpg"
        },
        price: 3,
        durationHours: 8,
        likes: 0,
        hashtags: ["#Tokio", "#Tradición", "#Cultura"]
    },
    {
        title: "Ruta Gastronómica",
        description: "Saborea los platos típicos japoneses.",
        createdBy: {
            name: "Frank",
            profilePhotoUrl: "https://example.com/frank.jpg"
        },
        price: 3,
        durationHours: 5,
        likes: 0,
        hashtags: ["#Gastronomía", "#Japón", "#Sushi"]
    },
    {
        title: "Tech Tour",
        description: "Explora la tecnología avanzada de Tokio.",
        createdBy: {
            name: "Grace",
            profilePhotoUrl: "https://example.com/grace.jpg"
        },
        price: 4,
        durationHours: 6,
        likes: 0,
        hashtags: ["#Tecnología", "#Innovación", "#Tech"]
    },
    {
        title: "Aventura Carioca",
        description: "Vive la emoción y belleza de Río de Janeiro.",
        createdBy: {
            name: "Hank",
            profilePhotoUrl: "https://example.com/hank.jpg"
        },
        price: 3,
        durationHours: 9,
        likes: 0,
        hashtags: ["#Aventura", "#Brasil", "#Río"]
    },
    {
        title: "Relax en la Playa",
        description: "Disfruta de un día relajado en las famosas playas de Río.",
        createdBy: {
            name: "Ivy",
            profilePhotoUrl: "https://example.com/ivy.jpg"
        },
        price: 2,
        durationHours: 7,
        likes: 0,
        hashtags: ["#Playa", "#Río", "#Sol"]
    },
    {
        title: "Sydney Cultural",
        description: "Un recorrido por los principales puntos culturales de Sídney.",
        createdBy: {
            name: "Jack",
            profilePhotoUrl: "https://example.com/jack.jpg"
        },
        price: 4,
        durationHours: 8,
        likes: 0,
        hashtags: ["#Cultura", "#Australia", "#Sydney"]
    },
    {
        title: "Playa y Surf",
        description: "Día de playa y surf en Bondi Beach.",
        createdBy: {
            name: "Karen",
            profilePhotoUrl: "https://example.com/karen.jpg"
        },
        price: 3,
        durationHours: 6,
        likes: 0,
        hashtags: ["#Surf", "#Bondi", "#Playa"]
    },
    {
        title: "Cima de la Montaña",
        description: "Explora la Montaña de la Mesa y sus alrededores.",
        createdBy: {
            name: "Leo",
            profilePhotoUrl: "https://example.com/leo.jpg"
        },
        price: 3,
        durationHours: 8,
        likes: 0,
        hashtags: ["#Montaña", "#Naturaleza", "#Aventura"]
    },
    {
        title: "Ruta del Vino",
        description: "Tour por las mejores bodegas de Ciudad del Cabo.",
        createdBy: {
            name: "Mia",
            profilePhotoUrl: "https://example.com/mia.jpg"
        },
        price: 4,
        durationHours: 7,
        likes: 0,
        hashtags: ["#Vino", "#Sudáfrica", "#Bodegas"]
    },
    {
        title: "Historia Viva",
        description: "Descubre los tesoros históricos de Roma.",
        createdBy: {
            name: "Nina",
            profilePhotoUrl: "https://example.com/nina.jpg"
        },
        price: 4,
        durationHours: 9,
        likes: 0,
        hashtags: ["#Historia", "#Roma", "#Arte"]
    },
    {
        title: "Gastronomía Italiana",
        description: "Saborea los mejores platos italianos.",
        createdBy: {
            name: "Oscar",
            profilePhotoUrl: "https://example.com/oscar.jpg"
        },
        price: 3,
        durationHours: 6,
        likes: 0,
        hashtags: ["#Comida", "#Italia", "#Pasta"]
    },
    {
        title: "Roma Nocturna",
        description: "Disfruta de la vida nocturna de Roma.",
        createdBy: {
            name: "Paul",
            profilePhotoUrl: "https://example.com/paul.jpg"
        },
        price: 4,
        durationHours: 5,
        likes: 0,
        hashtags: ["#Nocturna", "#Diversión", "#Roma"]
    },
    {
        title: "Lujo y Modernidad",
        description: "Explora la opulencia y modernidad de Dubái.",
        createdBy: {
            name: "Quincy",
            profilePhotoUrl: "https://example.com/quincy.jpg"
        },
        price: 5,
        durationHours: 10,
        likes: 0,
        hashtags: ["#Lujo", "#Modernidad", "#Dubái"]
    },
    {
        title: "Safari en el Desierto",
        description: "Aventura de un día en el desierto de Dubái.",
        createdBy: {
            name: "Rachel",
            profilePhotoUrl: "https://example.com/rachel.jpg"
        },
        price: 4,
        durationHours: 8,
        likes: 0,
        hashtags: ["#Desierto", "#Aventura", "#Safari"]
    },
    {
        title: "Templos y Mercados",
        description: "Visita los templos más famosos y los mercados vibrantes de Bangkok.",
        createdBy: {
            name: "Sam",
            profilePhotoUrl: "https://example.com/sam.jpg"
        },
        price: 3,
        durationHours: 8,
        likes: 0,
        hashtags: ["#Templos", "#Mercados", "#Bangkok"]
    },
    {
        title: "Gastronomía Tailandesa",
        description: "Disfruta de la auténtica comida tailandesa.",
        createdBy: {
            name: "Tina",
            profilePhotoUrl: "https://example.com/tina.jpg"
        },
        price: 3,
        durationHours: 6,
        likes: 0,
        hashtags: ["#Comida", "#Tailandesa", "#BangkokEats"]
    },
    {
        title: "Histórica Estambul",
        description: "Explora las maravillas históricas de Estambul.",
        createdBy: {
            name: "Uma",
            profilePhotoUrl: "https://example.com/uma.jpg"
        },
        price: 4,
        durationHours: 9,
        likes: 0,
        hashtags: ["#Historia", "#Estambul", "#Cultura"]
    },
    {
        title: "Gastronomía Turca",
        description: "Disfruta de la deliciosa comida turca.",
        createdBy: {
            name: "Victor",
            profilePhotoUrl: "https://example.com/victor.jpg"
        },
        price: 3,
        durationHours: 6,
        likes: 0,
        hashtags: ["#Comida", "#Turquía", "#EstambulEats"]
    }


]


Itinerary.insertMany(itineraries)
