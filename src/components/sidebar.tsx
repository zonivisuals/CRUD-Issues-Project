import React from 'react'

const sidebar = () => {
  return (
    <div className='w-60'>
      <div id='sidebar' className='px-4 pt-4 pb-6 flex flex-col justify-start'>

        <div id='sidebar-header' className='flex items-center justify-between' >
          <div id='logo' className='flex gap-2 justify-start items-center'>
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.8125 9.25C7.8125 7.34376 8.56975 5.51559 9.91767 4.16767C11.2656 2.81975 13.0938 2.0625 15 2.0625C16.9062 2.0625 18.7344 2.81975 20.0823 4.16767C21.4302 5.51559 22.1875 7.34376 22.1875 9.25C22.1875 11.1562 21.4302 12.9844 20.0823 14.3323C18.7344 15.6802 16.9062 16.4375 15 16.4375C13.0938 16.4375 11.2656 15.6802 9.91767 14.3323C8.56975 12.9844 7.8125 11.1562 7.8125 9.25ZM12.285 4.6825C11.493 5.1531 10.8371 5.82164 10.3817 6.62245C9.92629 7.42325 9.68705 8.32876 9.6875 9.25C9.6875 11.1912 10.73 12.89 12.285 13.8175C11.825 12.575 11.5625 10.97 11.5625 9.25C11.5625 7.53 11.825 5.925 12.285 4.6825ZM17.715 4.6825C18.507 5.1531 19.1629 5.82164 19.6183 6.62245C20.0737 7.42325 20.3129 8.32876 20.3125 9.25C20.3129 10.1712 20.0737 11.0768 19.6183 11.8776C19.1629 12.6784 18.507 13.3469 17.715 13.8175C18.175 12.575 18.4375 10.97 18.4375 9.25C18.4375 7.53 18.175 5.925 17.715 4.6825ZM14.7075 4.135C14.895 3.9375 14.995 3.9375 15 3.9375C15.0062 3.9375 15.105 3.9375 15.2925 4.135C15.4825 4.33625 15.6975 4.67875 15.8975 5.17875C16.295 6.17375 16.5625 7.6125 16.5625 9.25C16.5625 10.8875 16.295 12.325 15.8975 13.3212C15.6975 13.8212 15.4825 14.1637 15.2925 14.365C15.1075 14.5587 15.0087 14.5625 15 14.5625C14.9912 14.5625 14.8925 14.5587 14.7075 14.365C14.5175 14.1637 14.3025 13.8212 14.1025 13.3212C13.705 12.3262 13.4375 10.8875 13.4375 9.25C13.4375 7.6125 13.705 6.175 14.1025 5.17875C14.3025 4.67875 14.5175 4.33625 14.7075 4.135Z" fill="#FF9010"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.82875 4.91372C6.73875 4.75497 6.51125 4.72122 6.05875 4.65622C5.70462 4.60077 5.34713 4.56944 4.98875 4.56247C4.17625 4.55747 3.45125 4.74997 2.79125 5.32247C2.1125 5.91247 1.81875 6.66997 1.68625 7.53622C1.56125 8.34372 1.5625 9.35872 1.5625 10.5662V19.8312C1.5625 20.9475 1.5625 21.8612 1.64 22.585C1.72 23.3312 1.895 24.0162 2.34875 24.585C2.82125 25.1787 3.5125 25.49 4.2725 25.7187C5.02625 25.9462 6.01875 26.1375 7.2475 26.375L7.3 26.385C9.47875 26.8062 11.1587 27.4725 12.3537 28.1262L12.3775 28.1387C12.9875 28.4725 13.4775 28.74 13.85 28.9225C13.95 28.97 14.0625 28.8975 14.0625 28.7875V18.9412C14.0625 18.6262 14.0625 18.4675 13.975 18.3637C13.8875 18.2587 13.7225 18.23 13.3925 18.17C12.059 17.9296 10.7963 17.3932 9.69738 16.6005C8.59846 15.8077 7.69124 14.7787 7.04247 13.589C6.3937 12.3994 6.01987 11.0795 5.94849 9.72633C5.87711 8.37319 6.10999 7.02125 6.63 5.76997C6.8225 5.30497 6.92 5.07372 6.83 4.91372H6.82875ZM16.025 18.3637C15.9375 18.4675 15.9375 18.6262 15.9375 18.9412V28.7875C15.9375 28.8975 16.05 28.97 16.15 28.9225C16.5237 28.74 17.0125 28.4725 17.6225 28.1387L17.6462 28.1262C18.8412 27.4725 20.5212 26.8062 22.7 26.385L22.7512 26.375C23.98 26.1375 24.9737 25.9462 25.7275 25.7187C26.4875 25.49 27.1775 25.1787 27.6512 24.5862C28.105 24.0162 28.28 23.3312 28.36 22.5862C28.4375 21.8612 28.4375 20.9475 28.4375 19.8312V10.5662C28.4375 9.35872 28.4375 8.34372 28.3137 7.53622C28.18 6.66997 27.8875 5.91122 27.2087 5.32372C26.5487 4.74872 25.8237 4.55747 25.0112 4.56247C24.6529 4.56945 24.2954 4.60077 23.9412 4.65622C23.4887 4.72122 23.2612 4.75497 23.1712 4.91372C23.08 5.07372 23.1775 5.30497 23.37 5.76872C23.89 7.02 24.1229 8.37194 24.0515 9.72508C23.9801 11.0782 23.6063 12.3982 22.9575 13.5878C22.3088 14.7774 21.4015 15.8064 20.3026 16.5992C19.2037 17.392 17.941 17.9283 16.6075 18.1687C16.2775 18.23 16.1125 18.2587 16.025 18.3637Z" fill="white"/></svg>
            <p className='font-semibold text-3xl text-white'>LMS</p>
          </div>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6001 12.9002C19.6001 13.1124 19.5158 13.3159 19.3658 13.4659C19.2158 13.6159 19.0123 13.7002 18.8001 13.7002H7.9313L12.1665 17.9338C12.3167 18.084 12.4011 18.2878 12.4011 18.5002C12.4011 18.7127 12.3167 18.9164 12.1665 19.0666C12.0163 19.2168 11.8125 19.3012 11.6001 19.3012C11.3877 19.3012 11.1839 19.2168 11.0337 19.0666L5.4337 13.4666C5.35931 13.3923 5.30037 13.304 5.26028 13.2068C5.22019 13.1096 5.19973 13.0054 5.2001 12.9002V20.9002C5.2001 21.1124 5.11581 21.3159 4.96578 21.4659C4.81575 21.6159 4.61227 21.7002 4.4001 21.7002C4.18792 21.7002 3.98444 21.6159 3.83441 21.4659C3.68438 21.3159 3.6001 21.1124 3.6001 20.9002V4.90022C3.6001 4.68805 3.68438 4.48456 3.83441 4.33453C3.98444 4.18451 4.18792 4.10022 4.4001 4.10022C4.61227 4.10022 4.81575 4.18451 4.96578 4.33453C5.11581 4.48456 5.2001 4.68805 5.2001 4.90022V12.9002C5.2001 12.6954 5.2785 12.4906 5.4337 12.3338L11.0337 6.73382C11.1081 6.65944 11.1964 6.60044 11.2936 6.56018C11.3907 6.51993 11.4949 6.49921 11.6001 6.49921C11.7053 6.49921 11.8094 6.51993 11.9066 6.56018C12.0038 6.60044 12.0921 6.65944 12.1665 6.73382C12.2409 6.8082 12.2999 6.8965 12.3401 6.99369C12.3804 7.09087 12.4011 7.19503 12.4011 7.30022C12.4011 7.40541 12.3804 7.50957 12.3401 7.60675C12.2999 7.70394 12.2409 7.79224 12.1665 7.86662L7.9313 12.1002H18.8001C19.0123 12.1002 19.2158 12.1845 19.3658 12.3345C19.5158 12.4846 19.6001 12.688 19.6001 12.9002Z" fill="#BEBBCE"/></svg>
        </div>

        <div id='sidebar body+footer' className='flex flex-col items-start justify-between'>
          
        </div>
      
        <div id='sidebar-body' className='pt-10 pb-4 flex flex-col gap-5 justify-start'>
          <div id='admin-section' className='flex items-center justify-start gap-2'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.29292 0.292893C7.68345 -0.0976311 8.31661 -0.0976311 8.70714 0.292893L15.7071 7.29289C15.9931 7.57889 16.0787 8.00901 15.9239 8.38268C15.7691 8.75636 15.4045 9 15 9H14V15C14 15.5523 13.5523 16 13 16H11C10.4477 16 10 15.5523 10 15V12C10 11.4477 9.55231 11 9.00003 11H7.00003C6.44774 11 6.00003 11.4477 6.00003 12V15C6.00003 15.5523 5.55231 16 5.00003 16H3.00003C2.44774 16 2.00003 15.5523 2.00003 15V9H1.00003C0.595567 9 0.230931 8.75636 0.0761497 8.38268C-0.0786313 8.00901 0.00692445 7.57889 0.292922 7.29289L7.29292 0.292893Z" fill="white"/></svg>
            <p className='text-white'>Admin</p>
          </div>          
          <div id='student-section' className='flex items-center justify-start gap-2'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8C8.65685 8 10 6.65685 10 5C10 3.34315 8.65685 2 7 2C5.34315 2 4 3.34315 4 5C4 6.65685 5.34315 8 7 8Z" fill="#BEBBCE"/><path d="M14.5 9C15.8807 9 17 7.88071 17 6.5C17 5.11929 15.8807 4 14.5 4C13.1193 4 12 5.11929 12 6.5C12 7.88071 13.1193 9 14.5 9Z" fill="#BEBBCE"/><path d="M1.61528 16.428C1.21798 16.1736 0.987847 15.721 1.04605 15.2529C1.41416 12.292 3.93944 10 6.9999 10C10.0604 10 12.5856 12.2914 12.9537 15.2522C13.012 15.7203 12.7818 16.1729 12.3845 16.4273C10.8302 17.4225 8.98243 18 6.9999 18C5.01737 18 3.16959 17.4231 1.61528 16.428Z" fill="#BEBBCE"/><path d="M14.5001 16C14.4647 16 14.4295 15.9998 14.3943 15.9993C14.4631 15.7025 14.4822 15.3885 14.4423 15.0671C14.2668 13.6562 13.7001 12.367 12.854 11.3116C13.3646 11.1105 13.9208 11 14.5028 11C16.4426 11 18.0956 12.2273 18.7279 13.9478C18.8638 14.3176 18.7045 14.7241 18.3671 14.9275C17.2379 15.6083 15.9147 16 14.5001 16Z" fill="#BEBBCE"/></svg>
            <p className='text-white'>Student</p>
          </div>
        </div>
    
        <div id='sidebar-footer' className='flex flex-col items-center'>  
          <div id='help-center' className='p-4 flex flex-col items-center justify-between gap-4 border border-white border-opacity-15 rounded-2xl w-56 bg-[#F8F6FF]/[0.04]'>
            <div id='text' className='flex flex-col gap-1 items-start'>
              <div className='flex items-center justify-start gap-2'>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4 8.5C14.4 12.0346 11.5346 14.9 7.99998 14.9C4.46535 14.9 1.59998 12.0346 1.59998 8.5C1.59998 4.96538 4.46535 2.1 7.99998 2.1C11.5346 2.1 14.4 4.96538 14.4 8.5ZM7.15145 6.05145C6.91713 6.28576 6.53723 6.28576 6.30292 6.05145C6.0686 5.81713 6.0686 5.43724 6.30292 5.20292C7.24018 4.26566 8.75977 4.26566 9.69703 5.20292C10.6343 6.14018 10.6343 7.65978 9.69703 8.59703C9.38304 8.91102 9.00225 9.1205 8.59998 9.22406V9.49997C8.59998 9.83135 8.33135 10.1 7.99998 10.1C7.6686 10.1 7.39998 9.83135 7.39998 9.49997V9.09998C7.39998 8.52374 7.85593 8.1626 8.26505 8.07057C8.47856 8.02254 8.68126 7.91575 8.8485 7.74851C9.31713 7.27988 9.31713 6.52008 8.8485 6.05145C8.37987 5.58282 7.62008 5.58282 7.15145 6.05145ZM7.99998 12.5C8.4418 12.5 8.79998 12.1418 8.79998 11.7C8.79998 11.2582 8.4418 10.9 7.99998 10.9C7.55815 10.9 7.19998 11.2582 7.19998 11.7C7.19998 12.1418 7.55815 12.5 7.99998 12.5Z" fill="#FF9010"/></svg>
                <p className='text-white font-medium'>Need support?</p>
              </div>
              <p className='text-[#BEBBCE] text-sm font-normal'>Get in touch with help center</p>
            </div>
            <button className='w-full flex-grow px-3 py-2 bg-white text-sm font-semibold rounded-[0.25rem]'>Help Center</button>
          </div>
          <div id='log-out' className='py-2 px-3 flex items-center justify-start gap-2'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.25C3 3.00736 4.00736 2 5.25 2H10.75C11.9926 2 13 3.00736 13 4.25V6.25C13 6.66421 12.6642 7 12.25 7C11.8358 7 11.5 6.66421 11.5 6.25V4.25C11.5 3.83579 11.1642 3.5 10.75 3.5H5.25C4.83579 3.5 4.5 3.83579 4.5 4.25V15.75C4.5 16.1642 4.83579 16.5 5.25 16.5H10.75C11.1642 16.5 11.5 16.1642 11.5 15.75V13.75C11.5 13.3358 11.8358 13 12.25 13C12.6642 13 13 13.3358 13 13.75V15.75C13 16.9926 11.9926 18 10.75 18H5.25C4.00736 18 3 16.9926 3 15.75V4.25Z" fill="#BEBBCE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 9.58579 6.33579 9.25 6.75 9.25H16.2955L15.2483 8.30747C14.9404 8.03038 14.9154 7.55616 15.1925 7.24828C15.4696 6.94039 15.9438 6.91543 16.2517 7.19253L18.7517 9.44253C18.9098 9.58476 19 9.78738 19 10C19 10.2126 18.9098 10.4152 18.7517 10.5575L16.2517 12.8075C15.9438 13.0846 15.4696 13.0596 15.1925 12.7517C14.9154 12.4438 14.9404 11.9696 15.2483 11.6925L16.2955 10.75H6.75C6.33579 10.75 6 10.4142 6 10Z" fill="#BEBBCE"/></svg>
            <p className='text-white font-medium'>Log out</p>
          </div>
        </div>
        

      </div>

    </div>
  )
}

export default sidebar