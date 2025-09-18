import React from 'react'

function ProfilePage() {
  return (
    <div className='app-container text-text flex flex-col shadow-lg'>
      {/* Title Part */}
      <div className='px-4 pt-7 pb-5 bg-white'>
        <span className='text-lg font-medium'>Account Settings</span>
      </div>

      {/* User Details Part */}
      <div className='flex-1 flex flex-col'>
        <div className='px-4 py-5 space-y-5'>
          <div className='flex gap-4 flex-wrap'>
            <div className='relative'>
              <img src="/Ellipse 114.png" alt="image" />
              <img className='absolute bottom-1 -right-1' src="/camera.svg" alt="image" />
            </div>
            <div className='flex flex-col'>
              <span className='font-semibold'>Marry Doe</span>
              <span className='text-sm font-medium'>Marry@Gmail.Com</span>
            </div>
          </div>
          <div>
            <p className='text-sm font-medium max-w-[40ch]'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
          </div>
        </div>

        <div className='border-y-2 border-tertiary border-dashed flex-1'></div>

        <div className='h-10'></div>
      </div>
    </div>
  )
}

export default ProfilePage;
