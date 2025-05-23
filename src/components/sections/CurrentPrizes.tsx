// CurrentPrizes.tsx
import React from 'react';
import Underline from "../../assets/underline.svg";
import Accord from "../../assets/day1-Accord-final.png";
import Everything from "../../assets/day2-one-of-everything.png";
import Stroller from "../../assets/day3-motorstroller-final.png";
import Arcader from "../../assets/day4-arcader-final.png";
import Vacation from "../../assets/day5-myrtlebeach-final.png";
import Gronk from "../../assets/day6-gronk-final.png";
import Barbieque from "../../assets/day7-BBQ-trailer-final.png";
import Heli from "../../assets/day8-glenplake-heliski-final.png";
import Golf from "../../assets/day9-rocketgolfcart-final.png";
import Pairs from "../../assets/day10-1000pairs-final.png";
import Bike from "../../assets/day11-tandem-bike-for-1-final.png";
import Gas from "../../assets/day12-year-of-gas-final.png";

interface PrizeData {
    name: string;
    day: string;
    description: string;
    image: string;
}

// Use your existing prizes object structure
const prizes: { [key: string]: PrizeData } = {
    "accord": {
        name: "The Corduroy Accord",
        day: '1',
        description: "Remember the Canadian Truxedo, aka the Denim Deisel, the Jruck? Introducing the Accorduroy. It's warmer and even less waterproof, featuring non-stretch waled cotton. Of course, the Accord runs; it's a Honda.",
        image: Accord
    },
    "everything": {
        name: "One of Everything We Make",
        day: '2',
        description: "Immediately after winning, a massive shipment with one of everything we have in stock will ship to your house. An obscene amount of Pit Vipers. Truly a nuisance.",
        image: Everything
    },
    "stroller": {
        name: "The Motor Stroller",
        day: '3',
        description: "Baby to quiet? Baby too loud? You won't know the difference with the motor stroller. With a finger throttle, your stroller’s 2-stroke motor screams all the way to daycare. Always use the right fuel-to-oil ratio.",
        image: Stroller
    },
    "arcader": {
        name: "The Motor Stroller",
        day: '4',
        description: "Baby to quiet? Baby too loud? You won't know the difference with the motor stroller. With a finger throttle, your stroller’s 2-stroke motor screams all the way to daycare. Always use the right fuel-to-oil ratio.",
        image: Arcader
    },
    "vacation": {
        name: "Dream Vacation: 6.9 Days in Myrtle Beach",
        day: '5',
        description: "Paris, London, Tokyo… Myrtle Beach. The golf capital of the world will be your home for 6.9 days (almost a full week). You legitimately get - 2 Ice Shaker Speaker Bottles 5 Days and 4 Nights of Oceanfront Accommodations for up to 2 people in Myrtle Beach, South Carolina 1 Round of Golf for 2 people in the Golf Capital of the World 1 round of mini golf for 2 people 1 additional Myrtle Beach Attraction for 2 people $200 Dining Gift Certificate",
        image: Vacation
    },
    "gronk": {
        name: "Rob Gronkowski's Tighty Whitey Tight End Special",
        day: '6',
        description: "The tightest end in football, Rob Gronkowski, has signed 12 pieces of what can now be deemed historic memorabilia. 10 lucky winners will win Pit Vipers signed by Gronk, 1 will win a signed Patriots jersey, and 1 lucky winner will get to protect their end zone with a pair of tighty whities that Gronk left his personal mark on. By mark we mean signature. NOT poop.",
        image: Gronk
    },
    "bbq": {
        name: "Life's a Beach BBQ Trailer",
        day: '7',
        description: "Hitch this mobile barbecue to the back of your jalopy and smoke some weiners wherever you go. At the game, at the office, at your grand pappy’s funeral (he loved barbecues). Complete with a Pit Boss smoker, grill, griddle, smokeless fire pit, and all of the tools and accessories you need for the ultimate tailgate.",
        image: Barbieque
    },
    "heli": {
        name: "Glen Plakes Heli Ski School",
        day: '8',
        description: "Glen Plake hosts you at Mike Weigle Heli Skiing for X days of skiing, cuisine, and courses. A 4-course day Ft. gourmet food, french lessons, and maybe even mohawk styling from the man himself. Let me just reiterate… FREE HELI SKI VACATION",
        image: Heli
    },
    "golf": {
        name: "The Rocket Golf Cart",
        day: '9',
        description: "It's a rocket engine on a golf cart. Do we really need to explain this one to you?\n" +
            "[Aim for the moon because even if you miss, you'll end up in the stars smashing a rich person's window who lives on the course.] ",
        image: Golf
    },
    "pairs": {
        name: "1000 Pit Vipers For 1000 Winners",
        day: '10',
        description: "1000 f*cking winners. You can win. Your mom can win. 999 other people you may or may not know can win. This is the best chance you have of winning one of these giveaways. You asked for free Pit Vipers, we listened.",
        image: Pairs
    },
    "bike": {
        name: "A Tandem Bike For One",
        day: '11',
        description: "Single? Lonely? Really long human? It's everything you know and love about a tandem bike, except it's just for you. (Rear wheel drive) Hand modified by world-iinfamous Bicycle Pubes, featuring custom handlebars from Doom Bars, we did not actually test this bike and are not liable if you hurt yourself. ",
        image: Bike
    },
    "Gas": {
        name: "A Year of Free Gas",
        day: '12',
        description: "The average American burns $2,148 in gasoline in a year*. A prize of $4,200 of gas at Maverick, if you are below average or European this prize is really a grower not a shower.\n" +
            "*according to a very quick google search",
        image: Gas
    }
};

const CurrentPrizes: React.FC = () => {
    return (
        <div className="p-6 lg:p-20">
            <h2 className="lg:mt-20 mb-4 text-center font-bf-header uppercase tracking-wide font-bold text-white text-8xl text-shadow-bf">The prizes</h2>
            <img className="m-auto max-w-lg mb-20" src={Underline}/>
            {Object.keys(prizes).map((key) => (
                <div key={key} className="relative w-full flex flex-col lg:flex-row mb-20">
                    <div className="basis-1/2">
                        <img className="w-5/6 m-auto" src={prizes[key].image}/>
                    </div>
                    <div className="flex flex-col relative justify-center basis-1/2">
                        <div className="bg-prev-prize blur-sm absolute h-full w-full z-0"></div>
                        <p className="z-10 ml-6 font-sarina text-shadow-bf text-3xl text-white">Day {prizes[key].day}</p>
                        <h3 className="z-10 ml-6 font-bf-header text-shadow-bf text-bf-prize-title text-7xl font-bold uppercase tracking-wide mb-6">{prizes[key].name}</h3>
                        <p className="z-10 ml-6 font-rhodium text-white text-lg">{prizes[key].description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CurrentPrizes;