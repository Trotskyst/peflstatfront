export function GetTurnirTable(score, table_type) {
    let team_scores = [];
    let team_list_tmp = [];

    for (let i = 0; i < score.length; i++) {
        if (table_type == 'all' || table_type == 'home')
            team_list_tmp.push(score[i]["team_home"]);
        if (table_type == 'all' || table_type == 'guest')
            team_list_tmp.push(score[i]["team_guest"]);
    }
    let team_list = new Set(team_list_tmp);

    for (let team of team_list) {
        let i_games = 0;
        let i_wins = 0;
        let i_draws = 0;
        let i_loses = 0;
        let i_goals_score = 0;
        let i_goals_miss = 0;
        for (let j = 0; j < score.length; j++) {
            if (table_type == 'all' || table_type == 'home')
                if (score[j]["team_home"] == team) {
                    i_games++;
                    i_goals_score += score[j]["goals_home"];
                    i_goals_miss += score[j]["goals_guest"];
                    if (score[j]["goals_home"] > score[j]["goals_guest"]) {
                        i_wins++;
                    }
                    else if (score[j]["goals_home"] == score[j]["goals_guest"]) {
                        i_draws++;
                    }
                    else {
                        i_loses++;
                    }
                }
            if (table_type == 'all' || table_type == 'guest')
                if (score[j]["team_guest"] == team) {
                    i_games++;
                    i_goals_score += score[j]["goals_guest"];
                    i_goals_miss += score[j]["goals_home"];
                    if (score[j]["goals_home"] < score[j]["goals_guest"]) {
                        i_wins++;
                    }
                    else if (score[j]["goals_home"] == score[j]["goals_guest"]) {
                        i_draws++;
                    }
                    else {
                        i_loses++;
                    }
                }
        }
        team_scores.push({
            "number": 0,
            "team": team,
            "games": i_games,
            "wins": i_wins,
            "draws": i_draws,
            "loses": i_loses,
            "goals_score": i_goals_score,
            "goals_miss": i_goals_miss,
            "difference": i_goals_score - i_goals_miss,
            "score": i_wins * 3 + i_draws,
        });
    }
    let turnir_table = team_scores.sort(function (a, b) {
        if (b["score"] > a["score"]) return 1;
        if (b["score"] < a["score"]) return -1;
        if (b["difference"] > a["difference"]) return 1;
        if (b["difference"] < a["difference"]) return -1;
        return 0
    });
    for (let i = 0; i < turnir_table.length; i++) {
        turnir_table[i]["number"] = i + 1;
    }

    let turnir_table_header =
        ["N", "Команда", "И", "В", "Н", "П", "МЗ", "МП", "+/-", "О"];
    let turnir_table_header_value =
        ["number", "team", "games", "wins", "draws", "loses", "goals_score", "goals_miss", "difference", "score"];
    let turnir_table_header2 = [];

    for (let i = 0; i < turnir_table_header.length; i++) {
        turnir_table_header2.push({ "text": turnir_table_header[i], "value": turnir_table_header_value[i] })
    }

    let turnir_table_name = "Турнирная таблица"
    if (table_type == 'home') {
        turnir_table_name += " (дома)";
    }
    else if (table_type == 'guest') {
        turnir_table_name += " (в гостях)";
    }
    return {
        "turnir_table_header": turnir_table_header2,
        "turnir_table": turnir_table,
        "column_count": turnir_table_header.length,
        "turnir_table_name": turnir_table_name,
        "row_count": turnir_table.length,
    };

}

function GetAccountList(score, team_home, team_guest) {
    let AccountList = '';
    let tmp_account = [];
    for (let i1 = 0; i1 < score.length; i1++) {
        if (score[i1]['team_home'] == team_home &&
            score[i1]['team_guest'] == team_guest) {
            tmp_account.push(score[i1]['goals_home'].toString() + ':' + score[i1]['goals_guest'].toString());
        }
    }
    if (tmp_account.length == 0)
        AccountList = '';
    else {
        for (let i1 = 0; i1 < tmp_account.length; i1++) {
            if (i1 < (tmp_account.length - 1))
                AccountList += tmp_account[i1] + '\n';
            else
                AccountList += tmp_account[i1];
        }
    }
    return AccountList;
}

