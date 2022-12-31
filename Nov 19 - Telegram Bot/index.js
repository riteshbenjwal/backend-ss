const { Telegraf } = require("telegraf");
require("dotenv").config();

/**
 * How to get the secret token for creating a bot ?
 * -> Open Telegram and search for BotFather
 * -> To read instruction type /start and press enter
 * -> to create a new bot type /newbot and presss enter
 * -> It will ask for a bot name, give a bot name without a / , ex: coding_bot
 * -> then it will ask for a username ending with bot, ex: code_exmaples_js_cpp_bot
 * // t.me/code_exmaples_js_cpp_bot
 */

let binarysearch = `
/**
 * This function tries to find the element x in the sorted array arr
 * @param {* Sorted arrangement of elements in the given array} arr 
 * @param {* Element to find } x 
 */
function binarySearch(arr, x) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let lo = 0;
    let hi = arr.length - 1;
    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if(arr[mid] === x) return mid;
        if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,5,7,8,9,13,16,17,20,22,25,26], 33))
`;

const bot = new Telegraf("5811676284:AAHS-5HjVzlxFSd34yxmJlqvAiNHfbdluPw");

bot.start((ctx) => ctx.reply("Welcome to the new bot - Ritesh"));

bot.command("binarysearchjs", (ctx) => ctx.reply(binarysearch));

bot.on("sticker", (ctx) => ctx.reply("👍"));

bot.launch();
