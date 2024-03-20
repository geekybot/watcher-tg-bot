
const rayProgramId = '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8';
const jupProgramId = 'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4';
export async function parseBodyData(element) {
    console.log(JSON.stringify(element));
    let pd: {
        tokenBAddress?: any,
        targetPool?: any
    } = {};
    let instructions = element.instructions;
    let loop = true;
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i].programId === rayProgramId && loop) {
            console.log("rayprogramm");
            let accounts = instructions[i].accounts;
            pd.tokenBAddress = accounts[5];
            pd.targetPool = accounts[11];
            loop = false;

        } if (instructions[i].programId === jupProgramId && loop) {
            let accounts = instructions[i].accounts;
            pd.tokenBAddress = accounts[5];
            pd.targetPool = accounts[11];
            loop = false;
        }
    }

}


// const tx = {
//     "accountData": [
//         {
//             "account": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//             "nativeBalanceChange": -101034732,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": [
//                 {
//                     "mint": "3rsJxhSo1qpZZGsC5KTcTrwTBjxTRB34EmQ4B4DFg9t7",
//                     "rawTokenAmount": { "decimals": 8, "tokenAmount": "9354889794" },
//                     "tokenAccount": "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//                     "userAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm"
//                 }
//             ]
//         },
//         {
//             "account": "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "11111111111111111111111111111111",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "ComputeBudget111111111111111111111111111111",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "So11111111111111111111111111111111111111112",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "3rsJxhSo1qpZZGsC5KTcTrwTBjxTRB34EmQ4B4DFg9t7",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "9t7THu8wEvz25TKQxp6c7G45PPcgH6SJxw3ZrJPtYwS",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "2U9dTAv25hZkR7Fa43Tr83dCfCQMaxomvadXg4xjP5vH",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": [
//                 {
//                     "mint": "3rsJxhSo1qpZZGsC5KTcTrwTBjxTRB34EmQ4B4DFg9t7",
//                     "rawTokenAmount": { "decimals": 8, "tokenAmount": "-9354889794" },
//                     "tokenAccount": "2U9dTAv25hZkR7Fa43Tr83dCfCQMaxomvadXg4xjP5vH",
//                     "userAccount": "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"
//                 }
//             ]
//         },
//         {
//             "account": "4G3tg7RJgnfr78yHFmcFzyXtwb2og2RXYGxuZTJ9GCLS",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "5cRryFd5akw7aSQMQRjq7hkfm3CycBfEvR2oVNG7Bv34",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "9cSLZruoW5FuznZ9xwNr1NUkcxaVU454WRULTjbLseXS",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "9gyJTX1qnLdYs3ibiSdgBzTgW2GZr6ZX9bbHmk3Ro3FD",
//             "nativeBalanceChange": 100000000,
//             "tokenBalanceChanges": [
//                 {
//                     "mint": "So11111111111111111111111111111111111111112",
//                     "rawTokenAmount": { "decimals": 9, "tokenAmount": "100000000" },
//                     "tokenAccount": "9gyJTX1qnLdYs3ibiSdgBzTgW2GZr6ZX9bbHmk3Ro3FD",
//                     "userAccount": "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"
//                 }
//             ]
//         },
//         {
//             "account": "BzZ9vsHKnKe71t71WsvnoFiZ9SY7CZuSE4SFLYRNbwhp",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "FnH8acyEurdjVMEhuQp3tXHxDi9krvzRZpGWx2JaXyTB",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "GBoRCbrJQvsiL6yHrzfmFHBMiNxRv4VWPx9KKLCQS3Pb",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "H72BezgQpMCt99ZVGtJgpio7wPRM2siEsND6CyEk8Trf",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         },
//         {
//             "account": "DMWRkwnBvFRXzQzNpLA2AWBdnCTCJ36jPThLJqZcTECr",
//             "nativeBalanceChange": 0,
//             "tokenBalanceChanges": []
//         }
//     ],
//     "description": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm swapped 0.1 SOL for 93.54889794 TWEET",
//     "events": {
//         "swap": {
//             "innerSwaps": [
//                 {
//                     "nativeFees": [],
//                     "programInfo": {
//                         "account": "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
//                         "instructionName": "SwapEvent",
//                         "programName": "RAYDIUM_LIQUIDITY_POOL_V4",
//                         "source": "RAYDIUM"
//                     },
//                     "tokenFees": [],
//                     "tokenInputs": [
//                         {
//                             "fromTokenAccount": "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//                             "fromUserAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                             "mint": "So11111111111111111111111111111111111111112",
//                             "toTokenAccount": "9gyJTX1qnLdYs3ibiSdgBzTgW2GZr6ZX9bbHmk3Ro3FD",
//                             "toUserAccount": "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
//                             "tokenAmount": 0.1,
//                             "tokenStandard": "Fungible"
//                         }
//                     ],
//                     "tokenOutputs": [
//                         {
//                             "fromTokenAccount": "2U9dTAv25hZkR7Fa43Tr83dCfCQMaxomvadXg4xjP5vH",
//                             "fromUserAccount": "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
//                             "mint": "3rsJxhSo1qpZZGsC5KTcTrwTBjxTRB34EmQ4B4DFg9t7",
//                             "toTokenAccount": "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//                             "toUserAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                             "tokenAmount": 93.54889794,
//                             "tokenStandard": "Fungible"
//                         }
//                     ]
//                 }
//             ],
//             "nativeFees": [],
//             "nativeInput": {
//                 "account": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                 "amount": "100000000"
//             },
//             "nativeOutput": null,
//             "tokenFees": [],
//             "tokenInputs": [],
//             "tokenOutputs": [
//                 {
//                     "mint": "3rsJxhSo1qpZZGsC5KTcTrwTBjxTRB34EmQ4B4DFg9t7",
//                     "rawTokenAmount": { "decimals": 8, "tokenAmount": "9354889794" },
//                     "tokenAccount": "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//                     "userAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm"
//                 }
//             ]
//         }
//     },
//     "fee": 1034732,
//     "feePayer": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//     "instructions": [
//         {
//             "accounts": [],
//             "data": "FMtutj",
//             "innerInstructions": [],
//             "programId": "ComputeBudget111111111111111111111111111111"
//         },
//         {
//             "accounts": [],
//             "data": "3RrGg3Jexehu",
//             "innerInstructions": [],
//             "programId": "ComputeBudget111111111111111111111111111111"
//         },
//         {
//             "accounts": [
//                 "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                 "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//                 "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                 "So11111111111111111111111111111111111111112",
//                 "11111111111111111111111111111111",
//                 "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//             ],
//             "data": "2",
//             "innerInstructions": [
//                 {
//                     "accounts": ["So11111111111111111111111111111111111111112"],
//                     "data": "84eT",
//                     "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//                 },
//                 {
//                     "accounts": [
//                         "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                         "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW"
//                     ],
//                     "data": "11119os1e9qSs2u7TsThXqkBSRVFxhmYaFKFZ1waB2X7armDmvK3p5GmLdUxYdg3h7QSrL",
//                     "programId": "11111111111111111111111111111111"
//                 },
//                 {
//                     "accounts": ["J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW"],
//                     "data": "P",
//                     "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//                 },
//                 {
//                     "accounts": [
//                         "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//                         "So11111111111111111111111111111111111111112"
//                     ],
//                     "data": "6dYozC3gizSWUXKYKoaSwcQW4dqhBW1JZg6tUJqGrNM2j",
//                     "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//                 }
//             ],
//             "programId": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
//         },
//         {
//             "accounts": [
//                 "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                 "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW"
//             ],
//             "data": "3Bxs411Dtc7pkFQj",
//             "innerInstructions": [],
//             "programId": "11111111111111111111111111111111"
//         },
//         {
//             "accounts": ["J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW"],
//             "data": "J",
//             "innerInstructions": [],
//             "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//         },
//         {
//             "accounts": [
//                 "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
//                 "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                 "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//                 "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//                 "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
//                 "3rsJxhSo1qpZZGsC5KTcTrwTBjxTRB34EmQ4B4DFg9t7",
//                 "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
//                 "D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf",
//                 "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
//                 "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
//                 "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
//                 "9t7THu8wEvz25TKQxp6c7G45PPcgH6SJxw3ZrJPtYwS",
//                 "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
//                 "H72BezgQpMCt99ZVGtJgpio7wPRM2siEsND6CyEk8Trf",
//                 "2U9dTAv25hZkR7Fa43Tr83dCfCQMaxomvadXg4xjP5vH",
//                 "9gyJTX1qnLdYs3ibiSdgBzTgW2GZr6ZX9bbHmk3Ro3FD",
//                 "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//                 "4G3tg7RJgnfr78yHFmcFzyXtwb2og2RXYGxuZTJ9GCLS",
//                 "BzZ9vsHKnKe71t71WsvnoFiZ9SY7CZuSE4SFLYRNbwhp",
//                 "9cSLZruoW5FuznZ9xwNr1NUkcxaVU454WRULTjbLseXS",
//                 "GBoRCbrJQvsiL6yHrzfmFHBMiNxRv4VWPx9KKLCQS3Pb",
//                 "FnH8acyEurdjVMEhuQp3tXHxDi9krvzRZpGWx2JaXyTB",
//                 "5cRryFd5akw7aSQMQRjq7hkfm3CycBfEvR2oVNG7Bv34",
//                 "DMWRkwnBvFRXzQzNpLA2AWBdnCTCJ36jPThLJqZcTECr",
//                 "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//                 "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//                 "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm"
//             ],
//             "data": "PrpFmsY4d26dKbdKMAXs4neUxPMWRaNCe2rdkKW9CPMEMPBu",
//             "innerInstructions": [
//                 {
//                     "accounts": [
//                         "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
//                         "9t7THu8wEvz25TKQxp6c7G45PPcgH6SJxw3ZrJPtYwS",
//                         "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
//                         "H72BezgQpMCt99ZVGtJgpio7wPRM2siEsND6CyEk8Trf",
//                         "2U9dTAv25hZkR7Fa43Tr83dCfCQMaxomvadXg4xjP5vH",
//                         "9gyJTX1qnLdYs3ibiSdgBzTgW2GZr6ZX9bbHmk3Ro3FD",
//                         "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//                         "4G3tg7RJgnfr78yHFmcFzyXtwb2og2RXYGxuZTJ9GCLS",
//                         "BzZ9vsHKnKe71t71WsvnoFiZ9SY7CZuSE4SFLYRNbwhp",
//                         "9cSLZruoW5FuznZ9xwNr1NUkcxaVU454WRULTjbLseXS",
//                         "GBoRCbrJQvsiL6yHrzfmFHBMiNxRv4VWPx9KKLCQS3Pb",
//                         "FnH8acyEurdjVMEhuQp3tXHxDi9krvzRZpGWx2JaXyTB",
//                         "5cRryFd5akw7aSQMQRjq7hkfm3CycBfEvR2oVNG7Bv34",
//                         "DMWRkwnBvFRXzQzNpLA2AWBdnCTCJ36jPThLJqZcTECr",
//                         "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//                         "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//                         "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm"
//                     ],
//                     "data": "5ucmhStLiAKrHueiRPZaPeX",
//                     "programId": "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"
//                 },
//                 {
//                     "accounts": [
//                         "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//                         "9gyJTX1qnLdYs3ibiSdgBzTgW2GZr6ZX9bbHmk3Ro3FD",
//                         "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm"
//                     ],
//                     "data": "3Dc8EpW7Kr3R",
//                     "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//                 },
//                 {
//                     "accounts": [
//                         "2U9dTAv25hZkR7Fa43Tr83dCfCQMaxomvadXg4xjP5vH",
//                         "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//                         "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"
//                     ],
//                     "data": "3QYfwwpMA2iB",
//                     "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//                 },
//                 {
//                     "accounts": ["D8cy77BBepLMngZx6ZukaTff5hCt1HrWyKk3Hnd9oitf"],
//                     "data": "QMqFu4fYGGeUEysFnenhAvR83g86EDDNxzUskfkWKYCBPWe1hqgD6jgKAXr6aYoEQaxoqYMTvWgPVk2AHWGHjdbNiNtoaPfZA4znu6cRUSWSeJGBkZunVEvoPk8hgRQQmhHd5yFnaHc8EpXTsSWk7xMQNnuTcx3Gd7nXZn4cpgtLHzF",
//                     "programId": "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"
//                 }
//             ],
//             "programId": "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"
//         },
//         {
//             "accounts": [
//                 "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//                 "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//                 "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm"
//             ],
//             "data": "A",
//             "innerInstructions": [],
//             "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//         }
//     ],
//     "nativeTransfers": [
//         {
//             "amount": 100000000,
//             "fromUserAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//             "toUserAccount": "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW"
//         },
//         {
//             "amount": 2039280,
//             "fromUserAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//             "toUserAccount": "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW"
//         },
//         {
//             "amount": 2039280,
//             "fromUserAccount": "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//             "toUserAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm"
//         }
//     ],
//     "signature": "jCiYfhK9cCzKpAkYd3C6sqhck9pXWzswDha4mGM6LaUm3pAW5N2BtwV6J16hQcxWVspX8pkxviZYFg9tuScxJ48",
//     "slot": 255296024,
//     "source": "JUPITER",
//     "timestamp": 1710919294,
//     "tokenTransfers": [
//         {
//             "fromTokenAccount": "J4QEcTGScLxbZmufkMH7NhJHJ63U9f4xWeU4KPKyeHQW",
//             "fromUserAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//             "mint": "So11111111111111111111111111111111111111112",
//             "toTokenAccount": "9gyJTX1qnLdYs3ibiSdgBzTgW2GZr6ZX9bbHmk3Ro3FD",
//             "toUserAccount": "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
//             "tokenAmount": 0.1,
//             "tokenStandard": "Fungible"
//         },
//         {
//             "fromTokenAccount": "2U9dTAv25hZkR7Fa43Tr83dCfCQMaxomvadXg4xjP5vH",
//             "fromUserAccount": "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
//             "mint": "3rsJxhSo1qpZZGsC5KTcTrwTBjxTRB34EmQ4B4DFg9t7",
//             "toTokenAccount": "JngLif5pCn6S4Ty2p5wYQzzNYH3hEhA5R8Luh8LCS5S",
//             "toUserAccount": "HR7KFr9vhbEeFqSoiRFc8S4g8x7N6G2ryBicpFb35Cbm",
//             "tokenAmount": 93.54889794,
//             "tokenStandard": "Fungible"
//         }
//     ],
//     "transactionError": null,
//     "type": "SWAP"
// }

// parseBodyData(tx).then(console.log); // 3rsJxhSo1qpZZGsC5KTcTrwTBjxTRB34EmQ4B4DFg9t7