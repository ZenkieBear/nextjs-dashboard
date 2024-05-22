import { fetchFilteredCustomers } from "@/app/lib/data"
import Table from "@/app/ui/customers/table"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Customers'
}
const page = async () => {
  const customers = await fetchFilteredCustomers("")
  return <Table customers={customers} />
}

export default page
