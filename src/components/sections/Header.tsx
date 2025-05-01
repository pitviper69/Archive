import Fangs512 from '../../assets/Fangs-512.png'
import { Link } from "react-router";

export const Header = () =>  (
    <div className="fixed top-0 left-0 right-0 bg-space-gray z-30">
        <div className="flex flex-row items-center justify-between p-1 bg-blue-primary m-1 text-sm">
            <div className="flex-1"></div>
            <p className="text-white text-center">Whale cum to the Pit Viper Archive</p>
            <div className="flex items-center space-x-0.5 flex-1 justify-end">
                <button type="button"
                        className="flex items-center justify-center w-4 h-4 bg-[#cac6cb] border border-white border-b-black border-r-black">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="#000" stroke-width="2"
                              d="M7,7 L17,17 M7,17 L17,7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div className="px-4 h-16 flex items-center justify-between w-full">
            <Link to="/" className="flex flex-1">Back 2 Archive</Link>
            <div className="flex justify-center flex-1">
                <a href="https://pitviper.com">
                    <img src={Fangs512} alt="Logo"/>
                </a>
            </div>
            <div className="flex flex-1"></div>
        </div>
    </div>
)