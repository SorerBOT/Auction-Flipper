import fetch from "cross-fetch";

const getCurrentAuctions = async () => {
    const response = await fetch("https://api.hypixel.net/skyblock/auctions");
    const data = await response.json();

    return data;
};

export default getCurrentAuctions;