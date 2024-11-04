import "dotenv/config.js"
import "../../config/database.js"
import Itinerary from "../Itinerary.js"


/* let itineraries = [
            {
                title: "Romantic Evening by the Seine",
                description: "Enjoy a romantic evening with a boat ride along the Seine, followed by dinner at a cozy Parisian restaurant.",
                createdBy: {
                    name: "Alice Dupont",
                    profilePhotoUrl: "https://example.com/alice.jpg"
                },
                price: 150,
                durationHours: 4,
                likes: 45,
                hashtags: ["#romance", "#seine", "#paris"],
                comments: [
                    {
                        name: "John Doe",
                        profilePhotoUrl: "https://example.com/john.jpg",
                        comment: "An unforgettable experience, highly recommended!",
                        date: new Date("2023-06-12")
                    },
                    {
                        name: "Emily Smith",
                        profilePhotoUrl: "https://example.com/emily.jpg",
                        comment: "Beautiful views and great ambiance!",
                        date: new Date("2023-07-05")
                    }
                ]
            },
            {
                title: "Parisian Art Tour",
                description: "Explore the Louvre and other notable galleries with an expert guide in art history.",
                createdBy: {
                    name: "Paul Lambert",
                    profilePhotoUrl: "https://example.com/paul.jpg"
                },
                price: 100,
                durationHours: 5,
                likes: 60,
                hashtags: ["#art", "#louvre", "#museum"],
                comments: [
                    {
                        name: "Sophia Johnson",
                        profilePhotoUrl: "https://example.com/sophia.jpg",
                        comment: "A great experience for art lovers!",
                        date: new Date("2023-08-20")
                    }
                ]
            }

,
            {
                title: "Central Park Bike Tour",
                description: "Ride through the scenic paths of Central Park on a guided bike tour.",
                createdBy: {
                    name: "Mike Ross",
                    profilePhotoUrl: "https://example.com/mike.jpg"
                },
                price: 50,
                durationHours: 3,
                likes: 30,
                hashtags: ["#centralpark", "#biketour", "#nyc"],
                comments: [
                    {
                        name: "Linda Lee",
                        profilePhotoUrl: "https://example.com/linda.jpg",
                        comment: "So much fun! Perfect way to see the park.",
                        date: new Date("2023-05-10")
                    }
                ]
            },
            {
                title: "NYC Nightlife Experience",
                description: "Discover New York's best bars and nightclubs with a local guide.",
                createdBy: {
                    name: "Sarah Black",
                    profilePhotoUrl: "https://example.com/sarah.jpg"
                },
                price: 120,
                durationHours: 5,
                likes: 80,
                hashtags: ["#nightlife", "#nyc", "#bars"],
                comments: [
                    {
                        name: "Jake Kim",
                        profilePhotoUrl: "https://example.com/jake.jpg",
                        comment: "Best night out in NYC!",
                        date: new Date("2023-04-15")
                    },
                    {
                        name: "Angela Brown",
                        profilePhotoUrl: "https://example.com/angela.jpg",
                        comment: "Fantastic experience, must-do!",
                        date: new Date("2023-03-23")
                    }
                ]
            }
   ,
            {
                title: "Traditional Tea Ceremony",
                description: "Experience a traditional Japanese tea ceremony in a historic tea house.",
                createdBy: {
                    name: "Yuki Nakamura",
                    profilePhotoUrl: "https://example.com/yuki.jpg"
                },
                price: 70,
                durationHours: 2,
                likes: 95,
                hashtags: ["#tea", "#tokyo", "#tradition"],
                comments: [
                    {
                        name: "Chris Park",
                        profilePhotoUrl: "https://example.com/chris.jpg",
                        comment: "Peaceful and enlightening experience.",
                        date: new Date("2023-02-18")
                    }
                ]
            }
,
            {
                title: "Sydney Opera House Tour",
                description: "Take a guided tour of the iconic Sydney Opera House.",
                createdBy: {
                    name: "Olivia White",
                    profilePhotoUrl: "https://example.com/olivia.jpg"
                },
                price: 40,
                durationHours: 2,
                likes: 75,
                hashtags: ["#opera", "#sydney", "#australia"],
                comments: [
                    {
                        name: "Henry King",
                        profilePhotoUrl: "https://example.com/henry.jpg",
                        comment: "Impressive architecture and history.",
                        date: new Date("2023-09-25")
                    }
                ]
            },
            {
                title: "Bondi Beach Surf Lesson",
                description: "Learn to surf at Sydney's famous Bondi Beach with experienced instructors.",
                createdBy: {
                    name: "Emma Taylor",
                    profilePhotoUrl: "https://example.com/emma.jpg"
                },
                price: 60,
                durationHours: 3,
                likes: 100,
                hashtags: ["#surfing", "#bondi", "#australia"],
                comments: [
                    {
                        name: "Lucas Reed",
                        profilePhotoUrl: "https://example.com/lucas.jpg",
                        comment: "Great lesson, the instructors were fantastic!",
                        date: new Date("2023-10-04")
                    }
                ]
            }
,
            {
                title: "Ancient Rome Tour",
                description: "Discover the Colosseum and Roman Forum with an expert guide.",
                createdBy: {
                    name: "Marco Rossi",
                    profilePhotoUrl: "https://example.com/marco.jpg"
                },
                price: 80,
                durationHours: 4,
                likes: 120,
                hashtags: ["#rome", "#history", "#colosseum"],
                comments: [
                    {
                        name: "Isabella Martinez",
                        profilePhotoUrl: "https://example.com/isabella.jpg",
                        comment: "So much history, loved every moment!",
                        date: new Date("2023-06-11")
                    }
                ]
            }
,
            {
                title: "Street Food Tour",
                description: "Taste Bangkok's best street foods with a knowledgeable guide.",
                createdBy: {
                    name: "Nina Chang",
                    profilePhotoUrl: "https://example.com/nina.jpg"
                },
                price: 40,
                durationHours: 3,
                likes: 85,
                hashtags: ["#food", "#bangkok", "#streetfood"],
                comments: [
                    {
                        name: "Tom Hill",
                        profilePhotoUrl: "https://example.com/tom.jpg",
                        comment: "A delicious adventure!",
                        date: new Date("2023-05-09")
                    }
                ]
            }
,
            {
                title: "Bosphorus Cruise",
                description: "Enjoy a scenic cruise along the Bosphorus Strait.",
                createdBy: {
                    name: "Leyla Koc",
                    profilePhotoUrl: "https://example.com/leyla.jpg"
                },
                price: 55,
                durationHours: 2,
                likes: 70,
                hashtags: ["#istanbul", "#bosphorus", "#cruise"],
                comments: [
                    {
                        name: "Julia Peterson",
                        profilePhotoUrl: "https://example.com/julia.jpg",
                        comment: "Amazing views and a relaxing time.",
                        date: new Date("2023-04-13")
                    }
                ]
            }
];  */

