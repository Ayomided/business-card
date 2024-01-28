import { GrMail } from 'react-icons/gr'

function Buttons() {
  return (
    <div className="flex justify-center mx-auto bg-gray-800 w-72 h-14">
      <button className="w-60 h-8 rounded-md text-sm bg-white text-black font-sans">
        <GrMail className="inline text-2xl pb-1 pr-2"/>
        Email
      </button>
    </div>
  )
}

export default Buttons
