
// //server site primary code run server 

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');



// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// //email password api
// // index.js বা routes file


// //google github
// app.post('/users', async (req, res) => {
//   const user = req.body;
//   const query = { email: user.email };
//   const existingUser = await usersCollection.findOne(query);

//   if (existingUser) {
//     return res.send({ message: 'User already exists' });
//   }

//   const result = await usersCollection.insertOne(user);
//   res.send(result);
// });









// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//    // await client.close();
//   }
// }
// run().catch(console.dir);


// // Sample route
// app.get('/', (req, res) => {
//     res.send('Pet Server is running');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { MongoClient, ServerApiVersion } = require('mongodb');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // MongoDB URI
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// let usersCollection; // ✅ global declare

// async function run() {
//   try {
//     await client.connect();
//     console.log("✅ Connected to MongoDB");

//     const db = client.db("DBpet's"); // ✅ Use your actual DB name
//     usersCollection = db.collection("users");

//     // ✅ POST /users route
//     app.post('/users', async (req, res) => {
//       try {
//         const user = req.body;
//         const query = { email: user.email };

//         const existingUser = await usersCollection.findOne(query);
//         if (existingUser) {
//           return res.status(200).json({ message: 'User already exists' });
//         }

//         const result = await usersCollection.insertOne(user);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("POST /users error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // 🆕 Admin - Get all users
// app.get('/all-users', async (req, res) => {
//   try {
//     const users = await usersCollection.find({}).toArray();
//     res.send(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ error: "Internal server error" });
//   }
// });
// // 🆕 Admin - Update user role to admin
// app.patch('/users/make-admin/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const result = await usersCollection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: { role: 'admin' } }
//     );
//     res.send(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ error: "Internal server error" });
//   }
// });
// // GET admin check
// app.get('/users/admin/:email', async (req, res) => {
//   const email = req.params.email;
//   const user = await usersCollection.findOne({ email });
//   res.send({ admin: user?.role === 'admin' });
// });

//     // Root route
//     app.get('/', (req, res) => {
//       res.send('Pet Server is running');
//     });

//     app.listen(port, () => {
//       console.log(`🚀 Server is running on http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   }
// }

// run().catch(console.dir);



//gemni

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); // ObjectId যোগ করা হয়েছে

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// let usersCollection;

// async function run() {
//   try {
//     await client.connect();
//     console.log("✅ Connected to MongoDB");

