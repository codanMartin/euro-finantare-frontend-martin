"use client";

import FormInputField from "@/components/forms/form-input-field";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/schadcnui/form";
import Button from "@/components/layout/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormFileField from "@/components/forms/form-file-filed";
import { Input } from "@/components/schadcnui/input";

const formSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Numele este obligatoriu" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Numele trebuie să conțină doar caractere alfabetice" }),
    email: z.string().email({ message: "Adresa de email nu este validă" }),
    telefon: z
        .string()
        .min(10, { message: "Numărul de telefon trebuie să aibă cel puțin 10 cifre" })
        .regex(/^\d+$/, { message: "Numărul de telefon trebuie să conțină doar cifre" }),
    file: z
        .any()
        .refine((fileList) => fileList.length > 0, {
            message: "Fisierul nu a fost incarcat.",
        })
        // Validate each file in the FileList
        .refine(
            (fileList) => {
                for (let i = 0; i < fileList.length; i++) {
                    const file = fileList.item(i);
                    console.log(file);
                    if (file) {
                        if (file.size > 5 * 1024 * 1024) return false;
                        if (file.type !== "application/pdf") return false;
                    }
                }
                return true;
            },
            {
                message: `Fisierul trebuie sa fie de tip PDF cu o marime mai mica decat 5MB.`,
            },
        ),
});

const FormSection = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: { name: "", email: "", telefon: "", file: undefined },
    });

    const fileRef = form.register("file", { required: true });

    function onSubmit(values) {
        console.log();
        console.log(values);
    }

    return (
        <div className="flex flex-col items-center space-y-4 px-8 py-16 shadow md:px-16">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid w-full max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2">
                    <h2 className="col-span-1 max-w-screen-md text-2xl font-bold sm:col-span-2">
                        Proin aliquam laoreet.
                    </h2>
                    <div className={"col-span-1"}>
                        <FormInputField form={form} name={"name"} label={"Nume"} placeholder={""} />
                    </div>
                    <div className={"col-span-1"}>
                        <FormInputField
                            form={form}
                            name={"telefon"}
                            label={"Telefon"}
                            placeholder={""}
                        />
                    </div>
                    <div className={"col-span-1 sm:col-span-2"}>
                        <FormInputField
                            form={form}
                            name={"email"}
                            label={"Email"}
                            placeholder={""}
                        />
                    </div>
                    <div className={"col-span-1 sm:col-span-2"}>
                        <FormField
                            control={form.control}
                            name="file"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={"font-semibold"}>
                                        Bilantul Companiei
                                    </FormLabel>
                                    <FormControl>
                                        <Input type="file" accept="application/pdf" {...fileRef} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={"col-span-1 flex justify-end sm:col-span-2"}>
                        <Button type={"submit"} action={() => false} text={"Lorem ipsum!"} />
                    </div>
                </form>
            </Form>
        </div>
    );
};
export default FormSection;
