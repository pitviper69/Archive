import ShortLogo from "../../assets/12dot-logo-short-wfx.png"
import InsanePrizes from "../../assets/insane-prizes-600px.png"
import WildDeals from "../../assets/wild-deals-600px.png"
import SignUps from "../../assets/signup-to-win-1000.png"


export const BlackFridayHeader = () => {
    return (
       <div className="relative h-140">
           <img className="relative block m-auto max-w-sm" src={ShortLogo} />
           <img className="absolute max-w-[230px] bottom-20 left-10 rotate-[25deg]" src={InsanePrizes} />
           <img className="absolute max-w-[200px] top-0 right-5 -rotate-[15deg]" src={WildDeals} />
           <img className="absolute max-w-xs bottom-20 right-[40%] m-auto" src={SignUps} />
       </div>
    )
}