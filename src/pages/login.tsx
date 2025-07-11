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
import { useLogin } from "@/hooks/use-login";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.email({ message: "Please type in a valid email" }),
  password: z.string({ message: "Please type in your password" }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const { loading, login } = useLogin();

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    login(email, password);
  };

  return (
    <div className="h-screen flex items-center justify-center px-[35%]">
      <div className="w-full bg-secondary px-20 py-20 rounded-3xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
        <div className="w-full flex justify-center">
          <Image src={"/next.svg"} alt="logo" width={200} height={40}></Image>
        </div>
        <div className="w-full text-center py-3">
          <h1 className="text-xl">Welcome!</h1>
          <p className="text-sm font-medium text-gray-400">
            Sign in to continue
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 w-[200px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password:</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
