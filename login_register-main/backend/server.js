const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./mongoDB/mongodb");
const User = require('./mongoDB/user');
const cors=require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(express.json()); // middleware for passing JSON
app.use(cors(corsOptions))

connectDB();

app.listen(port, () => {
    console.log("Server is listening on port 8000");
});

// Assuming you create a router
const router = express.Router();

app.use('/api', router); // Use the router with a base path

// router.post('/register', async (req, res) => {
//     try {
//         const {
//             Select_your_organization_type,
//             Name_of_your_organization,
//             PAN_Card,
//             Email_ID,
//             Phone_number,
//             Password,
//             Confirm_Password,
//         } = req.body;

//         // Check if passwords match
//         if (Password !== Confirm_Password) {
//             return res.status(400).json({ error: "Passwords don't match" });
//         }

//         // Create a new organization instance
//         const newOrganization = new Organization({
//             Select_your_organization_type,
//             Name_of_your_organization,
//             PAN_Card,
//             Email_ID,
//             Phone_number,
//             Password,
//         });

//         // Save the organization to the database
//         await newOrganization.save();

//         // Respond with a success message
//         res.status(201).json({ message: 'Organization registered successfully' });
//     } catch (error) {
//         // Handle any errors that occur during registration
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

router.post('/register', async (req, res) => {
    const {
        Select_your_organization_type,
        Name_of_your_organization,
        PAN_Card,
        Email_ID,
        Phone_number,
        Password,
        Confirm_Password
    } = req.body;

    // Check if passwords match
    if (Password !== Confirm_Password) {
        return res.status(400).json({ error: "Passwords don't match" });
    }

    try {
        
        //Saving the Organization to db
        const newOrganization= await User.create({
            Select_your_organization_type,
            Name_of_your_organization,
            PAN_Card,
            Email_ID,
            Phone_number,
            Password,
            Confirm_Password
        })

        // Respond with a success message
        res.status(201).json({ message: 'Organization registered successfully' });
    } catch (error) {
        // Handle any errors that occur during registration
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { Email_ID, Password } = req.body;

        // Check if the user with the provided email exists
        const user = await User.findOne({ Email_ID });

        // If the user does not exist, return an error
        if (!user) {
            return res.status(401).json({ error: 'Invalid Email or Password' });
        }

        // Check if the provided password matches the stored password
        if (Password !== user.Password) {
            return res.status(401).json({ error: 'Invalid Email or Password' });
        }

        // Respond with a success message or a token for authentication
        res.status(200).json({ message: 'Login successful' });
        // res.redirect('/api/profile')
    } catch (error) {
        // Handle any errors that occur during login
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



//UserInfo route

router.post('/profile',async(req,res)=>{
    const {Email_ID}=req.body;
    try{
        const currentUser=await User.findOne({Email_ID:Email_ID})
        if(!currentUser) return res.json({msg:"User not found"})
        res.json(currentUser)
    }
    catch{
        res.sendStatus(500)
    }
})