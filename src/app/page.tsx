"use client";

import Image from "next/image";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CldUploadButton uploadPreset="dxz6u7g4y" />

              <CldImage
        width="960"
        height="600"
        src="https://res.cloudinary.com/dxz6u7g4y/image/upload/v1709210946/WhatsApp_Image_2024-01-19_at_8.15.56_PM_tjo2mw.jpg"
        sizes="100vw"
        alt="Description of my image"
/>


  
    </main>
  );
}



