'use client'

import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";


export default async function Hospital() {
  const hospitals = await getHospitals();
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select your hospital</h1>
      
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <HospitalCatalog hospitalJson={hospitals}/>
      </Suspense>
      <hr className="my-10"/>
      <h1 className="text-xl font-medium ">Try Client-side Card Panel</h1>
      <CardPanel/>
    </main>
  );
}
