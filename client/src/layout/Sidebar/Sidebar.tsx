import React from 'react'
import FirstSideBar from '../FsideBar/FirstSideBar';

function Sidebar() {
   const users = [
//  {
//     id: 1,
//     name:"zahid",
//         image: "https://i.pravatar.cc/150?img=12",
//             discription:"hey zahid where are you",


//  },

//   {
//     id: 2,
//     name: "Sara Malik",
//     image: "https://i.pravatar.cc/150?img=32",
//         discription:"hey zahid where are you",

//   },
//   {
//     id: 3,
//     name: "Zain Ahmed",
//     image: "https://i.pravatar.cc/150?img=45",
//         discription:"hey zahid where are you",

//   },
//   {
//     id: 4,
//     name: "Hira Noor",
//     discription:"hey zahid where are you",
//     image: "https://i.pravatar.cc/150?img=18",
//   },
  {
    id: 5,
    name: "Zahid hussain",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },
    {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=12",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },  {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },
    {
    id: 5,
    name: "Usman Ali",
        discription:"hey zahid where are you right now and what are you doing",

    image: "https://i.pravatar.cc/150?img=7",
  },
];

  return (
    <div className=' space-y-8 w-96  bg-neutral-100 border-r'>
       <div className='flex justify-between'>
            <h1 className='font-extrabold'> chat </h1>
            <h1 className='font-extrabold'> chat </h1>

            
            


          </div>
          <div>
            <input type="text"
            placeholder='search'
            className='border w-96 px-6 py-3 '
            />
          </div>
          <div className='flex m-3 space-x-4'>
            {/* tags */}
            <div className=' hover:bg-amber-100 cursor-pointer border rounded-lg px-5'>
               Call
            </div>
            <div className='hover:bg-amber-100 cursor-pointer border rounded-lg px-5'>
               unRead
            </div>
            <div className='hover:bg-amber-100 cursor-pointer  border rounded-lg px-5'>
                Groups
            </div>
            
          </div>
        {users.map((user) => (
          <div>
         
          
            <div key={user.id} className='  '>
             



                <div className='flex space-x-4 w-96  border-b-2  '>

                <img className='h-20 w-20 rounded-full' src={user.image} alt="user-image" />
                <div>

                <p className='font-bold text-2xl'>{user.name}</p>
                <p className=''>{user.discription}</p>
                </div>

                </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Sidebar