const filterAuctionData = (auction) => {
    return { item: auction.item_bytes, name: auction.item_name, price: auction.starting_bid };
};

export default filterAuctionData;