export function GetShahmatka(score, turnir_table) {
    let shahmatka = [];
    let header = ['-', '-'];
    for (let i = 0; i < turnir_table.length; i++)
        header.push((i + 1).toString());

    for (let i = 0; i < turnir_table.length; i++) {
        let tmp_array = [(i + 1).toString(), turnir_table[i]['team']];
        for (let j = 0; j < turnir_table.length; j++) {
            if (i == j)
                tmp_array.push('X');
            else
                tmp_array.push(GetAccountList(score, turnir_table[i]['team'], turnir_table[j]['team']));
        }
        shahmatka.push(tmp_array);
    }

    return {
        "header": header,
        "shahmatka": shahmatka,
        "table_name": 'Шахматка',
    };
}

export function GetGeneralInformation(stat) {
    let table = [{ "number": 1, "name": 'Всего игр', "value": (stat.length).toString() }];
    let goals_home = 0;
    let goals_guest = 0;
    let wins_home = 0;
    let draws = 0;
    let wins_guest = 0;
    let games_effective = 0;
    let games_noteffective = 0;
    let viewers = 0;
    // let cards_yellow = 0;
    // let cards_red = 0;

    for (let i = 0; i < stat.length; i++) {
        let i_goals_home = stat[i]['goals_home'];
        let i_goals_guest = stat[i]['goals_guest'];
        goals_home += i_goals_home;
        goals_guest += i_goals_guest;
        viewers += stat[i]['viewers'];
        if (i_goals_home > i_goals_guest)
            wins_home++;
        else if (i_goals_home < i_goals_guest)
            wins_guest++;
        else
            draws++;
        if ((i_goals_home + i_goals_guest) > 3)
            games_effective++;
        else if ((i_goals_home + i_goals_guest) == 0)
            games_noteffective++;
    }
    table.push({ "number": 2, "name": 'Всего голов', "value": (goals_home + goals_guest).toString() });
    table.push({ "number": 3, "name": 'Голов "хозяев"', "value": goals_home.toString() });
    table.push({ "number": 4, "name": 'Голов "гостей"', "value": goals_guest.toString() });
    table.push({ "number": 5, "name": 'Побед "хозяев"', "value": wins_home.toString() });
    table.push({ "number": 6, "name": 'Ничьих', "value": draws.toString() });
    table.push({ "number": 7, "name": 'Побед "гостей"', "value": wins_guest.toString() });
    table.push({ "number": 8, "name": 'Среднее кол-во голов за матч', "value": ((goals_home + goals_guest) / stat.length).toFixed(2).toString() });
    table.push({ "number": 9, "name": 'Результативных игр (>3 голов)', "value": games_effective.toString() });
    table.push({ "number": 10, "name": 'Безголевых игр', "value": games_noteffective.toString() });
    table.push({ "number": 11, "name": 'Всего зрителей', "value": viewers.toLocaleString('ru-RU') });
    table.push({ "number": 12, "name": 'В среднем зрителей за матч', "value": (viewers / stat.length).toFixed(2).toLocaleString('ru-RU') });
    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["name"] },
            { 'class': 'text-center', "value": table[i]["value"] }
        ]);
    }
    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Показатели", "value": "name" },
            { "text": "Значения", "value": "values" },
        ],
        "table": result_table,
        "table_name": 'Общая статистика',
    };
}

function ListFromArray(list, name_to_list, name_to_compare, separator) {
    let count = 1;
    let s = '';
    for (let i = 1; i < list.length; i++) {
        if (list[i][name_to_compare] == list[0][name_to_compare])
            count++;
    }
    if (count == 1)
        s = list[0][name_to_list];
    else {
        for (let i = 0; i < list.length; i++) {
            s += list[i][name_to_list];
            if (count > 1) {
                s += separator;
                count--;
            } else break;
        }
    }
    // console.log(list);
    // console.log(name_to_compare);
    // console.log(s);
    // console.log({
    //     name_to_list: s,
    //     name_to_compare: name_to_compare
    // });
    return [s, list[0][name_to_compare]];
}

