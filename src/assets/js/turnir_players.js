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

export function GetGoalAndPass(stat_players, stat_goals, players_list, count_table_pivots) {
    let table = [];

    for (let players of players_list) {
        let goal = 0;
        let pass = 0;
        let played = 0;
        for (let i = 0; i < stat_goals.length; i++) {
            if (stat_goals[i]['team'] === players['team'] && stat_goals[i]['player_goal'] === players['name']) {
                goal++;
            }
            if (stat_goals[i]['team'] === players['team'] && stat_goals[i]['player_pass'] === players['name'] && stat_goals[i]['player_pass']) {
                pass++;
            }
        }
        for (let i = 0; i < stat_players.length; i++) {
            if (stat_players[i]['team'] === players['team'] && stat_players[i]['name'] === players['name']) {
                played++;
            }
        }

        table.push({
            "team": players['team'],
            "name": players['name'],
            "goal": goal,
            "pass": pass,
            "goal_and_pass": goal + pass,
            "played": played,
        });
    }
    table = table.sort(function (a, b) {
        if (b["goal_and_pass"] > a["goal_and_pass"]) return 1;
        if (b["goal_and_pass"] < a["goal_and_pass"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["name"] },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["played"] },
            { 'class': 'text-center', "value": table[i]["goal"] },
            { 'class': 'text-center', "value": table[i]["pass"] },
            { 'class': 'text-center', "value": table[i]["goal_and_pass"] },
        ]);
        if (i + 1 == count_table_pivots)
            break;
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Игрок", "value": "name" },
            { "text": "Команда", "value": "team" },
            { "text": "Матчей", "value": "played" },
            { "text": "Голов", "value": "goal" },
            { "text": "Пасов", "value": "pass" },
            { "text": "Гол+Пас", "value": "goal_and_pass" },
        ],
        "table": result_table,
        "table_name": 'Гол + пас',
    };
}