function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var links = ['https://outlook.office.com/mail/inbox', 'https://www.youtube.com/', 'https://twitter.com/']; //同じようにして遷移先のURLを配列へ格納する
window.location.href = links[getRandomInt(3)]; //getrandomInt(x)のxを遷移先のページの数に