export function GetCommandsRecords(team_list, stat) {
    let table = [];
    let table_goals = [];
    let table_goals_in = [];
    let table_goals_all = [];
    for (let team of team_list) {
        let goals = 0;
        let goals_in = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                goals += stat[i]['goals_home'];
                goals_in += stat[i]['goals_guest'];
            } else if (stat[i]['team_guest'] == team) {
                goals += stat[i]['goals_guest'];
                goals_in += stat[i]['goals_home'];
            }
        }
        table_goals.push({ "team": team, "goals": goals });
        table_goals_in.push({ "team": team, "goals": goals_in });
        table_goals_all.push({ "team": team, "goals": [goals, goals_in, goals + goals_in] });
    }

    let goals_max = ListFromArray(table_goals.sort(function (a, b) {
        if (b["goals"] > a["goals"]) return 1;
        if (b["goals"] < a["goals"]) return -1;
        return 0
    }), 'team', 'goals', ', ');

    let goals_min = ListFromArray(table_goals.sort(function (a, b) {
        if (b["goals"] < a["goals"]) return 1;
        if (b["goals"] > a["goals"]) return -1;
        return 0
    }), 'team', 'goals', ', ');

    let goals_in_max = ListFromArray(table_goals_in.sort(function (a, b) {
        if (b["goals"] > a["goals"]) return 1;
        if (b["goals"] < a["goals"]) return -1;
        return 0
    }), 'team', 'goals', ', ');

    let goals_in_min = ListFromArray(table_goals_in.sort(function (a, b) {
        if (b["goals"] < a["goals"]) return 1;
        if (b["goals"] > a["goals"]) return -1;
        return 0
    }), 'team', 'goals', ', ');

    let goals_all_max = ListFromArray(table_goals_all.sort(function (a, b) {
        if (b["goals"][2] > a["goals"][2]) return 1;
        if (b["goals"][2] < a["goals"][2]) return -1;
        return 0
    }), 'team', 'goals', ', ');

    let goals_all_min = ListFromArray(table_goals_all.sort(function (a, b) {
        if (b["goals"][2] < a["goals"][2]) return 1;
        if (b["goals"][2] > a["goals"][2]) return -1;
        return 0
    }), 'team', 'goals', ', ');

    table.push({ "name": "Забивная", "command": goals_max[0], "value": goals_max[1].toString() });
    table.push({ "name": "Незабивная", "command": goals_min[0], "value": goals_min[1].toString() });
    table.push({ "name": "Пропускающая", "command": goals_in_max[0], "value": goals_in_max[1].toString() });
    table.push({ "name": "Непропускающая", "command": goals_in_min[0], "value": goals_in_min[1].toString() });
    table.push({
        "name": "Зрелищная", "command": goals_all_max[0], "value":
            goals_all_max[1][2] + ' (' + goals_all_max[1][0] + '+' + goals_all_max[1][1] + ')'
    });
    table.push({
        "name": "Скучная", "command": goals_all_min[0], "value":
            goals_all_min[1][2] + ' (' + goals_all_min[1][0] + '+' + goals_all_min[1][1] + ')'
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-left', "value": table[i]["name"] },
            { 'class': 'text-center', "value": table[i]["value"] },
            { 'class': 'text-center', "value": table[i]["command"] }
        ]);
    }

    return {
        "header": [
            { "text": "Номинация", "value": "number" },
            { "text": "Показатели", "value": "name" },
            { "text": "Команда", "value": "values" },
        ],
        "table": result_table,
        "table_name": 'Команды-рекордсмены',
    };

}