//     const db = client.db("DBpet's");
//     usersCollection = db.collection("users");
// petsCollection = db.collection("pets");
//     // Existing POST /users route
//     app.post('/users', async (req, res) => {
//       try {
//         const user = req.body;
//         const query = { email: user.email };
//         const existingUser = await usersCollection.findOne(query);
//         if (existingUser) {
//           return res.status(200).json({ message: 'User already exists' });
//         }
//         const result = await usersCollection.insertOne({ ...user, role: 'user' }); // নতুন ব্যবহারকারীকে ডিফল্ট 'user' role দেওয়া হয়েছে।
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("POST /users error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // 🆕 Admin - Get all users
//     // এখানে কোনো Admin middleware ব্যবহার করা হয়নি, তবে এটি একটি ভালো অনুশীলন।
//     app.get('/all-users', async (req, res) => {
//       try {
//         const users = await usersCollection.find({}).toArray();
//         res.send(users);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send({ error: "Internal server error" });
//       }
//     });

//     // 🆕 Add Pet Route (Protected)
//     // This route will handle the form submission for adding a new pet.
//     app.post('/all-pets', async (req, res) => {
//       try {
//         const pet = req.body;

//         // Add a timestamp and an 'adopted' status.
//         const petWithStatus = {
//           ...pet,
//           addedAt: new Date(), // Step 4: Store the current date and time
//           adopted: false // Step 5: Set adopted status to false by default
//         };

//         const result = await petsCollection.insertOne(petWithStatus);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("POST /all-pets error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });
//     // 🆕 Admin - Update user role to admin
//     app.patch('/users/make-admin/:id', async (req, res) => {
//       const id = req.params.id;
//       try {
//         const result = await usersCollection.updateOne(
//           { _id: new ObjectId(id) },
//           { $set: { role: 'admin' } }
//         );
//         res.send(result);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send({ error: "Internal server error" });
//       }
//     });
// // Add this route to get user data by email
// app.get('/users/:email', async (req, res) => {
//   try {
//     // Extract the email parameter from the request URL
//     const email = req.params.email;

//     // Find a user in the 'usersCollection' (assuming this is a MongoDB collection object)
//     // by matching the email field
//     const user = await usersCollection.findOne({ email });

//     // If no user is found with the provided email, return a 404 Not Found response
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Construct the user data object to be sent in the response.
//     // This ensures that only relevant fields are exposed and handles cases where
//     // 'photo' or 'photoURL' might be missing, defaulting to null.
//     // It also defaults the 'role' to 'user' if not explicitly defined.
//     const userData = {
//       _id: user._id, // MongoDB document ID
//       name: user.name,
//       email: user.email,
//       photo: user.photo || user.photoURL || null, // Prioritize 'photo', then 'photoURL', otherwise null
//       role: user.role || 'user' // Default role to 'user'
//     };

//     // Send a 200 OK response with the user data
//     res.status(200).json(userData);
//   } catch (error) {
//     // Log any errors that occur during the process to the console
//     console.error("GET /users/:email error:", error);
//     // Send a 500 Internal Server Error response to the client
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

//     // GET admin check
//     app.get('/users/admin/:email', async (req, res) => {
//       const email = req.params.email;
//       const user = await usersCollection.findOne({ email });
//       res.send({ admin: user?.role === 'admin' });
//     });
        
//       // 🆕 GET all pets by owner's email
//     app.get('/all-pets/:email', async (req, res) => {
//       try {
//         const ownerEmail = req.params.email;
//         const pets = await petsCollection.find({ ownerEmail }).toArray();
//         res.send(pets);
//       } catch (error) {
//         console.error("GET /all-pets/:email error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });
//     // 🆕 DELETE a pet by ID
//     app.delete('/all-pets/:id', async (req, res) => {
//       try {
//         const id = req.params.id;
//         const query = { _id: new ObjectId(id) };
//         const result = await petsCollection.deleteOne(query);
//         if (result.deletedCount === 1) {
//           res.status(200).json({ message: "Pet deleted successfully" });
//         } else {
//           res.status(404).json({ message: "Pet not found" });
//         }
//       } catch (error) {
//         console.error("DELETE /all-pets/:id error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });
//     // 🆕 UPDATE a pet by ID
//     // app.patch('/all-pets/:id', async (req, res) => {
//     //   try {
//     //     const id = req.params.id;
//     //     const updatedPet = req.body;
//     //     const query = { _id: new ObjectId(id) };
//     //     const updateDoc = { $set: updatedPet };
//     //     const result = await petsCollection.updateOne(query, updateDoc);
//     //     if (result.matchedCount === 1) {
//     //       res.status(200).json({ message: "Pet updated successfully" });
//     //     } else {
//     //       res.status(404).json({ message: "Pet not found" });
//     //     }
//     //   } catch (error) {
//     //     console.error("PATCH /all-pets/:id error:", error);
//     //     res.status(500).send({ error: "Internal Server Error" });
//     //   }
//     // });

//     // PATCH /all-pets/:id
// app.patch('/all-pets/:id', async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body;

//   try {
//     const result = await petsCollection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: updateData }
//     );
//     if (result.modifiedCount > 0) {
//       res.status(200).json({ message: 'Pet updated successfully' });
//     } else {
//       res.status(404).json({ message: 'Pet not found or no changes made' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating pet', error: err.message });
//   }
// });


//     // 🆕 UPDATE a pet's adoption status
//     app.patch('/all-pets/adopt/:id', async (req, res) => {
//       try {
//         const id = req.params.id;
//         const query = { _id: new ObjectId(id) };
//         const updateDoc = { $set: { adopted: true } }; // Mark as adopted
//         const result = await petsCollection.updateOne(query, updateDoc);
//         if (result.matchedCount === 1) {
//           res.status(200).json({ message: "Pet marked as adopted" });
//         } else {
//           res.status(404).json({ message: "Pet not found" });
//         }
//       } catch (error) {
//         console.error("PATCH /all-pets/adopt/:id error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });
//     // 🆕 GET a single pet by ID
// app.get('/all-pets/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const pet = await petsCollection.findOne({ _id: new ObjectId(id) });
//     if (!pet) {
//       return res.status(404).json({ message: 'Pet not found' });
//     }
//     res.status(200).json(pet);
//   } catch (error) {
//     console.error("GET /all-pets/:id error:", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });
//     // Root route
//     app.get('/', (req, res) => {
//       res.send('Pet Server is running');
//     });

//     app.listen(port, () => {
//       console.log(`🚀 Server is running on http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   }
// }

// run().catch(console.dir);


//gemni

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// let usersCollection;
// let petsCollection;

// async function run() {
//   try {
//     await client.connect();
//     console.log("✅ Connected to MongoDB");

//     const db = client.db("DBpet's");
//     usersCollection = db.collection("users");
//     petsCollection = db.collection("pets");

//     // Existing POST /users route
//     app.post('/users', async (req, res) => {
//       try {
//         const user = req.body;
//         const query = { email: user.email };
//         const existingUser = await usersCollection.findOne(query);
//         if (existingUser) {
//           return res.status(200).json({ message: 'User already exists' });
//         }
//         const result = await usersCollection.insertOne({ ...user, role: 'user' });
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("POST /users error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // Admin - Get all users
//     app.get('/all-users', async (req, res) => {
//       try {
//         const users = await usersCollection.find({}).toArray();
//         res.send(users);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send({ error: "Internal server error" });
//       }
//     });

//     // Add Pet Route
//     app.post('/all-pets', async (req, res) => {
//       try {
//         const pet = req.body;
//         const petWithStatus = {
//           ...pet,
//           addedAt: new Date(),
//           adopted: false
//         };
//         const result = await petsCollection.insertOne(petWithStatus);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("POST /all-pets error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // Admin - Update user role to admin
//     app.patch('/users/make-admin/:id', async (req, res) => {
//       const id = req.params.id;
//       try {
//         const result = await usersCollection.updateOne(
//           { _id: new ObjectId(id) },
//           { $set: { role: 'admin' } }
//         );
//         res.send(result);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send({ error: "Internal server error" });
//       }
//     });

//     // Get a user by email
//     app.get('/users/:email', async (req, res) => {
//       try {
//         const email = req.params.email;
//         const user = await usersCollection.findOne({ email });
//         if (!user) {
//           return res.status(404).json({ message: 'User not found' });
//         }
//         const userData = {
//           _id: user._id,
//           name: user.name,
//           email: user.email,
//           photo: user.photo || user.photoURL || null,
//           role: user.role || 'user'
//         };
//         res.status(200).json(userData);
//       } catch (error) {
//         console.error("GET /users/:email error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // GET admin check
//     app.get('/users/admin/:email', async (req, res) => {
//       const email = req.params.email;
//       const user = await usersCollection.findOne({ email });
//       res.send({ admin: user?.role === 'admin' });
//     });
    
//     // 🆕 GET all pets by owner's email - Corrected endpoint name for clarity
//     app.get('/my-added-pets/:email', async (req, res) => {
//       try {
//         const ownerEmail = req.params.email;
//         const pets = await petsCollection.find({ ownerEmail }).toArray();
//         res.send(pets);
//       } catch (error) {
//         console.error("GET /my-added-pets/:email error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // DELETE a pet by ID
//     app.delete('/all-pets/:id', async (req, res) => {
//       try {
//         const id = req.params.id;
//         const query = { _id: new ObjectId(id) };
//         const result = await petsCollection.deleteOne(query);
//         if (result.deletedCount === 1) {
//           res.status(200).json({ message: "Pet deleted successfully" });
//         } else {
//           res.status(404).json({ message: "Pet not found" });
//         }
//       } catch (error) {
//         console.error("DELETE /all-pets/:id error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // PATCH /all-pets/:id - Used for updating pet details
//     app.patch('/all-pets/:id', async (req, res) => {
//       const { id } = req.params;
//       const updateData = req.body;

//       try {
//         const result = await petsCollection.updateOne(
//           { _id: new ObjectId(id) },
//           { $set: updateData }
//         );
//         if (result.modifiedCount > 0) {
//           res.status(200).json({ message: 'Pet updated successfully' });
//         } else {
//           res.status(404).json({ message: 'Pet not found or no changes made' });
//         }
//       } catch (err) {
//         res.status(500).json({ message: 'Error updating pet', error: err.message });
//       }
//     });

//     // UPDATE a pet's adoption status
//     app.patch('/all-pets/adopt/:id', async (req, res) => {
//       try {
//         const id = req.params.id;
//         const query = { _id: new ObjectId(id) };
//         const updateDoc = { $set: { adopted: true } }; // Mark as adopted
//         const result = await petsCollection.updateOne(query, updateDoc);
//         if (result.matchedCount === 1) {
//           res.status(200).json({ message: "Pet marked as adopted" });
//         } else {
//           res.status(404).json({ message: "Pet not found" });
//         }
//       } catch (error) {
//         console.error("PATCH /all-pets/adopt/:id error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // 🆕 GET a single pet by ID - New endpoint to fetch pet for update page
//     app.get('/all-pets/pet-details/:id', async (req, res) => {
//       try {
//         const id = req.params.id;
//         const pet = await petsCollection.findOne({ _id: new ObjectId(id) });
//         if (!pet) {
//           return res.status(404).json({ message: 'Pet not found' });
//         }
//         res.status(200).json(pet);
//       } catch (error) {
//         console.error("GET /all-pets/pet-details/:id error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // Root route
//     app.get('/', (req, res) => {
//       res.send('Pet Server is running');
//     });

//     app.listen(port, () => {
//       console.log(`🚀 Server is running on http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   }
// }

// run().catch(console.dir);



//gemni

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// let usersCollection;
// let petsCollection;
// let donationCampaignsCollection; // 🆕 New collection for donation campaigns

// async function run() {
//     try {
//         await client.connect();
//         console.log("✅ Connected to MongoDB");

//         const db = client.db("DBpet's");
//         usersCollection = db.collection("users");
//         petsCollection = db.collection("pets");
//         donationCampaignsCollection = db.collection("donation-campaigns"); // 🆕 Initialize the new collection
//         adoptionRequestsCollection = db.collection("adoptionRequests");
      
//         // Existing POST /users route
//         app.post('/users', async (req, res) => {
//             try {
//                 const user = req.body;
//                 const query = { email: user.email };
//                 const existingUser = await usersCollection.findOne(query);
//                 if (existingUser) {
//                     return res.status(200).json({ message: 'User already exists' });
//                 }
//                 const result = await usersCollection.insertOne({ ...user, role: 'user' });
//                 res.status(201).json(result);
//             } catch (error) {
//                 console.error("POST /users error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // Admin - Get all users
//         app.get('/all-users', async (req, res) => {
//             try {
//                 const users = await usersCollection.find({}).toArray();
//                 res.send(users);
//             } catch (err) {
//                 console.error(err);
//                 res.status(500).send({ error: "Internal server error" });
//             }
//         });

//         // Add Pet Route
//         app.post('/all-pets', async (req, res) => {
//             try {
//                 const pet = req.body;
//                 const petWithStatus = {
//                     ...pet,
//                     addedAt: new Date(),
//                     adopted: false
//                 };
//                 const result = await petsCollection.insertOne(petWithStatus);
//                 res.status(201).json(result);
//             } catch (error) {
//                 console.error("POST /all-pets error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // Admin - Update user role to admin
//         app.patch('/users/make-admin/:id', async (req, res) => {
//             const id = req.params.id;
//             try {
//                 const result = await usersCollection.updateOne(
//                     { _id: new ObjectId(id) },
//                     { $set: { role: 'admin' } }
//                 );
//                 res.send(result);
//             } catch (err) {
//                 console.error(err);
//                 res.status(500).send({ error: "Internal server error" });
//             }
//         });

//         // Get a user by email
//         app.get('/users/:email', async (req, res) => {
//             try {
//                 const email = req.params.email;
//                 const user = await usersCollection.findOne({ email });
//                 if (!user) {
//                     return res.status(404).json({ message: 'User not found' });
//                 }
//                 const userData = {
//                     _id: user._id,
//                     name: user.name,
//                     email: user.email,
//                     photo: user.photo || user.photoURL || null,
//                     role: user.role || 'user'
//                 };
//                 res.status(200).json(userData);
//             } catch (error) {
//                 console.error("GET /users/:email error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // GET admin check
//         app.get('/users/admin/:email', async (req, res) => {
//             const email = req.params.email;
//             const user = await usersCollection.findOne({ email });
//             res.send({ admin: user?.role === 'admin' });
//         });
        
//         // 🆕 GET all pets by owner's email - Corrected endpoint name for clarity
//         app.get('/my-added-pets/:email', async (req, res) => {
//             try {
//                 const ownerEmail = req.params.email;
//                 const pets = await petsCollection.find({ ownerEmail }).toArray();
//                 res.send(pets);
//             } catch (error) {
//                 console.error("GET /my-added-pets/:email error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // DELETE a pet by ID
//         app.delete('/all-pets/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const query = { _id: new ObjectId(id) };
//                 const result = await petsCollection.deleteOne(query);
//                 if (result.deletedCount === 1) {
//                     res.status(200).json({ message: "Pet deleted successfully" });
//                 } else {
//                     res.status(404).json({ message: "Pet not found" });
//                 }
//             } catch (error) {
//                 console.error("DELETE /all-pets/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // PATCH /all-pets/:id - Used for updating pet details
//         app.patch('/all-pets/:id', async (req, res) => {
//             const { id } = req.params;
//             const updateData = req.body;

//             try {
//                 const result = await petsCollection.updateOne(
//                     { _id: new ObjectId(id) },
//                     { $set: updateData }
//                 );
//                 if (result.modifiedCount > 0) {
//                     res.status(200).json({ message: 'Pet updated successfully' });
//                 } else {
//                     res.status(404).json({ message: 'Pet not found or no changes made' });
//                 }
//             } catch (err) {
//                 res.status(500).json({ message: 'Error updating pet', error: err.message });
//             }
//         });

//         // UPDATE a pet's adoption status
//         app.patch('/all-pets/adopt/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const query = { _id: new ObjectId(id) };
//                 const updateDoc = { $set: { adopted: true } }; // Mark as adopted
//                 const result = await petsCollection.updateOne(query, updateDoc);
//                 if (result.matchedCount === 1) {
//                     res.status(200).json({ message: "Pet marked as adopted" });
//                 } else {
//                     res.status(404).json({ message: "Pet not found" });
//                 }
//             } catch (error) {
//                 console.error("PATCH /all-pets/adopt/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // 🆕 GET a single pet by ID - New endpoint to fetch pet for update page
//         app.get('/all-pets/pet-details/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const pet = await petsCollection.findOne({ _id: new ObjectId(id) });
//                 if (!pet) {
//                     return res.status(404).json({ message: 'Pet not found' });
//                 }
//                 res.status(200).json(pet);
//             } catch (error) {
//                 console.error("GET /all-pets/pet-details/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

   

// // 🆕 New Route for creating a donation campaign
//     app.post('/donation-campaigns', async (req, res) => {
//       try {
//         const campaign = req.body;
//         const campaignWithTimestamp = {
//           ...campaign,
//           createdAt: new Date(), // Store the date and time when the campaign was created
//           lastDate: new Date(campaign.lastDate), // Ensure the date is a proper Date object
//           donatedAmount: 0,
//           paused: false,
//         };
//         const result = await donationCampaignsCollection.insertOne(campaignWithTimestamp);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("POST /donation-campaigns error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });
        
    
//     // 🆕 New Route: Get all unadopted pets with search, filter, and pagination
//     app.get('/all-pets/unadopted', async (req, res) => {
//       try {
//         const { page = 0, limit = 9, search = '', category = '' } = req.query;
//         const pageNumber = parseInt(page);
//         const pageSize = parseInt(limit);
//         const skip = pageNumber * pageSize;

//         const query = {
//           adopted: false,
//           petName: { $regex: search, $options: 'i' }, // Case-insensitive search
//         };

//         if (category) {
//           query.petCategory = category;
//         }

//         const pets = await petsCollection
//           .find(query)
//           .sort({ addedAt: -1 }) // Sort by date descending
//           .skip(skip)
//           .limit(pageSize)
//           .toArray();

//         res.status(200).json(pets);
//       } catch (error) {
//         console.error("GET /all-pets/unadopted error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // 🆕 New Route: Get a single pet by ID for the details page
//     app.get('/all-pets/pet-details/:id', async (req, res) => {
//       try {
//         const id = req.params.id;
//         const pet = await petsCollection.findOne({ _id: new ObjectId(id) });
//         if (!pet) {
//           return res.status(404).json({ message: 'Pet not found' });
//         }
//         res.status(200).json(pet);
//       } catch (error) {
//         console.error("GET /all-pets/pet-details/:id error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // 🆕 New Route: Handle adoption requests
//     app.post('/adoption-requests', async (req, res) => {
//       try {
//         const adoptionRequest = req.body;
//         const result = await adoptionRequestsCollection.insertOne(adoptionRequest);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("POST /adoption-requests error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//       }
//     });

//     // ... (আপনার বিদ্যমান MongoClient এবং অন্যান্য কোড)

// // 🆕 Route: Get all donation campaigns with pagination and sorting
// app.get('/donation-campaigns', async (req, res) => {
//     try {
//         const { page = 1, limit = 9 } = req.query;
//         const pageNumber = parseInt(page);
//         const pageSize = parseInt(limit);
//         const skip = (pageNumber - 1) * pageSize;

//         const totalCampaigns = await donationCampaignsCollection.countDocuments();
//         const campaigns = await donationCampaignsCollection
//             .find({})
//             .sort({ createdAt: -1 }) // Sort by creation date descending
//             .skip(skip)
//             .limit(pageSize)
//             .toArray();

//         res.status(200).json({
//             campaigns,
//             total: totalCampaigns,
//             page: pageNumber,
//             pages: Math.ceil(totalCampaigns / pageSize),
//         });
//     } catch (error) {
//         console.error("GET /donation-campaigns error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//     }
// });

// // 🆕 Route: Get a single donation campaign by ID
// app.get('/donation-campaigns/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) });
//         if (!campaign) {
//             return res.status(404).json({ message: 'Donation campaign not found' });
//         }
//         res.status(200).json(campaign);
//     } catch (error) {
//         console.error("GET /donation-campaigns/:id error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//     }
// });

// // 🆕 Route: Get 3 recommended campaigns
// app.get('/donation-campaigns/recommended/:excludeId', async (req, res) => {
//     try {
//         const excludeId = req.params.excludeId;
//         const recommended = await donationCampaignsCollection
//             .find({ _id: { $ne: new ObjectId(excludeId) } })
//             .limit(3)
//             .toArray();

//         res.status(200).json(recommended);
//     } catch (error) {
//         console.error("GET /donation-campaigns/recommended error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//     }
// });

// // 🆕 Route: Handle donation submission
// app.post('/donation-campaigns/donate/:id', async (req, res) => {
//     const { id } = req.params;
//     const { amount, donatorName, donatorEmail } = req.body;

//     // A more robust solution would involve Stripe payment processing here.
//     // For now, we'll assume the payment was successful.

//     try {
//         const result = await donationCampaignsCollection.updateOne(
//             { _id: new ObjectId(id) },
//             {
//                 $inc: { donatedAmount: amount }, // Increment the donated amount
//                 $push: {
//                     donators: {
//                         name: donatorName,
//                         email: donatorEmail,
//                         amount: amount,
//                         donatedAt: new Date(),
//                     }
//                 } // Add donator details
//             }
//         );

//         if (result.modifiedCount > 0) {
//             res.status(200).json({ message: 'Donation successful' });
//         } else {
//             res.status(404).json({ message: 'Campaign not found or donation failed' });
//         }
//     } catch (error) {
//         console.error("POST /donation-campaigns/donate error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//     }
// });

// // app.get('/my-donation-campaigns/:email', async (req, res) => {
// //     try {
// //         const creatorEmail = req.params.email;
// //         const campaigns = await donationCampaignsCollection.find({ creatorEmail }).toArray();
// //         res.status(200).json(campaigns);
// //     } catch (error) {
// //         console.error("GET /my-donation-campaigns error:", error);
// //         res.status(500).send({ error: "Internal Server Error" });
// //     }
// // });
        

// // Toggle Pause/Unpause of a Campaign
// app.patch('/donation-campaigns/:id/pause', async (req, res) => {
//     const { id } = req.params;
//     const { paused } = req.body;
//     try {
//         const result = await donationCampaignsCollection.updateOne(
//             { _id: new ObjectId(id) },
//             { $set: { paused: paused } }
//         );
//         if (result.modifiedCount > 0) {
//             res.status(200).json({ message: `Campaign ${paused ? 'paused' : 'unpaused'}` });
//         } else {
//             res.status(404).json({ message: 'Campaign not found or already updated' });
//         }
//     } catch (error) {
//         console.error("PATCH /donation-campaigns/:id/pause error:", error);
//         res.status(500).send({ error: "Internal Server Error" });
//     }
// });



// app.get('/my-donation-campaigns/:email', async (req, res) => {
//   const email = req.params.email;
//   const campaigns = await donationCampaignsCollection.find({ createdBy: email }).toArray();
//   res.send(campaigns);
// });


// // Add these routes inside your `run()` function
// // after you've initialized the donationCampaignsCollection

// // 🆕 Route: Get all donation campaigns created by the logged-in user
// app.get('/my-donation-campaigns/:email', async (req, res) => {
//   try {
//     const creatorEmail = req.params.email;
//     const campaigns = await donationCampaignsCollection.find({ createdBy: creatorEmail }).toArray();
//     res.status(200).json(campaigns);
//   } catch (error) {
//     console.error("GET /my-donation-campaigns error:", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });


// // 🆕 Route: Toggle Pause/Unpause of a Campaign
// app.patch('/donation-campaigns/:id/pause', async (req, res) => {
//   const { id } = req.params;
//   const { paused } = req.body;
//   try {
//     const result = await donationCampaignsCollection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: { paused: paused } }
//     );
//     if (result.modifiedCount > 0) {
//       res.status(200).json({ success: true, message: `Campaign ${paused ? 'paused' : 'unpaused'}` });
//     } else {
//       res.status(404).json({ success: false, message: 'Campaign not found or already updated' });
//     }
//   } catch (error) {
//     console.error("PATCH /donation-campaigns/:id/pause error:", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

// // 🆕 Route: Get a single campaign for the edit page
// app.get('/donation-campaigns/edit/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) });
//     if (!campaign) {
//       return res.status(404).json({ message: 'Campaign not found' });
//     }
//     res.status(200).json(campaign);
//   } catch (error) {
//     console.error("GET /donation-campaigns/edit/:id error:", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

// // 🆕 Route: Update a donation campaign
// app.put('/donation-campaigns/:id', async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body;

//   // We should remove the `_id` field from the update data if it's there
//   if (updateData._id) {
//     delete updateData._id;
//   }

//   try {
//     const result = await donationCampaignsCollection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: updateData }
//     );
//     if (result.modifiedCount > 0) {
//       res.status(200).json({ success: true, message: 'Campaign updated successfully' });
//     } else {
//       res.status(404).json({ success: false, message: 'Campaign not found or no changes made' });
//     }
//   } catch (error) {
//     console.error("PUT /donation-campaigns/:id error:", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

// // 🆕 Route: Get donators for a specific campaign
// app.get('/donation-campaigns/:id/donators', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) }, { projection: { donators: 1 } });
//     if (!campaign) {
//       return res.status(404).json({ message: 'Campaign not found' });
//     }
//     res.status(200).json(campaign.donators || []);
//   } catch (error) {
//     console.error("GET /donation-campaigns/:id/donators error:", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });




//         // Root route
//         app.get('/', (req, res) => {
//             res.send('Pet Server is running');
//         });

//         app.listen(port, () => {
//             console.log(`🚀 Server is running on http://localhost:${port}`);
//         });

//     } catch (err) {
//         console.error("❌ MongoDB connection error:", err);
//     }
// }

// run().catch(console.dir) ;




// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// let usersCollection;
// let petsCollection;
// let donationCampaignsCollection;
// let adoptionRequestsCollection;

// async function run() {
//     try {
//         await client.connect();
//         console.log("✅ Connected to MongoDB");

//         const db = client.db("DBpet's");
//         usersCollection = db.collection("users");
//         petsCollection = db.collection("pets");
//         donationCampaignsCollection = db.collection("donation-campaigns");
//         adoptionRequestsCollection = db.collection("adoptionRequests");
        
//         // ... (existing routes for users, pets, etc.)

//         // 🆕 Route: Create a donation campaign
//         app.post('/donation-campaigns', async (req, res) => {
//           try {
//             const campaign = req.body;
//             // 💡 Ensure `createdBy` and `donators` are initialized
//             const campaignWithTimestamp = {
//               ...campaign,
//               createdAt: new Date(),
//               lastDate: new Date(campaign.lastDate),
//               donatedAmount: 0,
//               paused: false,
//               donators: [], // Initialize donators as an empty array
//             };
//             const result = await donationCampaignsCollection.insertOne(campaignWithTimestamp);
//             res.status(201).json(result);
//           } catch (error) {
//             console.error("POST /donation-campaigns error:", error);
//             res.status(500).send({ error: "Internal Server Error" });
//           }
//         });

//         // 🆕 Route: Get all donation campaigns created by the logged-in user
//         app.get('/my-donation-campaigns/:email', async (req, res) => {
//           try {
//             const creatorEmail = req.params.email;
//             // 💡 Use the `createdBy` field to match the data sent from the client
//             const campaigns = await donationCampaignsCollection.find({ createdBy: creatorEmail }).toArray();
//             res.status(200).json(campaigns);
//           } catch (error) {
//             console.error("GET /my-donation-campaigns error:", error);
//             res.status(500).send({ error: "Internal Server Error" });
//           }
//         });

//         // 🆕 Route: Toggle Pause/Unpause of a Campaign
//         app.patch('/donation-campaigns/:id/pause', async (req, res) => {
//           const { id } = req.params;
//           const { paused } = req.body;
//           try {
//             const result = await donationCampaignsCollection.updateOne(
//               { _id: new ObjectId(id) },
//               { $set: { paused: paused } }
//             );
//             if (result.modifiedCount > 0) {
//               res.status(200).json({ success: true, message: `Campaign ${paused ? 'paused' : 'unpaused'}` });
//             } else {
//               res.status(404).json({ success: false, message: 'Campaign not found or already updated' });
//             }
//           } catch (error) {
//             console.error("PATCH /donation-campaigns/:id/pause error:", error);
//             res.status(500).send({ error: "Internal Server Error" });
//           }
//         });

//         // 🆕 Route: Get a single campaign for the edit page
//         app.get('/donation-campaigns/edit/:id', async (req, res) => {
//           try {
//             const id = req.params.id;
//             const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) });
//             if (!campaign) {
//               return res.status(404).json({ message: 'Campaign not found' });
//             }
//             res.status(200).json(campaign);
//           } catch (error) {
//             console.error("GET /donation-campaigns/edit/:id error:", error);
//             res.status(500).send({ error: "Internal Server Error" });
//           }
//         });

//         // 🆕 Route: Update a donation campaign
//         app.put('/donation-campaigns/:id', async (req, res) => {
//           const { id } = req.params;
//           const updateData = req.body;

//           if (updateData._id) {
//             delete updateData._id;
//           }

//           try {
//             const result = await donationCampaignsCollection.updateOne(
//               { _id: new ObjectId(id) },
//               { $set: updateData }
//             );
//             if (result.modifiedCount > 0) {
//               res.status(200).json({ success: true, message: 'Campaign updated successfully' });
//             } else {
//               res.status(404).json({ success: false, message: 'Campaign not found or no changes made' });
//             }
//           } catch (error) {
//             console.error("PUT /donation-campaigns/:id error:", error);
//             res.status(500).send({ error: "Internal Server Error" });
//           }
//         });
        
//         // 🆕 Route: Get donators for a specific campaign
//         app.get('/donation-campaigns/:id/donators', async (req, res) => {
//           try {
//             const id = req.params.id;
//             const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) }, { projection: { donators: 1 } });
//             if (!campaign) {
//               return res.status(404).json({ message: 'Campaign not found' });
//             }
//             res.status(200).json(campaign.donators || []);
//           } catch (error) {
//             console.error("GET /donation-campaigns/:id/donators error:", error);
//             res.status(500).send({ error: "Internal Server Error" });
//           }
//         });

//         // Root route
//         app.get('/', (req, res) => {
//             res.send('Pet Server is running');
//         });

//         app.listen(port, () => {
//             console.log(`🚀 Server is running on http://localhost:${port}`);
//         });

//     } catch (err) {
//         console.error("❌ MongoDB connection error:", err);
//     }
// }

// run().catch(console.dir);


//deap seek

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         await client.connect();
//         console.log("✅ Connected to MongoDB");

//         const db = client.db("DBpet's");
//         const usersCollection = db.collection("users");
//         const petsCollection = db.collection("pets");
//         const donationCampaignsCollection = db.collection("donation-campaigns");
//         const adoptionRequestsCollection = db.collection("adoptionRequests");
      
//         // Users routes
//         app.post('/users', async (req, res) => {
//             try {
//                 const user = req.body;
//                 const query = { email: user.email };
//                 const existingUser = await usersCollection.findOne(query);
//                 if (existingUser) {
//                     return res.status(200).json({ message: 'User already exists' });
//                 }
//                 const result = await usersCollection.insertOne({ ...user, role: 'user' });
//                 res.status(201).json(result);
//             } catch (error) {
//                 console.error("POST /users error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/all-users', async (req, res) => {
//             try {
//                 const users = await usersCollection.find({}).toArray();
//                 res.send(users);
//             } catch (err) {
//                 console.error(err);
//                 res.status(500).send({ error: "Internal server error" });
//             }
//         });

//         app.patch('/users/make-admin/:id', async (req, res) => {
//             const id = req.params.id;
//             try {
//                 const result = await usersCollection.updateOne(
//                     { _id: new ObjectId(id) },
//                     { $set: { role: 'admin' } }
//                 );
//                 res.send(result);
//             } catch (err) {
//                 console.error(err);
//                 res.status(500).send({ error: "Internal server error" });
//             }
//         });

//         app.get('/users/:email', async (req, res) => {
//             try {
//                 const email = req.params.email;
//                 const user = await usersCollection.findOne({ email });
//                 if (!user) {
//                     return res.status(404).json({ message: 'User not found' });
//                 }
//                 const userData = {
//                     _id: user._id,
//                     name: user.name,
//                     email: user.email,
//                     photo: user.photo || user.photoURL || null,
//                     role: user.role || 'user'
//                 };
//                 res.status(200).json(userData);
//             } catch (error) {
//                 console.error("GET /users/:email error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/users/admin/:email', async (req, res) => {
//             const email = req.params.email;
//             const user = await usersCollection.findOne({ email });
//             res.send({ admin: user?.role === 'admin' });
//         });
        
//         // Pets routes
//         app.post('/all-pets', async (req, res) => {
//             try {
//                 const pet = req.body;
//                 const petWithStatus = {
//                     ...pet,
//                     addedAt: new Date(),
//                     adopted: false
//                 };
//                 const result = await petsCollection.insertOne(petWithStatus);
//                 res.status(201).json(result);
//             } catch (error) {
//                 console.error("POST /all-pets error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/my-added-pets/:email', async (req, res) => {
//             try {
//                 const ownerEmail = req.params.email;
//                 const pets = await petsCollection.find({ ownerEmail }).toArray();
//                 res.send(pets);
//             } catch (error) {
//                 console.error("GET /my-added-pets/:email error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.delete('/all-pets/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const query = { _id: new ObjectId(id) };
//                 const result = await petsCollection.deleteOne(query);
//                 if (result.deletedCount === 1) {
//                     res.status(200).json({ message: "Pet deleted successfully" });
//                 } else {
//                     res.status(404).json({ message: "Pet not found" });
//                 }
//             } catch (error) {
//                 console.error("DELETE /all-pets/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.patch('/all-pets/:id', async (req, res) => {
//             const { id } = req.params;
//             const updateData = req.body;

//             try {
//                 const result = await petsCollection.updateOne(
//                     { _id: new ObjectId(id) },
//                     { $set: updateData }
//                 );
//                 if (result.modifiedCount > 0) {
//                     res.status(200).json({ message: 'Pet updated successfully' });
//                 } else {
//                     res.status(404).json({ message: 'Pet not found or no changes made' });
//                 }
//             } catch (err) {
//                 res.status(500).json({ message: 'Error updating pet', error: err.message });
//             }
//         });

//         app.patch('/all-pets/adopt/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const query = { _id: new ObjectId(id) };
//                 const updateDoc = { $set: { adopted: true } };
//                 const result = await petsCollection.updateOne(query, updateDoc);
//                 if (result.matchedCount === 1) {
//                     res.status(200).json({ message: "Pet marked as adopted" });
//                 } else {
//                     res.status(404).json({ message: "Pet not found" });
//                 }
//             } catch (error) {
//                 console.error("PATCH /all-pets/adopt/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/all-pets/pet-details/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const pet = await petsCollection.findOne({ _id: new ObjectId(id) });
//                 if (!pet) {
//                     return res.status(404).json({ message: 'Pet not found' });
//                 }
//                 res.status(200).json(pet);
//             } catch (error) {
//                 console.error("GET /all-pets/pet-details/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/all-pets/unadopted', async (req, res) => {
//             try {
//                 const { page = 0, limit = 9, search = '', category = '' } = req.query;
//                 const pageNumber = parseInt(page);
//                 const pageSize = parseInt(limit);
//                 const skip = pageNumber * pageSize;

//                 const query = {
//                     adopted: false,
//                     petName: { $regex: search, $options: 'i' },
//                 };

//                 if (category) {
//                     query.petCategory = category;
//                 }

//                 const pets = await petsCollection
//                     .find(query)
//                     .sort({ addedAt: -1 })
//                     .skip(skip)
//                     .limit(pageSize)
//                     .toArray();

//                 res.status(200).json(pets);
//             } catch (error) {
//                 console.error("GET /all-pets/unadopted error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // Adoption requests
//         app.post('/adoption-requests', async (req, res) => {
//             try {
//                 const adoptionRequest = req.body;
//                 const result = await adoptionRequestsCollection.insertOne(adoptionRequest);
//                 res.status(201).json(result);
//             } catch (error) {
//                 console.error("POST /adoption-requests error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // Donation campaigns routes
//         app.post('/donation-campaigns', async (req, res) => {
//             try {
//                 const campaign = req.body;
//                 const campaignWithTimestamp = {
//                     ...campaign,
//                     createdAt: new Date(),
//                     lastDate: new Date(campaign.lastDate),
//                     donatedAmount: 0,
//                     paused: false,
//                     donators: []
//                 };
//                 const result = await donationCampaignsCollection.insertOne(campaignWithTimestamp);
//                 res.status(201).json(result);
//             } catch (error) {
//                 console.error("POST /donation-campaigns error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/donation-campaigns', async (req, res) => {
//             try {
//                 const { page = 1, limit = 9 } = req.query;
//                 const pageNumber = parseInt(page);
//                 const pageSize = parseInt(limit);
//                 const skip = (pageNumber - 1) * pageSize;

//                 const totalCampaigns = await donationCampaignsCollection.countDocuments();
//                 const campaigns = await donationCampaignsCollection
//                     .find({})
//                     .sort({ createdAt: -1 })
//                     .skip(skip)
//                     .limit(pageSize)
//                     .toArray();

//                 res.status(200).json({
//                     campaigns,
//                     total: totalCampaigns,
//                     page: pageNumber,
//                     pages: Math.ceil(totalCampaigns / pageSize),
//                 });
//             } catch (error) {
//                 console.error("GET /donation-campaigns error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/donation-campaigns/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) });
//                 if (!campaign) {
//                     return res.status(404).json({ message: 'Donation campaign not found' });
//                 }
//                 res.status(200).json(campaign);
//             } catch (error) {
//                 console.error("GET /donation-campaigns/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/donation-campaigns/recommended/:excludeId', async (req, res) => {
//             try {
//                 const excludeId = req.params.excludeId;
//                 const recommended = await donationCampaignsCollection
//                     .find({ _id: { $ne: new ObjectId(excludeId) } })
//                     .limit(3)
//                     .toArray();

//                 res.status(200).json(recommended);
//             } catch (error) {
//                 console.error("GET /donation-campaigns/recommended error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.post('/donation-campaigns/donate/:id', async (req, res) => {
//             const { id } = req.params;
//             const { amount, donatorName, donatorEmail } = req.body;

//             try {
//                 const result = await donationCampaignsCollection.updateOne(
//                     { _id: new ObjectId(id) },
//                     {
//                         $inc: { donatedAmount: amount },
//                         $push: {
//                             donators: {
//                                 name: donatorName,
//                                 email: donatorEmail,
//                                 amount: amount,
//                                 donatedAt: new Date(),
//                             }
//                         }
//                     }
//                 );

//                 if (result.modifiedCount > 0) {
//                     res.status(200).json({ message: 'Donation successful' });
//                 } else {
//                     res.status(404).json({ message: 'Campaign not found or donation failed' });
//                 }
//             } catch (error) {
//                 console.error("POST /donation-campaigns/donate error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // FIXED ROUTE: Use creatorEmail instead of createdBy
//         app.get('/my-donation-campaigns/:email', async (req, res) => {
//             try {
//                 const creatorEmail = req.params.email;
//                 const campaigns = await donationCampaignsCollection.find({ creatorEmail }).toArray();
//                 res.status(200).json(campaigns);
//             } catch (error) {
//                 console.error("GET /my-donation-campaigns error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.patch('/donation-campaigns/:id/pause', async (req, res) => {
//             const { id } = req.params;
//             const { paused } = req.body;
//             try {
//                 const result = await donationCampaignsCollection.updateOne(
//                     { _id: new ObjectId(id) },
//                     { $set: { paused: paused } }
//                 );
//                 if (result.modifiedCount > 0) {
//                     res.status(200).json({ message: `Campaign ${paused ? 'paused' : 'unpaused'}` });
//                 } else {
//                     res.status(404).json({ message: 'Campaign not found or already updated' });
//                 }
//             } catch (error) {
//                 console.error("PATCH /donation-campaigns/:id/pause error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.get('/donation-campaigns/edit/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) });
//                 if (!campaign) {
//                     return res.status(404).json({ message: 'Campaign not found' });
//                 }
//                 res.status(200).json(campaign);
//             } catch (error) {
//                 console.error("GET /donation-campaigns/edit/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         app.put('/donation-campaigns/:id', async (req, res) => {
//             const { id } = req.params;
//             const updateData = req.body;

//             if (updateData._id) {
//                 delete updateData._id;
//             }

//             try {
//                 const result = await donationCampaignsCollection.updateOne(
//                     { _id: new ObjectId(id) },
//                     { $set: updateData }
//                 );
//                 if (result.modifiedCount > 0) {
//                     res.status(200).json({ success: true, message: 'Campaign updated successfully' });
//                 } else {
//                     res.status(404).json({ success: false, message: 'Campaign not found or no changes made' });
//                 }
//             } catch (error) {
//                 console.error("PUT /donation-campaigns/:id error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });
        
//         app.get('/donation-campaigns/:id/donators', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const campaign = await donationCampaignsCollection.findOne(
//                     { _id: new ObjectId(id) },
//                     { projection: { donators: 1 } }
//                 );
//                 if (!campaign) {
//                     return res.status(404).json({ message: 'Campaign not found' });
//                 }
//                 res.status(200).json(campaign.donators || []);
//             } catch (error) {
//                 console.error("GET /donation-campaigns/:id/donators error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//          // 🆕 NEW Route: Get all donations for a specific user email
//         app.get('/my-donations/:email', async (req, res) => {
//             try {
//                 const donatorEmail = req.params.email;
//                 const donations = await donationCampaignsCollection.aggregate([
//                     { $unwind: "$donators" },
//                     { $match: { "donators.email": donatorEmail } },
//                     {
//                         $project: {
//                             _id: "$donators._id",
//                             campaignId: "$_id",
//                             petName: "$petName",
//                             petPicture: "$petPicture",
//                             donationAmount: "$donators.amount",
//                             donatedAt: "$donators.donatedAt"
//                         }
//                     }
//                 ]).toArray();
//                 res.status(200).json(donations);
//             } catch (error) {
//                 console.error("GET /my-donations/:email error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });

//         // 🆕 NEW Route: Process a refund
//         app.patch('/donation-campaigns/refund/:campaignId', async (req, res) => {
//             try {
//                 const campaignId = req.params.campaignId;
//                 const { donationId } = req.body;
                
//                 const campaign = await donationCampaignsCollection.findOne({
//                     _id: new ObjectId(campaignId),
//                     "donators._id": new ObjectId(donationId)
//                 });
//                 if (!campaign) {
//                     return res.status(404).json({ message: "Donation not found" });
//                 }

//                    const donationToRefund = campaign.donators.find(d => d._id.toString() === donationId);
//                 const refundAmount = donationToRefund.amount;

//                 const result = await donationCampaignsCollection.updateOne(
//                     { _id: new ObjectId(campaignId) },
//                     {
//                         $inc: { donatedAmount: -refundAmount },
//                         $pull: { donators: { _id: new ObjectId(donationId) } }
//                     }
//                 );

//                 if (result.modifiedCount > 0) {
//                     res.status(200).json({ message: 'Refund processed successfully' });
//                 } else {
//                     res.status(404).json({ message: 'Campaign or donation not found' });
//                 }
//             } catch (error) {
//                 console.error("PATCH /donation-campaigns/refund/:campaignId error:", error);
//                 res.status(500).send({ error: "Internal Server Error" });
//             }
//         });
//         // Root route
//         app.get('/', (req, res) => {
//             res.send('Pet Server is running');
//         });

//         app.listen(port, () => {
//             console.log(`🚀 Server is running on http://localhost:${port}`);
//         });

//     } catch (err) {
//         console.error("❌ MongoDB connection error:", err);
//     }
// }

// run().catch(console.dir);

//gemni



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        //await client.connect();
        console.log("✅ Connected to MongoDB");

        const db = client.db("DBpet's");
        const usersCollection = db.collection("users");
        const petsCollection = db.collection("pets");
        const donationCampaignsCollection = db.collection("donation-campaigns");
        const adoptionRequestsCollection = db.collection("adoptionRequests");
        
        // ... (existing routes for users, pets, etc.)

        // Users routes
        app.post('/users', async (req, res) => {
            try {
                const user = req.body;
                const query = { email: user.email };
                const existingUser = await usersCollection.findOne(query);
                if (existingUser) {
                    return res.status(200).json({ message: 'User already exists' });
                }
                const result = await usersCollection.insertOne({ ...user, role: 'user' });
                res.status(201).json(result);
            } catch (error) {
                console.error("POST /users error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/all-users', async (req, res) => {
            try {
                const users = await usersCollection.find({}).toArray();
                res.send(users);
            } catch (err) {
                console.error(err);
                res.status(500).send({ error: "Internal server error" });
            }
        });

        app.patch('/users/make-admin/:id', async (req, res) => {
            const id = req.params.id;
            try {
                const result = await usersCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: { role: 'admin' } }
                );
                res.send(result);
            } catch (err) {
                console.error(err);
                res.status(500).send({ error: "Internal server error" });
            }
        });

        app.get('/users/:email', async (req, res) => {
            try {
                const email = req.params.email;
                const user = await usersCollection.findOne({ email });
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                const userData = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    photo: user.photo || user.photoURL || null,
                    role: user.role || 'user'
                };
                res.status(200).json(userData);
            } catch (error) {
                console.error("GET /users/:email error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/users/admin/:email', async (req, res) => {
            const email = req.params.email;
            const user = await usersCollection.findOne({ email });
            res.send({ admin: user?.role === 'admin' });
        });
        
        // Pets routes
        app.post('/all-pets', async (req, res) => {
            try {
                const pet = req.body;
                const petWithStatus = {
                    ...pet,
                    addedAt: new Date(),
                    adopted: false
                };
                const result = await petsCollection.insertOne(petWithStatus);
                res.status(201).json(result);
            } catch (error) {
                console.error("POST /all-pets error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/my-added-pets/:email', async (req, res) => {
            try {
                const ownerEmail = req.params.email;
                const pets = await petsCollection.find({ ownerEmail }).toArray();
                res.send(pets);
            } catch (error) {
                console.error("GET /my-added-pets/:email error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.delete('/all-pets/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await petsCollection.deleteOne(query);
                if (result.deletedCount === 1) {
                    res.status(200).json({ message: "Pet deleted successfully" });
                } else {
                    res.status(404).json({ message: "Pet not found" });
                }
            } catch (error) {
                console.error("DELETE /all-pets/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.patch('/all-pets/:id', async (req, res) => {
            const { id } = req.params;
            const updateData = req.body;

            try {
                const result = await petsCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: updateData }
                );
                if (result.modifiedCount > 0) {
                    res.status(200).json({ message: 'Pet updated successfully' });
                } else {
                    res.status(404).json({ message: 'Pet not found or no changes made' });
                }
            } catch (err) {
                res.status(500).json({ message: 'Error updating pet', error: err.message });
            }
        });

        app.patch('/all-pets/adopt/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const updateDoc = { $set: { adopted: true } };
                const result = await petsCollection.updateOne(query, updateDoc);
                if (result.matchedCount === 1) {
                    res.status(200).json({ message: "Pet marked as adopted" });
                } else {
                    res.status(404).json({ message: "Pet not found" });
                }
            } catch (error) {
                console.error("PATCH /all-pets/adopt/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/all-pets/pet-details/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const pet = await petsCollection.findOne({ _id: new ObjectId(id) });
                if (!pet) {
                    return res.status(404).json({ message: 'Pet not found' });
                }
                res.status(200).json(pet);
            } catch (error) {
                console.error("GET /all-pets/pet-details/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/all-pets/unadopted', async (req, res) => {
            try {
                const { page = 0, limit = 9, search = '', category = '' } = req.query;
                const pageNumber = parseInt(page);
                const pageSize = parseInt(limit);
                const skip = pageNumber * pageSize;

                const query = {
                    adopted: false,
                    petName: { $regex: search, $options: 'i' },
                };

                if (category) {
                    query.petCategory = category;
                }

                const pets = await petsCollection
                    .find(query)
                    .sort({ addedAt: -1 })
                    .skip(skip)
                    .limit(pageSize)
                    .toArray();

                res.status(200).json(pets);
            } catch (error) {
                console.error("GET /all-pets/unadopted error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        // Adoption requests
        app.post('/adoption-requests', async (req, res) => {
            try {
                const adoptionRequest = req.body;
                const result = await adoptionRequestsCollection.insertOne(adoptionRequest);
                res.status(201).json(result);
            } catch (error) {
                console.error("POST /adoption-requests error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        // Donation campaigns routes
        app.post('/donation-campaigns', async (req, res) => {
            try {
                const campaign = req.body;
                const campaignWithTimestamp = {
                    ...campaign,
                    createdAt: new Date(),
                    lastDate: new Date(campaign.lastDate),
                    donatedAmount: 0,
                    paused: false,
                    donators: []
                };
                const result = await donationCampaignsCollection.insertOne(campaignWithTimestamp);
                res.status(201).json(result);
            } catch (error) {
                console.error("POST /donation-campaigns error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/donation-campaigns', async (req, res) => {
            try {
                const { page = 1, limit = 9 } = req.query;
                const pageNumber = parseInt(page);
                const pageSize = parseInt(limit);
                const skip = (pageNumber - 1) * pageSize;

                const totalCampaigns = await donationCampaignsCollection.countDocuments();
                const campaigns = await donationCampaignsCollection
                    .find({})
                    .sort({ createdAt: -1 })
                    .skip(skip)
                    .limit(pageSize)
                    .toArray();

                res.status(200).json({
                    campaigns,
                    total: totalCampaigns,
                    page: pageNumber,
                    pages: Math.ceil(totalCampaigns / pageSize),
                });
            } catch (error) {
                console.error("GET /donation-campaigns error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/donation-campaigns/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) });
                if (!campaign) {
                    return res.status(404).json({ message: 'Donation campaign not found' });
                }
                res.status(200).json(campaign);
            } catch (error) {
                console.error("GET /donation-campaigns/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/donation-campaigns/recommended/:excludeId', async (req, res) => {
            try {
                const excludeId = req.params.excludeId;
                const recommended = await donationCampaignsCollection
                    .find({ _id: { $ne: new ObjectId(excludeId) } })
                    .limit(3)
                    .toArray();

                res.status(200).json(recommended);
            } catch (error) {
                console.error("GET /donation-campaigns/recommended error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        
  // 🆕 NEW Route: Get all donations for a specific user email
        
        
        
        
        app.post('/donation-campaigns/donate/:id', async (req, res) => {
  const campaignId = req.params.id;
  const { amount, donatorName, donatorEmail } = req.body;

  try {
    const result = await donationCampaignsCollection.updateOne(
      { _id: new ObjectId(campaignId) },
      {
        $inc: { donatedAmount: amount },
        $push: {
          donators: {
            _id: new ObjectId(), // Add this line
            donatorName,
            donatorEmail,
            amount,
            donatedAt: new Date(),
          },
        },
      }
    );

    res.status(200).send({ message: 'Donation recorded successfully' });
  } catch (error) {
    console.error('Donation update error:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});





        // In your Express.js server file
app.get('/my-donations/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const donations = await donationCampaignsCollection.aggregate([
            { $unwind: "$donators" },
            { $match: { "donators.donatorEmail": email } }, // This line needs to be correct
            {
                $project: {
                    _id: "$donators._id",
                    campaignId: "$_id",
                    petPicture: "$petPicture",
                    petName: "$petName",
                    donationAmount: "$donators.amount",
                    donatedAt: "$donators.donatedAt"
                }
            }
        ]).toArray();
        res.send(donations);
    } catch (error) {
        console.error("GET /my-donations/:email error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

        // 🆕 NEW Route: Process a refund
        app.patch('/donation-campaigns/refund/:campaignId', async (req, res) => {
            try {
                const campaignId = req.params.campaignId;
                const { donationId } = req.body;
                
                const campaign = await donationCampaignsCollection.findOne({
                    _id: new ObjectId(campaignId),
                    "donators._id": new ObjectId(donationId)
                });
                if (!campaign) {
                    return res.status(404).json({ message: "Donation not found" });
                }
                
                const donationToRefund = campaign.donators.find(d => d._id.toString() === donationId);
                const refundAmount = donationToRefund.amount;

                const result = await donationCampaignsCollection.updateOne(
                    { _id: new ObjectId(campaignId) },
                    {
                        $inc: { donatedAmount: -refundAmount },
                        $pull: { donators: { _id: new ObjectId(donationId) } }
                    }
                );

                if (result.modifiedCount > 0) {
                    res.status(200).json({ message: 'Refund processed successfully' });
                } else {
                    res.status(404).json({ message: 'Campaign or donation not found' });
                }
            } catch (error) {
                console.error("PATCH /donation-campaigns/refund/:campaignId error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.get('/my-donation-campaigns/:email', async (req, res) => {
            try {
                const creatorEmail = req.params.email;
                const campaigns = await donationCampaignsCollection.find({ createdBy: creatorEmail }).toArray();
                res.status(200).json(campaigns);
            } catch (error) {
                console.error("GET /my-donation-campaigns error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.patch('/donation-campaigns/:id/pause', async (req, res) => {
            const { id } = req.params;
            const { paused } = req.body;
            try {
                const result = await donationCampaignsCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: { paused: paused } }
                );
                if (result.modifiedCount > 0) {
                    res.status(200).json({ message: `Campaign ${paused ? 'paused' : 'unpaused'}` });
                } else {
                    res.status(404).json({ message: 'Campaign not found or already updated' });
                }
            } catch (error) {
                console.error("PATCH /donation-campaigns/:id/pause error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

         // 2. Admin will be able to delete, edit, and pause any donation campaign
        app.delete('/donation-campaigns/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await donationCampaignsCollection.deleteOne(query);
                if (result.deletedCount === 1) {
                    res.status(200).json({ message: "Campaign deleted successfully" });
                } else {
                    res.status(404).json({ message: "Campaign not found" });
                }
            } catch (error) {
                console.error("DELETE /donation-campaigns/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });
        app.get('/donation-campaigns/edit/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) });
                if (!campaign) {
                    return res.status(404).json({ message: 'Campaign not found' });
                }
                res.status(200).json(campaign);
            } catch (error) {
                console.error("GET /donation-campaigns/edit/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        app.put('/donation-campaigns/:id', async (req, res) => {
            const { id } = req.params;
            const updateData = req.body;

            if (updateData._id) {
                delete updateData._id;
            }

            try {
                const result = await donationCampaignsCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: updateData }
                );
                if (result.modifiedCount > 0) {
                    res.status(200).json({ success: true, message: 'Campaign updated successfully' });
                } else {
                    res.status(404).json({ success: false, message: 'Campaign not found or no changes made' });
                }
            } catch (error) {
                console.error("PUT /donation-campaigns/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });
        
        app.get('/donation-campaigns/:id/donators', async (req, res) => {
            try {
                const id = req.params.id;
                const campaign = await donationCampaignsCollection.findOne(
                    { _id: new ObjectId(id) },
                    { projection: { donators: 1 } }
                );
                if (!campaign) {
                    return res.status(404).json({ message: 'Campaign not found' });
                }
                res.status(200).json(campaign.donators || []);
            } catch (error) {
                console.error("GET /donation-campaigns/:id/donators error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });


        // Donation campaigns routes
        
        // 🆕 NEW Route: Get donation campaigns for the logged-in user [cite: 544]
        app.get('/my-donation-campaigns/:email', async (req, res) => {
            try {
                const creatorEmail = req.params.email;
                const campaigns = await donationCampaignsCollection.find({ createdBy: creatorEmail }).toArray();
                res.status(200).json(campaigns);
            } catch (error) {
                console.error("GET /my-donation-campaigns error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        // 🆕 NEW Route: Pause/Unpause a donation campaign [cite: 546]
        app.patch('/donation-campaigns/:id/pause', async (req, res) => {
            const { id } = req.params;
            const { paused } = req.body;
            try {
                const result = await donationCampaignsCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: { paused: paused } }
                );
                if (result.modifiedCount > 0) {
                    res.status(200).json({ message: `Campaign ${paused ? 'paused' : 'unpaused'}` });
                } else {
                    res.status(404).json({ message: 'Campaign not found or already updated' });
                }
            } catch (error) {
                console.error("PATCH /donation-campaigns/:id/pause error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        // 🆕 NEW Route: Get details of a single campaign for editing [cite: 550]
        app.get('/donation-campaigns/edit/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(id) });
                if (!campaign) {
                    return res.status(404).json({ message: 'Campaign not found' });
                }
                res.status(200).json(campaign);
            } catch (error) {
                console.error("GET /donation-campaigns/edit/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        // 🆕 NEW Route: Update a donation campaign [cite: 553]
        app.put('/donation-campaigns/:id', async (req, res) => {
            const { id } = req.params;
            const updateData = req.body;

            if (updateData._id) {
                delete updateData._id;
            }

            try {
                const result = await donationCampaignsCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: updateData }
                );
                if (result.modifiedCount > 0) {
                    res.status(200).json({ success: true, message: 'Campaign updated successfully' });
                } else {
                    res.status(404).json({ success: false, message: 'Campaign not found or no changes made' });
                }
            } catch (error) {
                console.error("PUT /donation-campaigns/:id error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        // 🆕 NEW Route: Get donators for a specific campaign [cite: 557]
        app.get('/donation-campaigns/:id/donators', async (req, res) => {
            try {
                const id = req.params.id;
                const campaign = await donationCampaignsCollection.findOne(
                    { _id: new ObjectId(id) },
                    { projection: { donators: 1 } }
                );
                if (!campaign) {
                    return res.status(404).json({ message: 'Campaign not found' });
                }
                res.status(200).json(campaign.donators || []);
            } catch (error) {
                console.error("GET /donation-campaigns/:id/donators error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });






         // This is the new route to get a user's donations.
        app.get('/my-donations/:email', async (req, res) => {
            try {
                const email = req.params.email;
                const donations = await donationCampaignsCollection.aggregate([
                    { $unwind: "$donators" },
                    { $match: { "donators.donatorEmail": email } },
                    {
                        $project: {
                            _id: "$donators._id",
                            campaignId: "$_id",
                            petPicture: "$petPicture",
                            petName: "$petName",
                            donationAmount: "$donators.amount",
                            donatedAt: "$donators.donatedAt"
                        }
                    }
                ]).toArray();
                res.send(donations);
                 } catch (error) {
                console.error("GET /my-donations/:email error:", error);
                res.status(500).send({ error: "Internal Server Error" });
            }
        });

        // This is the new/completed refund route
        app.patch('/donation-campaigns/refund/:campaignId', async (req, res) => {
            const { campaignId } = req.params;
            const { donationId } = req.body;
            
            if (!campaignId || !donationId) {
                return res.status(400).json({ message: 'Campaign ID and Donation ID are required.' });
            }
                 try {
                const campaign = await donationCampaignsCollection.findOne({ _id: new ObjectId(campaignId) });
                if (!campaign) {
                    return res.status(404).json({ message: 'Donation campaign not found.' });
                }
                
                const donationToRefund = campaign.donators.find(d => d._id.toString() === donationId);
                if (!donationToRefund) {
                    return res.status(404).json({ message: 'Donation not found in this campaign.' });
                }
                  
                const refundAmount = donationToRefund.amount;
                
                const result = await donationCampaignsCollection.updateOne(
                    { _id: new ObjectId(campaignId) },
                    { 
                        $pull: { donators: { _id: new ObjectId(donationId) } },
                        $inc: { donatedAmount: -refundAmount }
                    }
                );
                if (result.modifiedCount > 0) {
                    res.status(200).json({ message: 'Donation refunded successfully.' });
                } else {
                    res.status(500).json({ message: 'Failed to process refund. No changes made.' });
                }
                
            } catch (error) {
                console.error('Error processing refund:', error);
                res.status(500).json({ message: 'Internal Server Error', error: error.message });
            }
        });



        //111
        app.get('/my-adoption-requests/:email', async (req, res) => {
    try {
        const ownerEmail = req.params.email;
        const requests = await adoptionRequestsCollection.find({ petOwnerEmail: ownerEmail }).toArray();
        res.status(200).json(requests);
    } catch (error) {
        console.error("GET /my-adoption-requests/:email error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

//222
app.patch('/adoption-requests/accept/:id', async (req, res) => {
    const requestId = req.params.id;
    const { petId } = req.body;

    try {
        // 1. Update the status of the adoption request
        const requestUpdateResult = await adoptionRequestsCollection.updateOne(
            { _id: new ObjectId(requestId) },
            { $set: { status: 'accepted' } }
        );

        // 2. Update the pet's adopted status
        const petUpdateResult = await petsCollection.updateOne(
            { _id: new ObjectId(petId) },
            { $set: { adopted: true } }
        );

        if (requestUpdateResult.modifiedCount > 0 && petUpdateResult.modifiedCount > 0) {
            res.status(200).json({ message: 'Adoption request accepted and pet marked as adopted successfully' });
        } else {
            res.status(404).json({ message: 'Request or pet not found' });
        }
    } catch (error) {
        console.error("PATCH /adoption-requests/accept/:id error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
//33
app.patch('/adoption-requests/reject/:id', async (req, res) => {
    const requestId = req.params.id;

    try {
        const result = await adoptionRequestsCollection.updateOne(
            { _id: new ObjectId(requestId) },
            { $set: { status: 'rejected' } }
        );
        
        if (result.modifiedCount > 0) {
            res.status(200).json({ message: 'Adoption request rejected successfully' });
        } else {
            res.status(404).json({ message: 'Request not found' });
        }
    } catch (error) {
        console.error("PATCH /adoption-requests/reject/:id error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

// In your Express.js server file
app.get('/all-pets', async (req, res) => {
    try {
        const pets = await petsCollection.find({}).toArray();
        res.send(pets);
    } catch (error) {
        console.error("GET /all-pets error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

// Existing route from the source can be used to update status
app.patch('/all-pets/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    // ... (rest of the code to update the pet) [cite: 263, 264, 265]
});


app.get('/all-donation-campaigns', async (req, res) => {
    try {
        const campaigns = await donationCampaignsCollection.find({}).toArray();
        res.send(campaigns);
    } catch (error) {
        console.error("GET /all-donation-campaigns error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});



        // Root route
        app.get('/', (req, res) => {
            res.send('Pet Server is running');
        });

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });

    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
}

run().catch(console.dir);



