import logo from '../assets/img/Logo.png'
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoYoutube } from "react-icons/bi";

function Footer() {
  return (
    <>
      <footer className="p-4 bg-primary w-screen h-[298px]">
            <div className="md:flex md:justify-between px-4">
                <div className="ml-8 mt-4">
                    <a href="#" className="flex items-center">
                        <img src={logo} className="h-24" alt="RecipeIn Logo" />
                        <p className='text-[38px] mt-2 ml-2 text-font font-extrabold'>RecipeIn</p>
                    </a>
                    <p className='text-2xl text-font pt-4 italic tracking-wider'>&quot;Temukan, Masak, Nikmati&quot;</p>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-2 mt-8 text-font">
                    <div>
                        <h2 className="mb-4 text-[18px] font-bold">
                            Lebih dekat
                        </h2>
                        <ul className="">
                            <li className="mb-2">
                                <a href="/about" className="text-font text-[18px] hover:text-font">Tentang Kami</a>
                            </li>
                            <li className="mb-2">
                                <a href="/tnc" className="text-font text-[18px] hover:text-font">Syarat dan Ketentuan</a>
                            </li>
                            <li className="mb-2">
                                <a href="/pp" className="text-font text-[18px] hover:text-font">Kebijakan Privasi</a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact" className="text-font text-[18px] hover:text-font">Kontak</a>
                            </li>
                            <li className="mb-2">
                                <a href="/faq" className="text-font text-[18px] hover:text-font">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-[18px] font-bold">
                            RecipeIn
                        </h2>
                        <ul className="">
                            <li className="mb-2">
                                <a href="/recipe" className="text-font text-[18px] hover:text-font">Resep</a>
                            </li>
                            <li className="mb-2">
                                <a href="/profile" className="text-font text-[18px] hover:text-font">Profile</a>
                            </li>
                            <li className="mb-2">
                                <a href="/myrecipe" className="text-font text-[18px] hover:text-font">Resep Ku</a>
                            </li>
                            <li className="mb-2">
                                <a href="/dnutrition" className="text-font text-[18px] hover:text-font">Nutrisi Harian</a>
                            </li>
                            <li className="mb-2">
                                <a href="/favorite" className="text-font text-[18px] hover:text-font">Resep Favorit</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-[1px] border-font -ml-4 mt-8 w-screen" />
            <div className="flex -ml-4 h-[70px] bg-primary w-screen justify-between">
                <p className='text-font text-base font-medium pt-[24px] ml-8'>&copy; 2023 RecipeIn - All right Reserved</p>
                <div className='flex pt-[20px] mr-12'>
                    <a href="https://www.facebook.com/RecipeIn"><BiLogoFacebook color='#111111' fontSize="30px" className='' /></a>
                    <a href="https://www.instagram.com/RecipeIn"><BiLogoInstagram color='#111111' fontSize="30px" className='' /></a>
                    <a href="https://id.pinterest.com/RecipeIn/"><BiLogoPinterestAlt color='#111111' fontSize="30px" className='' /></a>
                    <a href="https://www.tiktok.com/@RecipeIn"><BiLogoTiktok color='#111111' fontSize="30px" className='' /></a>
                    <a href="https://twitter.com/RecipeIn"><FaXTwitter color='#111111' fontSize="30px" className='' /></a>
                    <a href="https://www.youtube.com/@RecipeIn"><BiLogoYoutube color='#111111' fontSize="30px" className='' /></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
