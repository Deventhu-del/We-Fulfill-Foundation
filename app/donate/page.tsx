"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import sha256 from "crypto-js/sha256";
import { redirect } from "next/navigation";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .min(10, "Mobile number must have at least 10 digits"),
  amount: z.string().min(1, "Amount is required"),
});

const page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      mobile: "",
      amount: "",
    },
  });

  const makeDonation = async (values: z.infer<typeof FormSchema>) => {
    const data = {
      name: values.name,
      mobile: values.mobile,
      amount: values.amount,
    };

    const transactionid = "WFF-" + uuidv4().toString(36).slice(-6);

    const payload = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      merchantTransactionId: transactionid,
      merchantUserId: "MUID-" + uuidv4().toString(36).slice(-6),
      amount: 1000,
      redirectUrl: "https://webhook.site/callback-url",
      redirectMode: "POST",
      callbackUrl: "https://webhook.site/callback-url",
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const dataPayload = JSON.stringify(payload);
    console.log(dataPayload);

    const dataBase64 = Buffer.from(dataPayload).toString("base64");
    console.log(dataBase64);

    const fullURL =
      dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
    const dataSha256 = sha256(fullURL);

    const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
    console.log("c====", checksum);

    const UAT_PAY_API_URL =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const response = await axios.post(
      UAT_PAY_API_URL,
      {
        request: dataBase64,
      },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
      }
    );

    const redirect = response.data.data.instrumentResponse.redirectInfo.url;
    router.push(redirect);
  };

  return (
    <MaxWidthWrapper>
      <div className="fixed left-[50%] top-[50%] z-50 flex translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 rounded-2xl">
        <div className="p-10 w-full h-full">
          <div>
            <h1 className="text-5xl font-bold">Make a Donation</h1>
            <p className="text-xs">
              Every donation, no matter how big or small, makes a significant
              difference to our cause. Thank you for doing your part to help.
            </p>
          </div>
          <div className="mt-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(makeDonation)}
                className="w-full"
              >
                <div className="flex gap-5 w-full justify-between items-center mb-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Rahul Kumar" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="**********" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter amount" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full mt-6 flex gap-2" type="submit">
                  Continue <ArrowRight size={14} />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