export function GetCornerPlay(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let value_cross = 0;
        let value_playout = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                value_cross += stat[i]['corner_cross_home'];
                value_playout += stat[i]['corner_playout_home'];
            }
            else if (stat[i]['team_guest'] == team) {
                value_cross += stat[i]['corner_cross_guest'];
                value_playout += stat[i]['corner_playout_guest'];
            }
        }
        table.push({
            "team": team,
            "value_all": value_cross + value_playout,
            "value_cross": value_cross,
            "value_playout": value_playout
        });
    }
    table = table.sort(function (a, b) {
        if (b["value_all"] > a["value_all"]) return 1;
        if (b["value_all"] < a["value_all"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["value_all"] },
            { 'class': 'text-center', "value": (table[i]["value_cross"] / table[i]["value_all"] * 100).toFixed(1) },
            {
                'class': 'text-center',
                "value": (100 - (table[i]["value_cross"] / table[i]["value_all"] * 100).toFixed(1)).toFixed(1)
            }]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Угловых", "value": "value_all" },
            { "text": "Навесов, %", "value": "value_cross" },
            { "text": "Розыгрышей, %", "value": "value_playout" },
        ],
        "table": result_table,
        "table_name": 'Статистика розыгрышей угловых',
    };
}

export function GetFreekickPlay(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let value_cross = 0;
        let value_kick = 0;
        let value_playout = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                value_cross += stat[i]['freekick_cross_home'];
                value_kick += stat[i]['freekick_kick_home'];
                value_playout += stat[i]['freekick_playout_home'];
            }
            else if (stat[i]['team_guest'] == team) {
                value_cross += stat[i]['freekick_cross_guest'];
                value_kick += stat[i]['freekick_kick_guest'];
                value_playout += stat[i]['freekick_playout_guest'];
            }
        }
        table.push({
            "team": team,
            "value_all": value_cross + value_playout + value_kick,
            "value_cross": value_cross,
            "value_kick": value_kick,
            "value_playout": value_playout
        });
    }
    table = table.sort(function (a, b) {
        if (b["value_all"] > a["value_all"]) return 1;
        if (b["value_all"] < a["value_all"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["value_all"] },
            { 'class': 'text-center', "value": (table[i]["value_cross"] / table[i]["value_all"] * 100).toFixed(1) },
            { 'class': 'text-center', "value": (table[i]["value_kick"] / table[i]["value_all"] * 100).toFixed(1) },
            {
                'class': 'text-center',
                "value": (100 - (table[i]["value_cross"] / table[i]["value_all"] * 100).toFixed(1) -
                    (table[i]["value_kick"] / table[i]["value_all"] * 100)).toFixed(1)
            }]);
    }


    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Штрафных", "value": "value_all" },
            { "text": "Навесов, %", "value": "value_cross" },
            { "text": "Ударов, %", "value": "value_kick" },
            { "text": "Розыгрышей, %", "value": "value_playout" },
        ],
        "table": result_table,
        "table_name": 'Статистика розыгрышей штрафных',
    };
}

export function GetBallPossession(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let possession = 0;
        let minutes = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                minutes += stat[i]['minutes'];
                possession += stat[i]['possession_home'] * stat[i]['minutes'] / 100;
            }
            else if (stat[i]['team_guest'] == team) {
                minutes += stat[i]['minutes'];
                possession += stat[i]['possession_guest'] * stat[i]['minutes'] / 100;
            }
        }
        table.push({
            "team": team,
            "possession": (possession * 100 / minutes).toFixed(1)
        });
    }
    table = table.sort(function (a, b) {
        if (b["possession"] > a["possession"]) return 1;
        if (b["possession"] < a["possession"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["possession"] },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "%", "value": "possession" },
        ],
        "table": result_table,
        "table_name": 'Владение мячом',
    };
}

export function GetBallKickThem(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let games = 0;
        let kick = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                games++;
                kick += stat[i]['kick_home'];
            }
            else if (stat[i]['team_guest'] == team) {
                games++;
                kick += stat[i]['kick_guest'];
            }
        }
        table.push({
            "team": team,
            "kick": kick,
            "kick_medium": (kick / games).toFixed(1)
        });
    }
    table = table.sort(function (a, b) {
        if (b["kick"] > a["kick"]) return 1;
        if (b["kick"] < a["kick"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["kick"] },
            { 'class': 'text-center', "value": table[i]["kick_medium"] },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Удары (они)", "value": "kick" },
            { "text": "В среднем", "value": "kick_medium" },
        ],
        "table": result_table,
        "table_name": 'Нанесено ударов ими',
    };
}

