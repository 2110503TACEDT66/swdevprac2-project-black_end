"use client"

import Card from "./Card";
import { useReducer, useState } from "react";
import Link from "next/link";
import { useRef,useEffect } from "react";
import getCompanies from "@/libs/getCompanies";

export default function CardPanel() {

  const [hospitalResponse,setHospitalResponse] = useState<HospitalJson | null>(null)

  useEffect(()=>{
    const fetchData = async ()=>{
      const hospitals = await getCompanies();
      setHospitalResponse(hospitals) 
    }
    fetchData()
  },[])


  // const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);


  //reducer function for rating
  const compareReducer = (
    compareList: Map<string, number>,
    action: { type: string; hospitalName: string; rating: number }
  ) => {
    switch (action.type) {
      case "add": {
        const updatedMap = new Map(compareList);
        updatedMap.set(action.hospitalName,action.rating);
        return updatedMap;
      }
      case "remove": {
        const updatedMap = new Map(compareList);
        updatedMap.delete(action.hospitalName);
        return updatedMap;
      }
      default:
        return compareList;
    }
  };
  //initial state
  const initial = new Map();
  // initial.set('Chulalongkorn Hospital', 5);
  // initial.set('Rajavithi Hospital', 5);
  // initial.set('Thammasat University Hospital', 5);

  
  //call use reducer
  const [compareList, dispatchCompare] = useReducer(compareReducer, initial);

  //dynamic routing
  //Mock Data for Democstration Only

  // const mockHospitalRepo = [
  //   {
  //     hid: "001",
  //     hospitalName: "Chulalongkorn Hospital",
  //     image: "/img/chula.jpg",
  //   },
  //   {
  //     hid: "002",
  //     hospitalName: "Rajavithi Hospital",
  //     image: "/img/rajavithi.jpg",
  //   },
  //   {
  //     hid: "003",
  //     hospitalName: "Thammasat University Hospital",
  //     image: "/img/thammasat.jpg",
  //   },
  // ];

  //loading screen before complete render
  if(!hospitalResponse) return <p>Hospital panel is Loading ...</p>

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {
        hospitalResponse.data.map( (HospitalItem) => (
          <Link href={`/hospital/${HospitalItem.id}`} className="w-1/5" key={HospitalItem.id}>
            <Card
              hospitalName={HospitalItem.name}
              imgSrc={HospitalItem.picture}
              onCompare={(hospitalName: string,rating:number) => {
                dispatchCompare({ type: "add", hospitalName: hospitalName ,rating: rating});
              }}
            />
          </Link>
        ))}
      </div>
      <div className="w-full text-xl font-medium">
        CompareList :{compareList.size}
      </div>
      {Array.from(compareList).map(([hospitalName, rating]) => (
        <div
          key={hospitalName}
          data-testid={`${hospitalName}`}
          onClick={() =>
            dispatchCompare({
              type: "remove",
              hospitalName: hospitalName,
              rating: 0,
            })
          }
        >
          {hospitalName} : {rating}
        </div>
      ))}
      {/* <button className="block rounded-md bg-cyan-600 hover:bg-indigo-600 px-3 py-2
        text-gray shadow-sm" onClick={()=>{ countRef.current++;alert(countRef.current);}}>
          Count with Ref
      </button> */}
      <input type='text' placeholder="please fill this" className="
        block text-gray-600 text-sm rounded-lg p-2m-2 bg-purple ring-1
        ring-inset ring-purple-200 focus:outline-none focus:bg-purple-200 focus-ring-2"
        ref={inputRef}/>
      <button className="block rounded-md bg-cyan-600 hover:bg-indigo-600 px-3 py-2
        text-gray shadow-sm" onClick={()=>{if(inputRef.current != null)inputRef.current.focus()}}>
         Focus input
      </button>
    </div>
  );
}
