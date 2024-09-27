import React from 'react'
import profilePic from '../assets/profilePic.png'
import {FaSearch} from "react-icons/fa"
const navbar = () => {
  return (
    <div className='px-8 pt-5 flex items-start justify-between'>
        <div>
            <p className='text-[2.0625em] font-medium text-white'>Student Feedback</p>
            <p className='text-[#d5cefd] text-sm font-normal'>manage all your student feedback in one place</p>
        </div>

        <div className='flex gap-4 items-center justify-between'>
            <div className='w-80 text-sm flex flex-row items-center content-center border border-white border-opacity-15 rounded-3xl bg-[#131429] px-3 py-2'>
                <FaSearch id="search-icon" className='w-4 text-[#71717A] mr-2' />
                <input type="text" placeholder="Search"  className='bg-transparent text-white h-fit'/>
            </div>
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8885 15.5509L14.1688 12.1115C14.0988 11.9915 14.0688 11.8525 14.0688 11.7025V9.04195C14.0688 6.05246 11.8692 3.56385 8.99964 3.09393V1.87612C8.99964 1.32422 8.55276 0.876282 7.9998 0.876282C7.44688 0.876282 6.99996 1.32422 6.99996 1.87612V3.09388C4.13042 3.5638 1.93077 6.05246 1.93077 9.04195V11.7025C1.93077 11.8525 1.90077 11.9915 1.83079 12.1115L0.111045 15.5509C-0.0488909 15.8608 -0.0289229 16.2318 0.151077 16.5217C0.331029 16.8217 0.650997 17.0016 1.00092 17.0016H14.9987C15.3486 17.0016 15.6686 16.8216 15.8486 16.5217C16.0285 16.2318 16.0485 15.8608 15.8885 15.5509ZM8.99964 18.5005H4.85032C5.18023 19.9303 6.47004 21.0001 7.9998 21.0001C9.52956 21.0001 10.8193 19.9303 11.1493 18.5005H8.99964Z" fill="#BEBBCE"/></svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.39999 12C2.39999 7.24006 6.82806 3.59998 12 3.59998C17.1719 3.59998 21.6 7.24006 21.6 12C21.6 16.7599 17.1719 20.4 12 20.4C11.3839 20.4 10.7806 20.3492 10.1954 20.2519C9.01412 21.1001 7.56443 21.6 5.99999 21.6C5.82283 21.6 5.64701 21.5936 5.47277 21.5809C5.15865 21.5582 4.87928 21.3728 4.73616 21.0923C4.59303 20.8117 4.60697 20.4768 4.7729 20.2091C5.1537 19.5948 5.38045 18.8753 5.39879 18.1018C3.57418 16.5903 2.39999 14.4293 2.39999 12Z" fill="#BEBBCE"/><circle cx="12" cy="12" r="1.2" fill="#0E0F2E"/><ellipse cx="8.40001" cy="12" rx="1.2" ry="1.2" fill="#0E0F2E"/><circle cx="15.6" cy="12" r="1.2" fill="#0E0F2E"/></svg>
            <img src={profilePic} alt="profilePic" />
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.747129 0.997129C1.07663 0.667624 1.61087 0.667624 1.94037 0.997129L5 4.05676L8.05963 0.99713C8.38913 0.667625 8.92337 0.667625 9.25287 0.99713C9.58238 1.32664 9.58238 1.86087 9.25287 2.19037L5.59662 5.84662C5.26712 6.17613 4.73288 6.17613 4.40338 5.84662L0.747129 2.19037C0.417624 1.86087 0.417624 1.32663 0.747129 0.997129Z" fill="#BEBBCE"/></svg>
        </div>
    </div>
  )
}

export default navbar