export function GetBallKickTheir(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let games = 0;
        let kick = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                games++;
                kick += stat[i]['kick_guest'];
            }
            else if (stat[i]['team_guest'] == team) {
                games++;
                kick += stat[i]['kick_home'];
            }
        }
        table.push({
            "team": team,
            "kick": kick,
            "kick_medium": (kick / games).toFixed(1)
        });
    }
    table = table.sort(function (a, b) {
        if (b["kick"] > a["kick"]) return 1;
        if (b["kick"] < a["kick"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["kick"] },
            { 'class': 'text-center', "value": table[i]["kick_medium"] },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Удары (они)", "value": "kick" },
            { "text": "В среднем", "value": "kick_medium" },
        ],
        "table": result_table,
        "table_name": 'Нанесено ударов соперниками',
    };
}

export function GetBallKickTargetThem(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let games = 0;
        let kick = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                games++;
                kick += stat[i]['kick_target_home'];
            }
            else if (stat[i]['team_guest'] == team) {
                games++;
                kick += stat[i]['kick_target_guest'];
            }
        }
        table.push({
            "team": team,
            "kick": kick,
            "kick_medium": (kick / games).toFixed(1)
        });
    }
    table = table.sort(function (a, b) {
        if (b["kick"] > a["kick"]) return 1;
        if (b["kick"] < a["kick"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["kick"] },
            { 'class': 'text-center', "value": table[i]["kick_medium"] },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Удары (они)", "value": "kick" },
            { "text": "В среднем", "value": "kick_medium" },
        ],
        "table": result_table,
        "table_name": 'Нанесено ударов в створ ими',
    };
}

export function GetBallKickTargetTheir(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let games = 0;
        let kick = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                games++;
                kick += stat[i]['kick_target_guest'];
            }
            else if (stat[i]['team_guest'] == team) {
                games++;
                kick += stat[i]['kick_target_home'];
            }
        }
        table.push({
            "team": team,
            "kick": kick,
            "kick_medium": (kick / games).toFixed(1)
        });
    }
    table = table.sort(function (a, b) {
        if (b["kick"] > a["kick"]) return 1;
        if (b["kick"] < a["kick"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["kick"] },
            { 'class': 'text-center', "value": table[i]["kick_medium"] },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Удары (они)", "value": "kick" },
            { "text": "В среднем", "value": "kick_medium" },
        ],
        "table": result_table,
        "table_name": 'Нанесено ударов в створ соперниками',
    };
}

export function GetBallKickTargetProcentThem(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let kick = 0;
        let kick_target = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                kick += stat[i]['kick_home'];
                kick_target += stat[i]['kick_target_home'];
            }
            else if (stat[i]['team_guest'] == team) {
                kick += stat[i]['kick_guest'];
                kick_target += stat[i]['kick_target_guest'];
            }
        }
        table.push({
            "team": team,
            "kick": kick,
            "kick_target": kick_target,
            "kick_procent": (kick_target * 100 / kick).toFixed(1)
        });
    }
    table = table.sort(function (a, b) {
        if (b["kick_procent"] > a["kick_procent"]) return 1;
        if (b["kick_procent"] < a["kick_procent"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["kick"] },
            { 'class': 'text-center', "value": table[i]["kick_target"] },
            { 'class': 'text-center', "value": table[i]["kick_procent"] },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Ударов всего", "value": "kick" },
            { "text": "Ударов в створ", "value": "kick_target" },
            { "text": "%", "value": "kick_procent" },
        ],
        "table": result_table,
        "table_name": 'Точность у них',
    };
}

export function GetBallKickTargetProcentTheir(team_list, stat) {
    let table = [];
    for (let team of team_list) {
        let kick = 0;
        let kick_target = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i]['team_home'] == team) {
                kick += stat[i]['kick_guest'];
                kick_target += stat[i]['kick_target_guest'];
            }
            else if (stat[i]['team_guest'] == team) {
                kick += stat[i]['kick_home'];
                kick_target += stat[i]['kick_target_home'];
            }
        }
        table.push({
            "team": team,
            "kick": kick,
            "kick_target": kick_target,
            "kick_procent": (kick_target * 100 / kick).toFixed(1)
        });
    }
    table = table.sort(function (a, b) {
        if (b["kick_procent"] > a["kick_procent"]) return 1;
        if (b["kick_procent"] < a["kick_procent"]) return -1;
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["kick"] },
            { 'class': 'text-center', "value": table[i]["kick_target"] },
            { 'class': 'text-center', "value": table[i]["kick_procent"] },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Ударов всего", "value": "kick" },
            { "text": "Ударов в створ", "value": "kick_target" },
            { "text": "%", "value": "kick_procent" },
        ],
        "table": result_table,
        "table_name": 'Точность у соперников',
    };
}

