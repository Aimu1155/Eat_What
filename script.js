let breakfast = ["早安好樂", "早八風味早午餐","麥當勞","麥味登","麥方部落","樂包子","弘爺漢堡"];
let lunch = ["舞奇雞","麥當勞","炸魂雞排","嘉義豆奶攤","虎尾炸饅頭"];
let dinner = ["池上便當", "一江拉麵","麥當勞","阿嫂赤肉羹","鬥牛牛排","小時候牛排","怪人魷魚羹麵","黃悶雞米飯","麵屋柴","無空間廚房","紅鶴亞","金霸小火鍋","控肉飯","梁社漢排骨","虎秋文昌雞","大埔鐵板燒","咖哩老師","虎尾不思義","魯香香黃金樂排","舒香小舖","墨竹亭","野島家咖哩"];

function pickFood() {
    let meal = document.getElementById("meal").value;
    let list;

    if (meal === "breakfast") list = breakfast;
    else if (meal === "lunch") list = lunch;
    else list = dinner;

    let resultText = document.getElementById("result");

    // 🎲 偽抽選動畫
    let count = 0;
    let interval = setInterval(() => {
        let random = list[Math.floor(Math.random() * list.length)];
        resultText.innerText = random;
        count++;

        if (count > 10) {
            clearInterval(interval);
        }
    }, 100);
}