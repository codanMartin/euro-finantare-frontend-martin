import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/schadcnui/form";
import {Input} from "@/components/schadcnui/input";


export default function FormInputField({form, name, label, placeholder}) {

    return(
        <FormField
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel className={"font-semibold"}>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}