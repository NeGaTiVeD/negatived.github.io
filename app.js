let tg = window.Telegram.WebApp;
tg.expand();
document.write(`Добро пожаловать, @${tg.WebAppUser.username}.`);
