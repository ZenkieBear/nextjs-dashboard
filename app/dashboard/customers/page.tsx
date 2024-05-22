import { fetchFilteredCustomers } from "@/app/lib/data"
import Table from "@/app/ui/customers/table"
import { lusitana } from "@/app/ui/fonts"
import Search from "@/app/ui/search"
import { CustomersTableSkeleton } from "@/app/ui/skeletons"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: 'Customers'
}
const page = async ({ searchParams }: {
  searchParams: {
    query: string
  }
}) => {

  const query = searchParams?.query || ''
  
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Suspense fallback={<CustomersTableSkeleton />}>
        <Table query={query} />
      </Suspense>
    </div>
  )
}

export default page
