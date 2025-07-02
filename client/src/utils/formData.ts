import { ContactType } from "@/types";
import emailjs from "@emailjs/browser";

interface Email extends Record<string, unknown>  {
    title: string;
    name: string;
    email: string;
    message: string;
    time: string;
}

export const onSubmit = async (data: ContactType) => {
    try{
        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        if (!serviceID || !templateID || !userID) {
            throw new Error('Missing required environment variables');
        }

        const payload: Email = {
            title: data.subject,
            name: data.name,
            email: data.email,
            message: data.message,
            time: new Date().toLocaleString(),
        };

        await emailjs.send(serviceID, templateID, payload, {
            publicKey: userID
        });
    } catch(error) {
        console.log("FAILED...", error);
    }
};