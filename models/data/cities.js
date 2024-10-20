import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js"     



let cities = [
    {
      "id": 1,
      "cityName": "Paris",
      "photo": "https://unsplash.com/photos/QAwciFlS1g4",
      "country": "France",
      "continent": "Europe",
      "description": "Paris, the capital of France, is famed for its art, fashion, gastronomy, and culture.",
      "currency": "Euro (EUR)",
      "averageRating": 4.7,
      "numberOfReviews": 15000,
      "mainAttractions": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
      "bestSeasonToVisit": "Spring (April to June)",
      "localCuisine": ["Croissants", "Baguette", "Escargot"]
    },
    {
      "id": 2,
      "cityName": "New York",
      "photo": "https://unsplash.com/photos/1SAnrIxw5OY",
      "country": "USA",
      "continent": "North America",
      "description": "New York City is known for its iconic landmarks, diverse culture, and fast-paced lifestyle.",
      "currency": "US Dollar (USD)",
      "averageRating": 4.6,
      "numberOfReviews": 20000,
      "mainAttractions": ["Statue of Liberty", "Central Park", "Times Square"],
      "bestSeasonToVisit": "Autumn (September to November)",
      "localCuisine": ["Bagels", "Pizza", "Cheesecake"]
    },
    {
      "id": 3,
      "cityName": "Tokyo",
      "photo": "https://pixabay.com/photos/tokyo-tower-tokyo-landmark-2228148/",
      "country": "Japan",
      "continent": "Asia",
      "description": "Tokyo, Japan's capital, offers a mix of tradition and futuristic technology.",
      "currency": "Yen (JPY)",
      "averageRating": 4.8,
      "numberOfReviews": 12500,
      "mainAttractions": ["Tokyo Tower", "Shibuya Crossing", "Senso-ji Temple"],
      "bestSeasonToVisit": "Spring (March to May)",
      "localCuisine": ["Sushi", "Ramen", "Tempura"]
    },
    {
      "id": 4,
      "cityName": "Rio de Janeiro",
      "photo": "https://unsplash.com/photos/JWM3S6v7xUc",
      "country": "Brazil",
      "continent": "South America",
      "description": "Rio is known for its vibrant culture, beaches, and the iconic Christ the Redeemer statue.",
      "currency": "Brazilian Real (BRL)",
      "averageRating": 4.5,
      "numberOfReviews": 8000,
      "mainAttractions": ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"],
      "bestSeasonToVisit": "Summer (December to March)",
      "localCuisine": ["Feijoada", "Churrasco", "Açaí"]
    },
    {
      "id": 5,
      "cityName": "Sydney",
      "photo": "https://unsplash.com/photos/_kmuBPpyxU4",
      "country": "Australia",
      "continent": "Oceania",
      "description": "Sydney is Australia's largest city, famous for its harbor, Opera House, and Bondi Beach.",
      "currency": "Australian Dollar (AUD)",
      "averageRating": 4.7,
      "numberOfReviews": 9000,
      "mainAttractions": ["Sydney Opera House", "Bondi Beach", "Sydney Harbour Bridge"],
      "bestSeasonToVisit": "Spring (September to November)",
      "localCuisine": ["Meat Pie", "Vegemite", "Pavlova"]
    },
    {
      "id": 6,
      "cityName": "Cape Town",
      "photo": "https://unsplash.com/photos/L2ZCJ_XFqws",
      "country": "South Africa",
      "continent": "Africa",
      "description": "Cape Town is known for its stunning landscapes, Table Mountain, and vibrant culture.",
      "currency": "South African Rand (ZAR)",
      "averageRating": 4.6,
      "numberOfReviews": 7000,
      "mainAttractions": ["Table Mountain", "Robben Island", "Cape of Good Hope"],
      "bestSeasonToVisit": "Summer (November to March)",
      "localCuisine": ["Bobotie", "Biltong", "Braai"]
    },
    {
      "id": 7,
      "cityName": "Rome",
      "photo": "https://unsplash.com/photos/HlNcigvUi4Q",
      "country": "Italy",
      "continent": "Europe",
      "description": "Rome, the capital of Italy, is known for its nearly 3,000 years of globally influential art, architecture, and culture.",
      "currency": "Euro (EUR)",
      "averageRating": 4.8,
      "numberOfReviews": 13000,
      "mainAttractions": ["Colosseum", "Vatican City", "Trevi Fountain"],
      "bestSeasonToVisit": "Spring (April to June)",
      "localCuisine": ["Pizza", "Pasta", "Gelato"]
    },
    {
      "id": 8,
      "cityName": "Dubai",
      "photo": "https://unsplash.com/photos/nDqA4d5NL0k",
      "country": "UAE",
      "continent": "Asia",
      "description": "Dubai is a global city known for luxury shopping, ultramodern architecture, and a lively nightlife scene.",
      "currency": "Dirham (AED)",
      "averageRating": 4.7,
      "numberOfReviews": 10000,
      "mainAttractions": ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
      "bestSeasonToVisit": "Winter (November to March)",
      "localCuisine": ["Shawarma", "Harees", "Manousheh"]
    },
    {
      "id": 9,
      "cityName": "Bangkok",
      "photo": "https://unsplash.com/photos/YQxwWrwHKBM",
      "country": "Thailand",
      "continent": "Asia",
      "description": "Bangkok is Thailand's capital, known for its ornate shrines and vibrant street life.",
      "currency": "Baht (THB)",
      "averageRating": 4.6,
      "numberOfReviews": 11000,
      "mainAttractions": ["Grand Palace", "Wat Arun", "Chatuchak Market"],
      "bestSeasonToVisit": "Winter (November to February)",
      "localCuisine": ["Pad Thai", "Tom Yum", "Mango Sticky Rice"]
    },
    {
      "id": 10,
      "cityName": "Istanbul",
      "photo": "https://unsplash.com/photos/DZpc4UY8ZtY",
      "country": "Turkey",
      "continent": "Europe/Asia",
      "description": "Istanbul, a major city in Turkey, straddles Europe and Asia across the Bosphorus Strait.",
      "currency": "Turkish Lira (TRY)",
      "averageRating": 4.8,
      "numberOfReviews": 14000,
      "mainAttractions": ["Hagia Sophia", "Blue Mosque", "Topkapi Palace"],
      "bestSeasonToVisit": "Spring (April to June)",
      "localCuisine": ["Kebab", "Baklava", "Meze"]
    },
    {
      "id": 11,
      "cityName": "London",
      "photo": "https://unsplash.com/photos/QVpqFELB6dE",
      "country": "United Kingdom",
      "continent": "Europe",
      "description": "London, the capital of England, is a 21st-century city with a history stretching back to Roman times.",
      "currency": "British Pound (GBP)",
      "averageRating": 4.7,
      "numberOfReviews": 16000,
      "mainAttractions": ["Big Ben", "London Eye", "Tower of London"],
      "bestSeasonToVisit": "Summer (June to August)",
      "localCuisine": ["Fish and Chips", "Sunday Roast", "Pies"]
    },
    {
      "id": 12,
      "cityName": "Moscow",
      "photo": "https://unsplash.com/photos/JyVcAIUAcPM",
      "country": "Russia",
      "continent": "Europe",
      "description": "Moscow is the capital of Russia, famous for its historical architecture and cultural landmarks.",
      "currency": "Russian Ruble (RUB)",
      "averageRating": 4.5,
      "numberOfReviews": 9000,
      "mainAttractions": ["Red Square", "Kremlin", "St. Basil's Cathedral"],
      "bestSeasonToVisit": "Summer (June to August)",
      "localCuisine": ["Borscht", "Pelmeni", "Blini"]
    },
    {
      "id": 13,
      "cityName": "Toronto",
      "photo": "https://unsplash.com/photos/ZtxEDIh4YnI",
      "country": "Canada",
      "continent": "North America",
      "description": "Toronto is a major Canadian city along Lake Ontario, known for its dynamic mix of culture and commerce.",
      "currency": "Canadian Dollar (CAD)",
      "averageRating": 4.6,
      "numberOfReviews": 10000,
      "mainAttractions": ["CN Tower", "Toronto Islands", "Royal Ontario Museum"],
      "bestSeasonToVisit": "Summer (June to September)",
      "localCuisine": ["Poutine", "Butter Tart", "Peameal Bacon"]
    },
    {
      "id": 14,
      "cityName": "Mexico City",
      "photo": "https://unsplash.com/photos/X9VffiluPyo",
      "country": "Mexico",
      "continent": "North America",
      "description": "Mexico City, the capital of Mexico, is known for its Templo Mayor, the baroque Catedral Metropolitana, and the Palacio Nacional.",
      "currency": "Mexican Peso (MXN)",
      "averageRating": 4.6,
      "numberOfReviews": 12000,
      "mainAttractions": ["Zócalo", "Chapultepec Castle", "Frida Kahlo Museum"],
      "bestSeasonToVisit": "Spring (March to May)",
      "localCuisine": ["Tacos", "Tamales", "Mole"]
    },
    {
      "id": 15,
      "cityName": "Seoul",
      "photo": "https://unsplash.com/photos/MYp3HtIpfRM",
      "country": "South Korea",
      "continent": "Asia",
      "description": "Seoul, the capital of South Korea, is known for its modern skyscrapers, high-tech subways, and pop culture.",
      "currency": "South Korean Won (KRW)",
      "averageRating": 4.7,
      "numberOfReviews": 11000,
      "mainAttractions": ["Gyeongbokgung Palace", "Bukchon Hanok Village", "N Seoul Tower"],
      "bestSeasonToVisit": "Autumn (September to November)",
      "localCuisine": ["Kimchi", "Bibimbap", "Tteokbokki"]
    }
  ]
  
  
  




City.insertMany(cities)