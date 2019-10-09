export function GetBombarders(table) {
    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push(
            {
                "number": i + 1,
                "name": table[i]["name"],
                "team": table[i]["team"],
                "played": table[i]["played"],
                "goal": table[i]["goal"],
            });
        // if (i + 1 == count_table_bombarders)
        //     break;
    }
    return {
        "headers": [
            { "text": "N", "align": "center", "sortable": false, "value": "number" },
            { "text": "Игрок", "align": "left", "sortable": false, "value": "name" },
            { "text": "Команда", "align": "left", "sortable": false, "value": "team" },
            { "text": "Матчей", "align": "center", "sortable": true, "value": "played" },
            { "text": "Голов", "align": "center", "sortable": true, "value": "goal" },
        ],
        "items": result_table,
        "class": "table_info",
        "table_name": 'Бомбардиры',
    };
}

export function GetPivots(table) {
    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push(
            {
                "number": i + 1,
                "name": table[i]["name"],
                "team": table[i]["team"],
                "played": table[i]["played"],
                "pases": table[i]["pases"],
            });
        // if (i + 1 == count_table_bombarders)
        //     break;
    }
    return {
        "headers": [
            { "text": "N", "align": "center", "sortable": false, "value": "number" },
            { "text": "Игрок", "align": "left", "sortable": false, "value": "name" },
            { "text": "Команда", "align": "left", "sortable": false, "value": "team" },
            { "text": "Матчей", "align": "center", "sortable": true, "value": "played" },
            { "text": "Пасов", "align": "center", "sortable": true, "value": "pases" },
        ],
        "items": result_table,
        "class": "table_info",
        "table_name": 'Голевые распасовщики',
    };
}

export function GetGoalAndPases(table) {
    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push(
            {
                "number": i + 1,
                "name": table[i]["name"],
                "team": table[i]["team"],
                "played": table[i]["played"],
                "goal": table[i]["goal"],
                "pases": table[i]["pases"],
                "goal_and_pases": table[i]["goal_and_pases"],
            });
        // if (i + 1 == count_table_bombarders)
        //     break;
    }
    return {
        "headers": [
            { "text": "N", "align": "center", "sortable": false, "value": "number" },
            { "text": "Игрок", "align": "left", "sortable": false, "value": "name" },
            { "text": "Команда", "align": "left", "sortable": false, "value": "team" },
            { "text": "Матчей", "align": "center", "sortable": true, "value": "played" },
            { "text": "Голов", "align": "center", "sortable": true, "value": "goal" },
            { "text": "Пасов", "align": "center", "sortable": true, "value": "pases" },
            { "text": "Гол+Пас", "align": "center", "sortable": true, "value": "goal_and_pases" },
        ],
        "items": result_table,
        "class": "table_info",
        "table_name": 'Гол+Пас',
    };
}

