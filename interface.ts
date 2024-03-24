import { ObjectId } from "mongodb"

interface CompanyItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface CompanyJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyItem[]
  }

  interface InterviewItem{
    interviewDate:string,
    company:string,
    id:string,
    user:ObjectId,
    createAt:string
  }

  // interface UserJson{
  //   name:string,
  //   tel:string,
  //   email:string,
  //   role:string,
  // }

  
