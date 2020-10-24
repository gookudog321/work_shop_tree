
import React from 'react'
import RoomsFiler from './RoomFilter'
import RoomsList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading,sortedRooms, rooms} = context
    if(loading){
                    return<Loading />
                }
                return (
                    <>
                    <RoomsFiler rooms={rooms}/>
                    <RoomsList rooms={sortedRooms} />
                </>
)}
export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomsFiler from './RoomFilter'
// import RoomsList from './RoomList'
// import {RoomConsumer, RoomsConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
// {
//     value => {
//        const {loading,sortedRooms, rooms} = value
//         if(loading){
//             return<Loading />
//         }
//         return (
//             <div>
//             hello from rooms conatiner
//             <RoomsFiler rooms={rooms}/>
//             <RoomsList rooms={sortedRooms} />
//         </div>
//         )
//     }
// }
//         </RoomConsumer>
//     )
// }
