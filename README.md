# АДРЕС САЙТА:
https://peflstat.herokuapp.com

# Основная статистика по выбранному дивизиону выбранной страны

## Описание полей json-файла с основной статистикой

```
country (varchar) - Страна
season (integer) - Сезон
div (varchar) - Дивизион
tur_number (integer) - Номер тура
tur_date (varchar) - Дата тура
game_link (varchar) - Ссылка на игру

timestamp (datetime) - Дата добавления

city (varchar) - Город
stadium (varchar) - Стадион
viewers (integer) - Зрители
minutes (integer) - Минут
arbitr (varchar) - Арбитр
wheater (varchar) - Погода

team_home (varchar) - Команда Дома
team_guest (varchar) - Команда Гость

manager_home (varchar) - Менеджер Дома
manager_guest (varchar) - Менеджер Гость

goals_home (integer) - Голы Дома
goals_guest (integer) - Голы Гость

kick_home (integer) - Удары Дома
kick_guest (integer) - Удары Гость

kick_target_home (integer) - Удары в створ Дома
kick_target_guest (integer) - Удары в створ Гость

goalpost_home (integer) - Штанги Дома
goalpost_guest (integer) - Штанги Гость

offside_home (integer) - Офсайды Дома
offside_guest (integer) - Офсайды Гость

corner_home (integer) - Угловые Дома
corner_guest (integer) - Угловые Гость

corner_cross_home (integer) - Угловые Навес Дома
corner_cross_guest (integer) - Угловые Навес Гость

corner_playout_home (integer) - Угловые Розыгрыш Дома
corner_playout_guest (integer) - Угловые Розыгрыш Гость

possession_home (integer) - Владение Дома
possession_guest (integer) - Владение Гость

kick_near_home (integer) - Удары из штрафной Дома
kick_near_guest (integer) - Удары из штрафной Гость

kick_near_target_home (integer) - Удары из штрафной в створ Дома
kick_near_target_guest (integer) - Удары из штрафной в створ Гость

kick_far_home (integer) - Удары из-за штрафной Дома
kick_far_guest (integer) - Удары из-за штрафной Гость

kick_far_target_home (integer) - Удары из-за штрафной в створ Дома
kick_far_target_guest (integer) - Удары из-за штрафной в створ Гость

kick_blocked_home (integer) - Заблокированные удары Дома
kick_blocked_guest (integer) - Заблокированные удары Гость

pass_home (integer) - Передачи Дома
pass_guest (integer) - Передачи Гость

pass_accurate_home (integer) - Передачи Точные Дома
pass_accurate_guest (integer) - Передачи Точные Гость

bend_home (integer) - Навесы Дома
bend_guest (integer) - Навесы Гость

bend_accurate_home (integer) - Навесы Точные Дома
bend_accurate_guest (integer) - Навесы Точные Гость

dribbling_home (integer) - Дриблинг Дома
dribbling_guest (integer) - Дриблинг Гость

dribbling_successful_home (integer) - Дриблинг Успешный Дома
dribbling_successful_guest (integer) - Дриблинг Успешный Гость

tackle_home (integer) - Отбор Дома
tackle_guest (integer) - Отбор Гость

tackle_successful_home (integer) - Отбор Успешный Дома
tackle_successful_guest (integer) - Отбор Успешный Гость

height_fight_home (integer) - Верховые единоборства Дома
height_fight_guest (integer) - Верховые единоборства Гость

height_fight_successful_home (integer) - Верховые единоборства Успешные Дома
height_fight_successful_guest (integer) - Верховые единоборства Успешные Гость

intercept_home (integer) - Перехваты Дома
intercept_guest (integer) - Перехваты Гость

turnover_home (integer) - Потери Дома
turnover_guest (integer) - Потери Гость

foul_home (integer) - Нарушения Дома
foul_guest (integer) - Нарушения Гость

penalty_home (integer) - Пенальти Дома
penalty_guest (integer) - Пенальти Гость

freekick_home (integer) - Штрафные Дома
freekick_guest (integer) - Штрафные Гость

freekick_cross_home (integer) - Штрафные Навес Дома
freekick_cross_guest (integer) - Штрафные Навес Гость

freekick_kick_home (integer) - Штрафные Удар Дома
freekick_kick_guest (integer) - Штрафные Удар Гость

freekick_playout_home (integer) - Штрафные Розыгрыш Дома
freekick_playout_guest (integer) - Штрафные Розыгрыш Гость
```
