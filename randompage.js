function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var links = ['https://outlook.office.com/mail/inbox', 'https://www.youtube.com/', 'https://forms.gle/oe4pyo7BQRSeuSYp8','https://findy-code.io/?email_sent=true']; //同じようにして遷移先のURLを配列へ格納する
window.location.href = links[getRandomInt(links.length)]; //getrandomInt(x)のxを遷移先のページの数に