export function GetGameViewers(team_list, stat, type) {
    let table = [];
    for (let i = 0; i < stat.length; i++) {
        table.push({
            "game": stat[i]['team_home'] + '-' + stat[i]['team_guest'] +
                ' (' + stat[i]['goals_home'] + '-' + stat[i]['goals_guest'] + '). ' + stat[i]['tur_number'] + ' тур',
            "viewers": stat[i]['viewers']
        });
    }

    table = table.sort(function (a, b) {
        if (type == 'max') {
            if (b["viewers"] > a["viewers"]) return 1;
            if (b["viewers"] < a["viewers"]) return -1;
        } else {
            if (b["viewers"] < a["viewers"]) return 1;
            if (b["viewers"] > a["viewers"]) return -1;
        }
        return 0
    });

    let table_name = '';
    if (type == 'max')
        table_name = 'Посещаемые матчи';
    else
        table_name = 'Непосещаемые  матчи';

    let result_count = 10;
    let result_table = []
    for (let i = 0; i < result_count; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["game"] },
            { 'class': 'text-center', "value": table[i]["viewers"].toLocaleString('ru-RU') },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Матч", "value": "values" },
            { "text": "Зрителей", "value": "viewers" },
        ],
        "table": result_table,
        "table_name": table_name,
    };
}

export function GetEfficiencyKick(team_list, stat, type) {
    let table = [];
    let type_team1 = ''
    let type_team2 = ''
    let table_name = ''
    if (type == 'them') {
        type_team1 = 'team_home';
        type_team2 = 'team_guest';
        table_name = 'Эффективность ударов у них';
    } else {
        type_team1 = 'team_guest';
        type_team2 = 'team_home';
        table_name = 'Эффективность ударов у соперников';
    }

    for (let team of team_list) {
        let kick_target = 0;
        let goal = 0;
        for (let i = 0; i < stat.length; i++) {
            if (stat[i][type_team1] == team) {
                goal += stat[i]['goals_home'];
                kick_target += stat[i]['kick_target_home'];
            }
            else if (stat[i][type_team2] == team) {
                goal += stat[i]['goals_guest'];
                kick_target += stat[i]['kick_target_guest'];
            }
        }
        table.push({
            "team": team,
            "goal": goal,
            "kick_target": kick_target,
            "kick_procent": goal * 100 / kick_target
        });
    }
    table = table.sort(function (a, b) {
        if (type == 'them') {
            if (b["kick_procent"] > a["kick_procent"]) return 1;
            if (b["kick_procent"] < a["kick_procent"]) return -1;
        } else {
            if (b["kick_procent"] < a["kick_procent"]) return 1;
            if (b["kick_procent"] > a["kick_procent"]) return -1;
        }
        return 0
    });

    let result_table = []
    for (let i = 0; i < table.length; i++) {
        result_table.push([
            { 'class': 'text-center', "value": i + 1 },
            { 'class': 'text-left', "value": table[i]["team"] },
            { 'class': 'text-center', "value": table[i]["goal"] },
            { 'class': 'text-center', "value": table[i]["kick_target"] },
            { 'class': 'text-center', "value": table[i]["kick_procent"].toFixed(1) },
        ]);
    }

    return {
        "header": [
            { "text": "N", "value": "number" },
            { "text": "Команда", "value": "values" },
            { "text": "Голов", "value": "goal" },
            { "text": "Ударов в створ", "value": "kick_target" },
            { "text": "%", "value": "kick_procent" },
        ],
        "table": result_table,
        "table_name": table_name,
    };
}