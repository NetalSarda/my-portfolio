"use client";
import Hero from "@/components/Home/Hero";
import PreLoaderComponent from "@/components/PreLoader/PreLoaderComponent";
import { useConfig } from "@/contexts/ConfigContext";
import { useState } from "react";

export default function Page() {
  const { clicked } = useConfig();
  return <Hero />;
}
