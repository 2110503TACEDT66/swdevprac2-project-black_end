interface CompanyItem {
    _id: string,
    name: string,
    address: string,
    website:string,
    description:string,
    tel: string,
    quote:string,
    picture: string,
    __v: number,
    id: string,
  }
  
  interface CompanyJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyItem[]
  }

  interface BookingItem{
    id:string,
    company:string,
    interviewDate:string,
    createdAt:Date,
    name:string,
    surname:string
  }

  interface user{
    _id: string,
    name: string,
    tel: string,
    email: string,
    role: string,
    profile_picture: string,
    createdAt: string,
    token: string
  }

  interface userJSON{
    success: string;
    data: user
  }

  
