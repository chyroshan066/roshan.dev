"use client";

import { formType } from "@/types";
import { onSubmit } from "@/utils/formData";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export const ContactForm = () => {
    const initialValues: formType = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const ContactFormSchema = z.object({
        name: z.string().nonempty("Name is required"),
        email: z.string().nonempty("Email is required").email("Invalid email"),
        subject: z.string().nonempty("Subject is required"),
        message: z.string().nonempty("Message is required"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(ContactFormSchema),
    });

    useEffect(() => {

    }, [errors]);

    return <>
        <div className="flex-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full text-[#a7a7a7] flex flex-col gap-7"
            >
                <div>
                    <label
                        htmlFor="name"
                        className="label"
                    >
                        Name
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="input"
                    />
                    {errors.name && (<span className="text-red-500">{errors.name.message}</span>)}
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="label"
                    >
                        Email address
                    </label>
                    <input
                        {...register("email")}
                        type="text"
                        id="email"
                        placeholder="example@gmail.com"
                        className="input"
                    />
                    {errors.email && (<span className="text-red-500">{errors.email.message}</span>)}
                </div>
                <div>
                    <label
                        htmlFor="subject"
                        className="label"
                    >
                        Subject
                    </label>
                    <input
                        {...register("subject")}
                        type="text"
                        id="subject"
                        placeholder="Enter your subject"
                        className="input"
                    />
                    {errors.subject && (<span className="text-red-500">{errors.subject.message}</span>)}
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="label"
                    >
                        Message
                    </label>
                    <textarea
                        {...register("message")}
                        id="message"
                        placeholder="Enter your message"
                        rows={5}
                        className="input resize-none"
                    />
                    {errors.message && (<span className="text-red-500">{errors.message.message}</span>)}
                </div>
                <button
                    type="submit"
                    className="cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    </>;
}