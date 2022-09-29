import getCurrentAuctions from "./Helper/getCurrentAuctions.js";
import filterAuctionData from "./Helper/filterAuctionData.js";

const currentAuctions = await getCurrentAuctions();
const filteredAuctions = currentAuctions.auctions.map((auction) => auction = filterAuctionData(auction));

console.log(filteredAuctions);