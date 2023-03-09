export interface ISenderAddress {
  street: string
  city: string
  postCode: string
  country: string
}

export interface IClientAddress {
  street: string
  city: string
  postCode: string
  country: string
}

export interface IItem {
  _id: string
  name: string
  quantity: number
  price: string
  total: string
}

export interface IInvoice {
  senderAddress: ISenderAddress
  clientAddress: IClientAddress
  _id: string
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: string
  clientName: string
  clientEmail: string
  status: string
  items: IItem[]
  total: number
}
