import { useReadInvoicesQuery } from '../store/invoices/invoices.api'

const Home = () => {
  const { isLoading, isError, data } = useReadInvoicesQuery('')
  console.log(data)
  if (isError) {
    return (
      <>
        <h1>Error Happened</h1>
      </>
    )
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (data.length > 0) {
    return (
      <>{`Invoice info: ${data[0].description} - ${data[0].status} - ${data[0].id}`}</>
    )
  }

  return <h1>Home</h1>
}

export default Home
