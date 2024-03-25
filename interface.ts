interface CompanyItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    picture: string,
    __v: number,
    id: string,
    website:string,
    description:string,
    quote:string
  }
  
  interface CompanyJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyItem[]
  }

  interface BookingItem{
    interviewDate:string,
    company:string,
    id:string,
    createAt:string
  }



  
