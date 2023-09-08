let quote = document.getElementById("text");
let newQuote = document.getElementById("new-quote");
const quotes = [
  "Enact a scene. No matter what it is. Forget good and evil. Enact a scene that implies you have what you desire, and to the degree that you are faithful to that state, it will unfold in your world and no power can stop it, for there is no other power.",
  "Never claim, “I shall be that,” Let all claims from now on be, “I AM that I AM.",
  "The individual's inner speech and actions attract the conditions of his life.",
  "Never go to sleep feeling discouraged or dissatisfied. Never sleep in the consciousness of failure.",
  "Now, here's a practical technique: the first thing you must do is know exactly what you want in this world. When you know exactly what you want, make as lifelike a representation as possible of what you would see and touch, and what you would.",
  "Change your conception of yourself and you will automatically change the world in which you live. Do not try to change people; they are only messengers telling you who you are. Revalue yourself and they will confirm the change.",
  "Assume the feeling of your wish fulfilled and observe the route that your attention follows.",
  "Stop trying to change the world since it is only the mirror. Man’s attempt to change the world by force is as fruitless as breaking a mirror in the hope of changing his face. Leave the mirror and change your face. Leave the world alone and change your conceptions of yourself. The reflection then will be satisfactory.",
  "Dare to believe in the reality of your assumption and watch the world play its part relative to to its fulfillment.",
  "I AM wealthy, poor, healthy, sick, free, confined were first of all impressions or conditions felt before they became visible expressions. Your world is your consciousness objectified. Waste no time trying to change the outside; change the within or the impression; and the without or expression will take care of itself. When the truth of this statement dawns upon you, you will know that you have found the lost word or the key to every door. I AM (your consciousness) is the magical lost word which was made flesh in the likeness of that which you are conscious of being.",
  "Man fails to do the works of Jesus Christ because he attempts to accomplish them from his present level of consciousness. You will never transcend your present accomplishments through sacrifice and struggle. Your present level of consciousness will only be transcended as you drop the present state and rise to a higher level. You rise to a higher level of consciousness by taking your attention away from your present limitations and placing it upon that which you desire to be. Do not attempt this in day-dreaming or wishful thinking but in a positive manner. Claim yourself to be the thing desired. I AM that; no sacrifice, no diet, no human tricks. All that is asked of you is to accept your desire. If you dare claim it, you will express it.",
  "If you judge after appearances, you will continue to be enslaved by the evidence of your senses.",
  "Sleep conceals the creative act while the objective world reveals it. In sleep man impresses the subconscious with his conception of himself.",
  "With your desire defined, quietly go within and shut the door behind you. Lose yourself in your desire; feel yourself to be one with it; remain in this fixation until you have absorbed the life and name by claiming and feeling yourself to be and to have that which you desired. When you emerge from the hour of prayer you must do so conscious of being and possessing that which you heretofore desired.",
  "Fishermen know that if they wish to catch big fish, they must fish in deep waters; if you would catch a large measure of life, you must leave behind you the shallow waters with its many reefs and barriers and launch out into the deep blue waters where the big ones play. To catch the large manifestations of life you must enter into deeper and freer states of consciousness; only in these depths do the big expressions of life live.",
  "If you judge after appearances, you will continue to be enslaved by the evidence of your senses. To break this hypnotic spell of the senses you are told, Go within and shut the door.The door of the senses must be tightly shut before your new claim can be honoured. Closing the door of the senses is not as difficult as it appears to be at first. It is done with effort.",
  "Here is a simple formula for successful fishing. First decide what it is you want to express or possess. This is essential. You must definitely know what you want of life before you can fish for it. After your decision is made, turn from the world of sense, remove your attention from the problem and place it on just being by repeating quietly but with feeling, “I AM.” As your attention is removed from the world round about you and placed upon the I AM so that you are lost in the feeling of simply being, you will find yourself slipping the anchor that tied you to the shallows of your problem; and effortlessly you will find yourself moving out into the deep.",
  "Remember the reward is to the one who endures. Stand still. Standing still is the deep conviction that all is well; it is done. No matter what is heard or seen, you remain unmoved, conscious of being victorious in the end. All things are made by such agreements, and without such an agreement there is not anything made that is made.",
  "Do not waste one moment in regret, for to think feelingly of the mistakes of the past is to re-infect yourself.",
  "Because creation is finished, what you desire already exists. It is excluded from view because you can see only the contents of your own consciousness. It is the function of an assumption to call back the excluded view and restore full vision. It is not the world but your assumptions that change. An assumption brings the invisible into sight. It is nothing more nor less than seeing with the eye of God",
  "Here is the way a lady wisely used this law of revision: It appears that two years ago she was ordered out of her daughter-in-law's home. For two years there was no correspondence. She had sent her grandson at least two dozen presents in that interval, but not one was ever acknowledged. Having heard the story of revision, this is what she did: As she retired at night, she mentally constructed two letters, one she imagined coming from her grandson, and the other from her daughter-in-law. In these letters they expressed deep affection for her and wondered why she had not called to see them. This she did for seven consecutive nights, holding in her imaginary hand the letter she imagined she had received and reading these letters over and over until it aroused within her the satisfaction of having heard. Then she slept. On the eighth day she received a letter from her daughter-in-law. On the inside there were two letters, one from her grandson and one from the daughter-in-law. They practically duplicated the imaginary letters that this grandmother had written to herself eight days before. This art of revision can",
  "Regardless of what you want to be, you must declare you already are it and persist in that assumption. An assumption is an act of faith, and without faith it is impossible to please God. Your reasoning mind may deny wealth. Your senses deny it too, but if you have faith you will dare to assume wealth, thereby becoming the man you want to be.",
  'Stop looking for signs. Signs follow; they do not precede. Begin to reverse the statement, "Seeing is believing," to "Believing is seeing." Start now to believe, not with the wavering confidence based on deceptive external evidence but with an undaunted confidence based on the immutable law that you can be that which you desire to be. You will find that you are not a victim of fate but a victim of faith (your own).',
  "ALL is yours. Do not go seeking for that which you are. Appropriate it, claim it, assume it. Everything depends upon your concept of yourself. That which you do not claim as true of yourself cannot be realised by you.",
  "Be still and know that you are that which you desire to be, and you will never have to search for it.",
  "Concentrate your attention entirely upon the thing desired.",
  "Prayer succeeds by avoiding conflict. Prayer is, above all things, easy. Its greatest enemy is effort.",
  "The best denial is total indifference. Things wither and die through indifference. They are kept alive through attention. You do not deny a thing by saying it does not exist. Rather you put feeling into it by recognizing it, and what you recognize as true, is true to you, be it good, bad or indifferent.",
];

function getRandomQuote() {
  return Math.floor(Math.random() * quotes.length);
}

quote.innerHTML = quotes[getRandomQuote()];

newQuote.addEventListener("click", function () {
  quote.innerHTML = quotes[getRandomQuote()];
});