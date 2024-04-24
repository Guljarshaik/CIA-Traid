import  express from "express";
import nodemailer from "nodemailer"


const router=express.Router();
router.use(express.json());

router.post('/send-email', async (req, res) => {
    try {
        const  {emailContent,useremail}  = req.body; // Assuming the request body contains 'emailContent'
        console.log(emailContent);
        await sendMail({emailContent,useremail}); // Call the sendMail function with email content
        res.send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send email');
    }
});

// Function to send email
async function sendMail({emailContent,useremail}) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shubhang999454@gmail.com',
            pass: 'scvvqtqaabzhhaun'
        }
    });

    const mailOptions = {
        from: 'shubhang999454@gmail.com',
        to: useremail,
        subject: 'Welcome to NodeJS App',
        text: emailContent, // Use the provided email content here
    };

    await transporter.sendMail(mailOptions); // Send email
    console.log('Email sent successfully');
}





export default router