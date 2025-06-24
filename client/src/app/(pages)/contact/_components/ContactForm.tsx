"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { formType } from "@/types";
import { onSubmit } from "@/utils/formData";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitButton } from "@/components/blocks/buttons/SubmitButton";
import { Alert } from "@/components/blocks/Alert";

const ContactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

const initialValues: formType = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const ErrorMessage = memo(({
    message
}: {
    message?: string
}) => {
    if (!message) return null;
    return <span className="text-red-500 text-sm mt-1 block">{message}</span>;
});

ErrorMessage.displayName = "ErrorMessage";

type FormFieldProps = {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
    rows?: number;
    register: any;
    error?: string;
    disabled?: boolean;
    isTextarea?: boolean;
};

type AlertState = {
    isVisible: boolean;
    type: "success" | "error" | "warning" | "info";
    title?: string;
    message: string;
}

const FormField = memo(({
    id,
    label,
    placeholder,
    type = "text",
    rows,
    register,
    error,
    disabled,
    isTextarea = false
}: FormFieldProps) => {
    const InputComponent = isTextarea ? "textarea" : "input";

    return (
        <div>
            <label
                htmlFor={id}
                className="label"
            >
                {label}
            </label>
            <InputComponent
                {...register(id)}
                type={isTextarea ? undefined : type}
                id={id}
                placeholder={placeholder}
                rows={isTextarea ? rows : undefined}
                className={`input ${isTextarea ? 'resize-none' : ''}`}
                disabled={disabled}
            />
            <ErrorMessage message={error} />
        </div>
    );
});

FormField.displayName = "FormField";

export const ContactForm = memo(() => {
    const [alertState, setAlertState] = useState<AlertState>({
        isVisible: false,
        type: "success",
        message: "",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isValid, isDirty }
    } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(ContactFormSchema),
        mode: "onChange", // Enable real-time validation for better UX
    });

    const showAlert = useCallback((
        type: AlertState["type"],
        message: string,
        title?: string
    ) => {
        setAlertState({
            isVisible: true,
            type,
            message,
            title,
        });
    }, []);

    const hideAlert = useCallback(() => {
        setAlertState(prev => ({
            ...prev,
            isVisible: false,
        }));
    }, []);

    const handleFormSubmit = useCallback(async (data: formType) => {
        try {
            await onSubmit(data);

            showAlert(
                "success",
                "Your message has been sent successfully! I'll get back to you soon.",
                "Message Sent!"
            );

            reset(initialValues);
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong while sending your message. Please try again.";

            showAlert(
                "error",
                errorMessage,
                "Sending Failed"
            );

            console.error('Form submission error:', error);
        }
    }, [reset, showAlert]);

    const onFormSubmit = useCallback(handleSubmit(handleFormSubmit), [handleSubmit]);

    const isButtonDisabled = useMemo(
        () => isSubmitting || !isValid || !isDirty,
        [isSubmitting, isValid, isDirty]
    );

    const buttonText = useMemo(
        () => isSubmitting ? "Sending..." : "Send Message",
        [isSubmitting]
    );

    return <>
        <Alert
            type={alertState.type}
            title={alertState.title}
            message={alertState.message}
            isVisible={alertState.isVisible}
            onDismiss={hideAlert}
            autoDismiss={true}
            autoDismissDelay={6000}
            className="sm:max-w-md"
        />

        <div className="flex-center">
            <form
                onSubmit={onFormSubmit}
                className="w-full text-[#a7a7a7] flex flex-col gap-7 md:pr-0 pr-4"
                noValidate // Disable browser validation since we're using Zod
            >
                <FormField
                    id="name"
                    label="Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.name?.message}
                    disabled={isSubmitting}
                />

                <FormField
                    id="email"
                    label="Email address"
                    type="email"
                    placeholder="example@gmail.com"
                    register={register}
                    error={errors.email?.message}
                    disabled={isSubmitting}
                />

                <FormField
                    id="subject"
                    label="Subject"
                    placeholder="Enter your subject"
                    register={register}
                    error={errors.subject?.message}
                    disabled={isSubmitting}
                />

                <FormField
                    id="message"
                    label="Message"
                    placeholder="Enter your message"
                    isTextarea={true}
                    rows={5}
                    register={register}
                    error={errors.message?.message}
                    disabled={isSubmitting}
                />

                <SubmitButton
                    btnText={buttonText}
                    disabled={isButtonDisabled}
                />

            </form>
        </div>
    </>;
});

ContactForm.displayName = "ContactForm";