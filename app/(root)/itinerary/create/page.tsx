"use client";

import React, { useState } from "react";
import MDXEditor from "@/components/MDXEditor";
import { Button, Input } from "@nextui-org/react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import CoverImage from "@/components/CoverImage";

const ItineraryCreate = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const itineraryFormSubmit = useMutation(api.itinerary.create);

  const [itineraryForm, setItineraryForm] = useState({
    destination: "",
    days: "0",
    budget: "0",
    markdown: "# Detailed Plan",
  });

  const handleImageChange = (val: string) => {
    console.log(val);

    setSelectedImage(val!);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setItineraryForm({
      ...itineraryForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(itineraryForm);
    itineraryFormSubmit(itineraryForm);
  };

  return (
    <div className="w-full h-full md:p-10 p-4 md:max-w-5xl">
      <CoverImage value={selectedImage || ""} onChange={handleImageChange} />
      <h1 className="text-3xl font-semibold mb-3">
        Create your own Itinerary plan
      </h1>

      <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
        <Input
          isRequired
          type="text"
          label="Destination"
          name="destination"
          onChange={handleChange}
        />

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            isRequired
            type="number"
            name="days"
            label="Number of Days"
            onChange={handleChange}
          />
          <Input
            name="budget"
            type="number"
            label="Budget"
            placeholder="0.00"
            onChange={handleChange}
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />
        </div>

        <MDXEditor
          markdown={itineraryForm.markdown}
          setItineraryForm={setItineraryForm}
        />

        <Button
          type="submit"
          color="primary"
          className="w-fit self-center mt-3"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ItineraryCreate;
