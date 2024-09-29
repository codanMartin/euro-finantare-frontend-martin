import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/schadcnui/form";
import FileInput from "@/components/forms/file-input";

export default function FormFileField({ form, name, label }) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={"font-semibold"}>{label}</FormLabel>
                    <FormControl>
                        <FileInput {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
