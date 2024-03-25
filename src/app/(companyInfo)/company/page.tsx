'use client'

import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/CompanyCatalog";
import getCompanies from "@/libs/getCompanies";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";


export default async function Hospital() {
  const companies = await getCompanies();
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select your company</h1>
      
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <HospitalCatalog companyJson={companies}/>
      </Suspense>
      {/* <hr className="my-10"/>
      <h1 className="text-xl font-medium ">Try Client-side Card Panel</h1>
      <CardPanel/> */}
    </main>
  );
}
