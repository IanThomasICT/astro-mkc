"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toTitleCase } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { log } from "next-axiom";

type Props = {
  className?: string;
  id?: HTMLDivElement["id"];
};

const formSchema = z.object({
  firstName: z.string().default(""),
  lastName: z.string().default(""),
  email: z.string().email().default("person@example.com"),
  phone: z.string().default(""),
  address: z.string().default(""),
  comments: z.string().default(""),
});

const formObject = formSchema.parse({});

type FormKeys = keyof z.infer<typeof formSchema>;

export default function ContactForm({ className, id }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // do stuff
    log.info("Submitted form", values);
    return;
  };

  return (
    <div id={id} className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
          <div className='grid gap-4 sm:grid-cols-2'>
            <FormInput fieldName='firstName' control={form.control} className='text-sm' />
            <FormInput fieldName='lastName' control={form.control} className='' />
          </div>
          <FormInput fieldName='email' control={form.control} className='' />
          <FormInput fieldName='phone' control={form.control} className='' />
          <TextArea fieldName='comments' control={form.control} />
          <Button type='submit' size={"lg"} className='text-sm sm:text-base'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

const FormInput = ({ fieldName, control, className }: { fieldName: FormKeys; control: Control<z.infer<typeof formSchema>>; className?: string }) => {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem className={className}>
            <FormLabel className='text-lg sm:text-xl'>{toTitleCase(fieldName)}</FormLabel>
            <FormControl>
              <Input className='border border-neutral-200' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

const TextArea = ({ fieldName, control, className }: { fieldName: FormKeys; control: Control<z.infer<typeof formSchema>>; className?: string }) => {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem className={className}>
            <FormLabel className='text-lg sm:text-xl'>{toTitleCase(fieldName)}</FormLabel>
            <FormControl>
              <Textarea className='resize-none border border-neutral-200' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
