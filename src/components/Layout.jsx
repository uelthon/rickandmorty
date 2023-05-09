import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='w-full'>
        {children}
      </main>
    </>
  )
}

export default Layout
