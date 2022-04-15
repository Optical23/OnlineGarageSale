
export const getHighest = (bids) => {
    var largest = 0;
    for (let i = 0; i < bids.length; i++) {
        const element = bids[i].bid;
        if(element>largest){
            largest = element;
        }
            
    }
    return largest;
};
