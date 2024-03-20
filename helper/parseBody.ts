export async function parseData(transaction: any) {
    let token = "";
    let found = false;
    transaction.tokenTransfers.array.forEach(element => {
        if (element.mint !== "So11111111111111111111111111111111111111112" && !found) {
            token = element.mint;
            found = true;
        }
    });
    return token;
}