import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

let users = [
  {
    name: "Alice Johnson",
    photo: "https://example.com/photos/alice.jpg",
    email: "alice.johnson@example.com",
    address: "123 Maple Street, Cityville",
    phone: "1234567890",
    password: "password1",
    online: false,
    
  },
  {
    name: "Bob Smith",
    photo: "https://example.com/photos/bob.jpg",
    email: "bob.smith@example.com",
    address: "456 Oak Avenue, Townsville",
    phone: "1234567891",
    password: "password2",
    online: false,
  },
  {
    name: "Carol Williams",
    photo: "https://example.com/photos/carol.jpg",
    email: "carol.williams@example.com",
    address: "789 Pine Road, Villagecity",
    phone: "1234567892",
    password: "password3",
    online: false,
  },
  {
    name: "David Brown",
    photo: "https://example.com/photos/david.jpg",
    email: "david.brown@example.com",
    address: "101 Cedar Lane, Hamlet",
    phone: "1234567893",
    password: "password4",
    online: false,
  },
  {
    name: "Eva Green",
    photo: "https://example.com/photos/eva.jpg",
    email: "eva.green@example.com",
    address: "202 Willow Blvd, Metropolis",
    phone: "1234567894",
    password: "password5",
    online: false,
  },
  {
    name: "Frank White",
    photo: "https://example.com/photos/frank.jpg",
    email: "frank.white@example.com",
    address: "303 Birch Street, Uptown",
    phone: "1234567895",
    password: "password6",
    online: false,
  },
  {
    name: "Grace Black",
    photo: "https://example.com/photos/grace.jpg",
    email: "grace.black@example.com",
    address: "404 Elm Street, Downtown",
    phone: "1234567896",
    password: "password7",
    online: false,
  },
  {
    name: "Henry King",
    photo: "https://example.com/photos/henry.jpg",
    email: "henry.king@example.com",
    address: "505 Spruce Avenue, Seaside",
    phone: "1234567897",
    password: "password8",
    online: false,
  },
  {
    name: "Ivy Lee",
    photo: "https://example.com/photos/ivy.jpg",
    email: "ivy.lee@example.com",
    address: "606 Fir Road, Riverside",
    phone: "1234567898",
    password: "password9",
    online: false,
  },
  {
    name: "Jack Scott",
    photo: "https://example.com/photos/jack.jpg",
    email: "jack.scott@example.com",
    address: "707 Palm Lane, Lakeside",
    phone: "1234567899",
    password: "password10",
    online: false,
  },
];

User.insertMany(users);