let itineraries = [
            {
                city: '6718e936d7dcd344d93db999',
                cityName: "Paris",
                title: "Romantic Evening by the Seine",
                description: "Enjoy a romantic evening with a boat ride along the Seine, followed by dinner at a cozy Parisian restaurant.",
                createdBy: {
                    name: "Alice Dupont",
                    profilePhotoUrl: "https://example.com/alice.jpg"
                },
                price: 150,
                durationHours: 4,
                likes: 45,
                hashtags: ["#romance", "#seine", "#paris"],
                comments: [
                    {
                        name: "John Doe",
                        profilePhotoUrl: "https://example.com/john.jpg",
                        comment: "An unforgettable experience, highly recommended!",
                        date: new Date("2023-06-12")
                    },
                    {
                        name: "Emily Smith",
                        profilePhotoUrl: "https://example.com/emily.jpg",
                        comment: "Beautiful views and great ambiance!",
                        date: new Date("2023-07-05")
                    }
                ]
            },
            {
                city: '6718e936d7dcd344d93db999',
                cityName: "Paris",
                title: "Parisian Art Tour",
                description: "Explore the Louvre and other notable galleries with an expert guide in art history.",
                createdBy: {
                    name: "Paul Lambert",
                    profilePhotoUrl: "https://example.com/paul.jpg"
                },
                price: 100,
                durationHours: 5,
                likes: 60,
                hashtags: ["#art", "#louvre", "#museum"],
                comments: [
                    {
                        name: "Sophia Johnson",
                        profilePhotoUrl: "https://example.com/sophia.jpg",
                        comment: "A great experience for art lovers!",
                        date: new Date("2023-08-20")
                    }
                ]
            }
,
            {
                city: '6718e936d7dcd344d93db99a',
                cityName: "New York",
                title: "Central Park Bike Tour",
                description: "Ride through the scenic paths of Central Park on a guided bike tour.",
                createdBy: {
                    name: "Mike Ross",
                    profilePhotoUrl: "https://example.com/mike.jpg"
                },
                price: 50,
                durationHours: 3,
                likes: 30,
                hashtags: ["#centralpark", "#biketour", "#nyc"],
                comments: [
                    {
                        name: "Linda Lee",
                        profilePhotoUrl: "https://example.com/linda.jpg",
                        comment: "So much fun! Perfect way to see the park.",
                        date: new Date("2023-05-10")
                    }
                ]
            },
            {
                city: '6718e936d7dcd344d93db99a',
                cityName: "New York",
                title: "NYC Nightlife Experience",
                description: "Discover New York's best bars and nightclubs with a local guide.",
                createdBy: {
                    name: "Sarah Black",
                    profilePhotoUrl: "https://example.com/sarah.jpg"
                },
                price: 120,
                durationHours: 5,
                likes: 80,
                hashtags: ["#nightlife", "#nyc", "#bars"],
                comments: [
                    {
                        name: "Jake Kim",
                        profilePhotoUrl: "https://example.com/jake.jpg",
                        comment: "Best night out in NYC!",
                        date: new Date("2023-04-15")
                    },
                    {
                        name: "Angela Brown",
                        profilePhotoUrl: "https://example.com/angela.jpg",
                        comment: "Fantastic experience, must-do!",
                        date: new Date("2023-03-23")
                    }
                ]
            }
,
            {
                city: '6718e936d7dcd344d93db99b',
                cityName: "Tokyo",
                title: "Traditional Tea Ceremony",
                description: "Experience a traditional Japanese tea ceremony in a historic tea house.",
                createdBy: {
                    name: "Yuki Nakamura",
                    profilePhotoUrl: "https://example.com/yuki.jpg"
                },
                price: 70,
                durationHours: 2,
                likes: 95,
                hashtags: ["#tea", "#tokyo", "#tradition"],
                comments: [
                    {
                        name: "Chris Park",
                        profilePhotoUrl: "https://example.com/chris.jpg",
                        comment: "Peaceful and enlightening experience.",
                        date: new Date("2023-02-18")
                    }
                ]
            }
,
            {
                city: '6718e936d7dcd344d93db99d',
                cityName: "Sydney",
                title: "Sydney Opera House Tour",
                description: "Take a guided tour of the iconic Sydney Opera House.",
                createdBy: {
                    name: "Olivia White",
                    profilePhotoUrl: "https://example.com/olivia.jpg"
                },
                price: 40,
                durationHours: 2,
                likes: 75,
                hashtags: ["#opera", "#sydney", "#australia"],
                comments: [
                    {
                        name: "Henry King",
                        profilePhotoUrl: "https://example.com/henry.jpg",
                        comment: "Impressive architecture and history.",
                        date: new Date("2023-09-25")
                    }
                ]
            },
            {
                city: '6718e936d7dcd344d93db99d',
                cityName: "Sydney",
                title: "Bondi Beach Surf Lesson",
                description: "Learn to surf at Sydney's famous Bondi Beach with experienced instructors.",
                createdBy: {
                    name: "Emma Taylor",
                    profilePhotoUrl: "https://example.com/emma.jpg"
                },
                price: 60,
                durationHours: 3,
                likes: 100,
                hashtags: ["#surfing", "#bondi", "#australia"],
                comments: [
                    {
                        name: "Lucas Reed",
                        profilePhotoUrl: "https://example.com/lucas.jpg",
                        comment: "Great lesson, the instructors were fantastic!",
                        date: new Date("2023-10-04")
                    }
                ]
            }
,
            {
                city: '6718e936d7dcd344d93db99f',
                cityName: "Rome",
                title: "Ancient Rome Tour",
                description: "Discover the Colosseum and Roman Forum with an expert guide.",
                createdBy: {
                    name: "Marco Rossi",
                    profilePhotoUrl: "https://example.com/marco.jpg"
                },
                price: 80,
                durationHours: 4,
                likes: 120,
                hashtags: ["#rome", "#history", "#colosseum"],
                comments: [
                    {
                        name: "Isabella Martinez",
                        profilePhotoUrl: "https://example.com/isabella.jpg",
                        comment: "So much history, loved every moment!",
                        date: new Date("2023-06-11")
                    }
                ]
            }
,
            {
                city: "6718e936d7dcd344d93db9a1",
                cityName: "Bangkok",
                title: "Street Food Tour",
                description: "Taste Bangkok's best street foods with a knowledgeable guide.",
                createdBy: {
                    name: "Nina Chang",
                    profilePhotoUrl: "https://example.com/nina.jpg"
                },
                price: 40,
                durationHours: 3,
                likes: 85,
                hashtags: ["#food", "#bangkok", "#streetfood"],
                comments: [
                    {
                        name: "Tom Hill",
                        profilePhotoUrl: "https://example.com/tom.jpg",
                        comment: "A delicious adventure!",
                        date: new Date("2023-05-09")
                    }
                ]
            }
,
            {
                city: '6718e936d7dcd344d93db9a2',
                cityName: "Istanbul",
                title: "Bosphorus Cruise",
                description: "Enjoy a scenic cruise along the Bosphorus Strait.",
                createdBy: {
                    name: "Leyla Koc",
                    profilePhotoUrl: "https://example.com/leyla.jpg"
                },
                price: 55,
                durationHours: 2,
                likes: 70,
                hashtags: ["#istanbul", "#bosphorus", "#cruise"],
                comments: [
                    {
                        name: "Julia Peterson",
                        profilePhotoUrl: "https://example.com/julia.jpg",
                        comment: "Amazing views and a relaxing time.",
                        date: new Date("2023-04-13")
                    }
                ]
            }

];





Itinerary.insertMany(itineraries)
