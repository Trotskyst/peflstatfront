export function GetBombarders(stat_goals, players_list) {
    let table = [];

    for (let players of players_list) {
        let goal = 0;
        for (let i = 0; i < stat_goals.length; i++) {
            if (stat_goals[i]['team'] === players['team'] && stat_goals[i]['player_goal'] === players['player']) {
                goal++;
            }
        }
        table.push({
            "team": players['team'],
            "player": players['player'],
            "goal": goal,
        });
    }
    table = table.sort(function (a, b) {
        if (b["goal"] > a["goal"]) return 1;
        if (b["goal"] < a["goal"]) return -1;
        return 0
    });
    console.log(table);

    // let result_table = []
    // for (let i = 0; i < table.length; i++) {
    //     result_table.push([
    //         { 'class': 'text-center', "value": i + 1 },
    //         { 'class': 'text-left', "value": table[i]["team"] },
    //         { 'class': 'text-center', "value": table[i]["goal"] },
    //         { 'class': 'text-center', "value": table[i]["kick_target"] },
    //         { 'class': 'text-center', "value": table[i]["kick_procent"].toFixed(1) },
    //     ]);
    // }

    // return {
    //     "header": [
    //         { "text": "N", "value": "number" },
    //         { "text": "Команда", "value": "values" },
    //         { "text": "Голов", "value": "goal" },
    //         { "text": "Ударов в створ", "value": "kick_target" },
    //         { "text": "%", "value": "kick_procent" },
    //     ],
    //     "table": result_table,
    //     "table_name": table_name,
    // };
}