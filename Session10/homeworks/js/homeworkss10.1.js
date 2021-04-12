// Bài tập 1
var group1 = 12;
var group2;
group2 = 2 * group1 - 4;
document.write("Tổ hai có " + group2 + " công nhân");

document.write("<br>");
document.write("<br>");

//Bài tập 2
var candy = 0;
var candyShell = 0;
var money = 2000;
var price = 200;
candy = money / price;
candyShell = candy;
while (candyShell >= 2) {
	candyShell = candyShell - 2;
	candyShell++;
	candy++;
}
document.write("Bạn mua được " + candy + " viên kẹo");

document.write("<br>");
document.write("<br>");

//Bài tập 3
var bag1 = 18;
var bag2 = 2 * bag1;
var marbles = (bag1 + bag2) / 2 - bag1;
document.write("Cần phải chuyển " + marbles + " viên bi sang túi thứ nhất để số viên bi ở 2 túi bằng nhau");

document.write("<br>");
document.write("<br>");

//Bài tập 4
var bookB = 27;
var bookM = bookB / 3;
var book = (bookB + bookM) / 3 - bookM;
document.write("Bình phải chuyển cho Minh " + book + " quyển sách");

document.write("<br>");
document.write("<br>");

//Bài tập 5
var marblesTotal = 50;
var marblesGreen;
marblesGreen = (27 - 50 * (3 / 4))/((2 / 5) - (3 / 4));
document.write("Số bi xanh: " + marblesGreen + "<br>");
var marblesRed = 50 - marblesGreen;
document.write("Số bi đỏ: " + marblesRed);

document.write("<br>");
document.write("<br>");

//Bài tập 6
var marblesTotal = 120;
var marblesRed = (1 / 5) * marblesTotal;
var marblesGreen = (30 / 100) * marblesTotal;
document.write("Số bi đỏ: " + marblesRed + "<br>");
document.write("Số bi xanh: " + marblesGreen + "<br>");
var marblesWhite = (marblesTotal - marblesRed - marblesGreen) / (1 + 7 / 3);
document.write("Số bi trắng: " + marblesWhite + "<br>");
var marblesYellow = marblesWhite / (3 / 7);
document.write("Số bi vàng: " + marblesYellow);

document.write("<br>");
document.write("<br>");

//Bài tập 7
var euro;
var usd;
var candy = 50;
usd = candy / 5;
document.write("Buratino đã tốn " + usd + " USD");
