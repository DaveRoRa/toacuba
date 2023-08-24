"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "./button";
import axios from "axios";
import { useLeavePageConfirm } from "@/hooks/useLeavePageConfirm";

const TextInput = ({
  label,
  name,
  textarea,
  onChange,
  disabled,
  value,
}: {
  name: string;
  label: string;
  textarea?: boolean;
  value: string;
  onChange: (field: string, value: string) => void;
  disabled?: boolean;
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="mb-[30px] flex flex-col">
      <label
        className={`${disabled && "opacity-70"} text-base text-white font-bold`}
        htmlFor={name}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={handleChange}
          required
          disabled={disabled}
          name={name}
          className="border-[1px] outline-none border-gray-400 py-[10px] px-3 h-[102px]"
        />
      ) : (
        <input
          value={value}
          onChange={handleChange}
          required
          disabled={disabled}
          type={name === "email" ? "email" : "text"}
          name={name}
          className="border-[1px] outline-none border-gray-400 py-[10px] px-3"
        />
      )}
    </div>
  );
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [emailForm, setEmailForm] = useState({
    email: "",
    name: "",
    address: "",
    message: "",
  });
  useLeavePageConfirm(loading, "If you leave now the message won't be sent");

  const handleChange = (field: string, value: string) => {
    setEmailForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async () => {
    if (
      emailForm.email == "" ||
      emailForm.name == "" ||
      emailForm.address == "" ||
      emailForm.message == "" ||
      !emailForm.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return;
    }
    try {
      setLoading(true);
      await toast.promise(
        axios.post("/api/contact-us", emailForm, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
        {
          error: "Error Sending message",
          pending: "Sending Message",
          success: "Message sent successfully",
        }
      );
      setEmailForm({ email: "", name: "", address: "", message: "" });
    } catch (error) {
      console.log("error :>> ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7">
        <TextInput
          disabled={loading}
          onChange={handleChange}
          value={emailForm.email}
          name="email"
          label="Email"
        />
        <TextInput
          disabled={loading}
          onChange={handleChange}
          value={emailForm.name}
          name="name"
          label="Name"
        />
      </div>
      <TextInput
        disabled={loading}
        onChange={handleChange}
        value={emailForm.address}
        name="address"
        label="Address"
      />
      <TextInput
        disabled={loading}
        onChange={handleChange}
        value={emailForm.message}
        textarea
        name="message"
        label="Message"
      />
      <Button
        disabled={loading}
        onClick={onSubmit}
        variant={4}
        className="w-full"
      >
        Submit
      </Button>
    </form>
  );
}
