import { useState } from "react";
import { Poppins } from 'next/font/google';
import { data } from "../components/data/index"
import Image from "next/image";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const DashboardContent = () => {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return(
    <div className={`${poppins.className} w-full`}>
      <div className="flex justify-between">
        <h1 className="text-3xl ml-2 font-bold">Realtor</h1>
        <button className="border px-3 py-1 text-white bg-blue-600 mt-1 rounded-lg border-white font-semibold" onClick={openDialog}>Add Rentals</button>
      </div>
      <div className="flex space-x-10 mt-4 ml-3">
        {data.map((value, index) => (
          <>
          <div key={value}>
            <Image 
              src={value.photo}
              alt="Hello"
              width={800}
              height={800}
              className="rounded-md"
            />
            <h1 key={index} className="font-bold text-lg text-center">{value.title}</h1>
            <p key={index} className="text-md ml-4">{value.description}</p>
          </div>
            </>
        ))}
      </div>
      <div className={`flex ml-8 space-x-10 text-3xl mt-4 mb-8`}>
        {data.map((value, index) => (
            <>
            <div key={value} className={`cursor-pointer`}>
              <Image 
                src={value.photo}
                alt="Hello"
                width={800}
                height={800}
                className="rounded-md"
              />
              <h1 key={index} className="font-bold text-[20px] text-center">{value.title}</h1>
              <p key={index} className="text-[20px] ml-4 text-center">{value.description}</p>
            </div>
              </>
          ))}
      </div>
      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <button className="absolute top-0 right-0 m-4" onClick={closeDialog}>Close</button>
            <h2 className="text-2xl font-bold mb-4">Add Rental</h2>
            {/* Your form for adding rental goes here */}
          </div>
        </div>
      )}
      </div>
  )
}

export default DashboardContent;