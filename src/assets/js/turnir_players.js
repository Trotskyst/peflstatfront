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