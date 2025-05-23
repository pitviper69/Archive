import ShortLogo from "../../assets/12dot-logo-short-wfx.png"
import InsanePrizes from "../../assets/insane-prizes-600px.png"
import WildDeals from "../../assets/wild-deals-600px.png"
import SignUps from "../../assets/signup-to-win-1000.png"


export const BlackFridayHeader = () => {
    return (
       <>
           <div className="relative h-105 lg:h-140">
               <img className="relative block mt-26 mx-auto lg:m-auto max-w-xs lg:max-w-sm" src={ShortLogo} />
               <img className="absolute max-w-[140px] lg:max-w-[230px] lg:bottom-20 -top-[140px] lg:top-auto left-2 lg:left-10 rotate-[25deg]" src={InsanePrizes} />
               <img className="absolute max-w-[140px] lg:max-w-[200px] -top-[120px] lg:top-0 right-5 -rotate-[15deg]" src={WildDeals} />
               <img className="absolute max-w-2xs lg:max-w-xs bottom-20 left-[50%] -ml-[150px] lg:right-[40%] lg:left-auto lg:ml-auto m-auto" src={SignUps}/>
           </div>
       </>
    )
}