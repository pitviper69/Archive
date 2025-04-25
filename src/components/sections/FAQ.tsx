// CurrentPrizes.tsx
import React from 'react';

interface FaqData {
    question: string;
    answer: string;
}

// Use your existing prizes object structure
const faq: { [key: string]: FaqData } = {
    "rules": {
        question: "I don’t understand the rules.",
        answer: "For 12 days we will be giving away 12 unbelievable prizes. Each day a new prize reveals itself, and each day you have the chance to enter to win it. It all starts at midnight MST on November 13th and ends at midnight MST on November 24th."
    },
    "enter": {
        question: "How do I enter?",
        answer: "Every day at midnight MST a new prize will reveal itself. Click the “enter to win” button. Fill out your name. Then your last name. Then your email. Then-- you know what, you got this."
    },
    "long": {
        question: "How long do I have to enter?",
        answer: "You have 24 hours to enter for each prize. Entries will close at midnight MOUNTAIN STANDARD TIME."
    },
    "underAge": {
        question: "How old do I have to be to enter?",
        answer: "18 or older."
    },
    "underAge2": {
        question: "What if I’m under 18?",
        answer:"Call your mom’s ex boyfriend. Call your school counselor. Call whoever. As long as they're 18 or older they can enter. Then you can argue about who actually won for the rest of their life (in this case your oldest relative is your safest bet)."
    },
    "buy": {
        question: "Do I have to buy something to enter?",
        answer: "TECHNICALLY: No.\n" +
            "\n" +
            "MORALLY: Probably. We aren’t making money off of this giveaway. Our accountant literally hates that we do this. Also the majority of pitviper.com is on sale for 40% off right now so you really don’t have an excuse not to.\n" +
            "\n"
    },
    "enterMultiple": {
        question: "Can I enter multiple times for one prize?",
        answer: "I mean technically, yes. But we’ll be filtering out all multiple entries, so I’d find something better to do with your time."
    },
    "badCowboy": {
        question: "What is the bad cowboy list?",
        answer: "I SAID DON'T ASK"
    },
    "won": {
        question: "How will I know if I won?",
        answer: "We will call you. Probably from a number you’ve never seen before. Answer your damn phone. There may be a free car waiting on the other line."
    },
    "how": {
        question: "How are the winner’s decided?",
        answer: "Bob (the previously mentioned intern) will write every entrant’s name on an origami swan then release them off of my cousin’s tree stand. The swan that reaches the gulf of Mexico first wins. Either that or we’ll pick a winner with a random number generator."
    },
    "noLike": {
        question: "What if I don’t want the prize I won?",
        answer: "Yes you do, you signed up for it."
    },
    "prize": {
        question: "How will you get the prize to me?",
        answer: "We’ll worry about that later."
    }
};

const FAQ: React.FC = () => {
    return (
        <div className="p-20">
            <h2 className="mt-20 mb-4 text-center font-bf-header uppercase tracking-wide font-bold text-white text-8xl text-shadow-bf">F.A.Q.U</h2>
            <img className="m-auto max-w-lg mb-20" src="/src/assets/underline.svg"/>
            {Object.keys(faq).map((key) => (
                <div className="flex flex-col relative mb-6">
                    <h3 className="z-10 font-bf-header text-4xl tracking-wide mb-1 text-white">{faq[key].question}</h3>
                    <p className="z-10 font-bf-paragraph text-white text-lg pl-10">{faq[key].answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;