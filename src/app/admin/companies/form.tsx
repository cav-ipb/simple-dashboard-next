"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Company } from "@/types/company";

const formSchema = z.object({
  id: z.number(),
  name: z.string().min(2, {
    message: "The company's name must be at least 2 characters.",
  }),
});

export function CompanyForm({
  onSubmit,
  company,
}: {
  onSubmit: (company: Company) => void;
  company: Company | null;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: company,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name:</FormLabel>
              <FormControl>
                <Input placeholder="My awesome company" {...field} />
              </FormControl>
              <FormDescription>The company&apos;s name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