export function GetStatPlayersPlayedMaxTime(table) {
    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push(
            {
                "number": i + 1,
                "name": table[i]["name"],
                "goal": table[i]["goal"],
                "pases": table[i]["pases"],
                "played": table[i]["played"],
                "rating": table[i]["rating"],
                "minutes": table[i]["minutes"],
                "capitan": table[i]["capitan"],
                "im": table[i]["im"],
                "basis": table[i]["basis"],
                "count_find": table[i]["count_find"],
                "stat_shtanga": table[i]["stat_shtanga"],
                "stat_offside": table[i]["stat_offside"],
                "stat_kick_far": table[i]["stat_kick_far"],
                "stat_kick_far_ok": table[i]["stat_kick_far_ok"],
                "stat_kick_far_no": table[i]["stat_kick_far_no"],
                "stat_kick": table[i]["stat_kick"],
                "stat_kick_ok": table[i]["stat_kick_ok"],
                "stat_kick_no": table[i]["stat_kick_no"],
                "stat_head": table[i]["stat_head"],
                "stat_head_ok": table[i]["stat_head_ok"],
                "stat_head_no": table[i]["stat_head_no"],
                "stat_block": table[i]["stat_block"],
                "stat_pass": table[i]["stat_pass"],
                "stat_pass_ok": table[i]["stat_pass_ok"],
                "stat_pass_no": table[i]["stat_pass_no"],
                "stat_cross": table[i]["stat_cross"],
                "stat_cross_ok": table[i]["stat_cross_ok"],
                "stat_cross_no": table[i]["stat_cross_no"],
                "stat_dribbling": table[i]["stat_dribbling"],
                "stat_dribbling_ok": table[i]["stat_dribbling_ok"],
                "stat_dribbling_no": table[i]["stat_dribbling_no"],
                "stat_tackle": table[i]["stat_tackle"],
                "stat_tackle_ok": table[i]["stat_tackle_ok"],
                "stat_tackle_no": table[i]["stat_tackle_no"],
                "stat_up": table[i]["stat_up"],
                "stat_up_ok": table[i]["stat_up_ok"],
                "stat_up_no": table[i]["stat_up_no"],
                "stat_perehvat": table[i]["stat_perehvat"],
                "stat_poter": table[i]["stat_poter"],
                "stat_foul": table[i]["stat_foul"],
                "stat_foul_him": table[i]["stat_foul_him"],
                "stat_save": table[i]["stat_save"],
                "stat_save_ok": table[i]["stat_save_ok"],
                "stat_save_no": table[i]["stat_save_no"]
            });
    }
    return {
        "headers": [
            { "text": "N", "align": "center", "sortable": true, "value": "number" },
            { "text": "Игрок", "align": "left", "sortable": true, "value": "name" },
            { "text": "Гол", "align": "center", "sortable": true, "value": "goal" },
            { "text": "Пас", "align": "center", "sortable": true, "value": "pases" },
            { "text": "Игр", "align": "center", "sortable": true, "value": "played" },
            { "text": "Рейт", "align": "center", "sortable": true, "value": "rating" },
            { "text": "Мин", "align": "center", "sortable": true, "value": "minutes" },
            { "text": "Ка пи тан", "align": "center", "sortable": true, "value": "capitan" },
            { "text": "ИМ", "align": "center", "sortable": true, "value": "im" },
            { "text": "Игр в осно-ве", "align": "center", "sortable": true, "value": "basis" },
            { "text": "Кол- во упом.", "align": "center", "sortable": true, "value": "count_find" },
            { "text": "Штанг", "align": "center", "sortable": true, "value": "stat_shtanga" },
            { "text": "Офс айд", "align": "center", "sortable": true, "value": "stat_offside" },
            { "text": "Даль ний удар (ДУ)", "align": "center", "sortable": true, "value": "stat_kick_far" },
            { "text": "ДУ ст вор", "align": "center", "sortable": true, "value": "stat_kick_far_ok" },
            { "text": "ДУ ми мо", "align": "center", "sortable": true, "value": "stat_kick_far_no" },
            { "text": "Удар но гой (УН)", "align": "center", "sortable": true, "value": "stat_kick" },
            { "text": "УН ст вор", "align": "center", "sortable": true, "value": "stat_kick_ok" },
            { "text": "УН ми мо", "align": "center", "sortable": true, "value": "stat_kick_no" },
            { "text": "Удар го ло вой (УГ)", "align": "center", "sortable": true, "value": "stat_head" },
            { "text": "УГ ст вор", "align": "center", "sortable": true, "value": "stat_head_ok" },
            { "text": "УГ ми мо", "align": "center", "sortable": true, "value": "stat_head_no" },
            { "text": "Бло кир. удары", "align": "center", "sortable": true, "value": "stat_block" },
            { "text": "Пасы", "align": "center", "sortable": true, "value": "stat_pass" },
            { "text": "Пс+", "align": "center", "sortable": true, "value": "stat_pass_ok" },
            { "text": "Пс-", "align": "center", "sortable": true, "value": "stat_pass_no" },
            { "text": "На вес (Нв)", "align": "center", "sortable": true, "value": "stat_cross" },
            { "text": "Нв+", "align": "center", "sortable": true, "value": "stat_cross_ok" },
            { "text": "Нв-", "align": "center", "sortable": true, "value": "stat_cross_no" },
            { "text": "Дри блинг (Дб)", "align": "center", "sortable": true, "value": "stat_dribbling" },
            { "text": "Дб+", "align": "center", "sortable": true, "value": "stat_dribbling_ok" },
            { "text": "Дб-", "align": "center", "sortable": true, "value": "stat_dribbling_no" },
            { "text": "От бор (От)", "align": "center", "sortable": true, "value": "stat_tackle" },
            { "text": "От+", "align": "center", "sortable": true, "value": "stat_tackle_ok" },
            { "text": "От-", "align": "center", "sortable": true, "value": "stat_tackle_no" },
            { "text": "Верх. едино бор (ВЕ)", "align": "center", "sortable": true, "value": "stat_up" },
            { "text": "ВЕ+", "align": "center", "sortable": true, "value": "stat_up_ok" },
            { "text": "ВЕ-", "align": "center", "sortable": true, "value": "stat_up_no" },
            { "text": "Пе рехв", "align": "center", "sortable": true, "value": "stat_perehvat" },
            { "text": "По те ри", "align": "center", "sortable": true, "value": "stat_poter" },
            { "text": "Фол", "align": "center", "sortable": true, "value": "stat_foul" },
            { "text": "Фол на нём", "align": "center", "sortable": true, "value": "stat_foul_him" },
            { "text": "Сейв (Св)", "align": "center", "sortable": true, "value": "stat_save" },
            { "text": "Св+", "align": "center", "sortable": true, "value": "stat_save_ok" },
            { "text": "Св-", "align": "center", "sortable": true, "value": "stat_save_no" }],
        "items": result_table,
        "class": "table_StatPlayersPlayedMaxTime",
    };
}
