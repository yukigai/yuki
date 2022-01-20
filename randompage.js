function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var links = ['https://forms.gle/mbbGenJFQvbRjyU79']; //同じようにして遷移先のURLを配列へ格納する
window.location.href = links[getRandomInt(links.length)]; //getrandomInt(x)のxを遷移先のページの数に
