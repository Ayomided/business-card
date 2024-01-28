import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

function SocialIcons() {
  return (
    <div className="mx-auto w-72 h-14 bg-slate-900 text-slate-100 rounded-b-lg flex justify-center py-3 text-3xl space-x-4">
      <FaTwitterSquare />
      <FaFacebookSquare />
      <FaInstagramSquare />
      <FaLinkedin />
      <FaGithubSquare />
    </div>
  )
}

export default SocialIcons