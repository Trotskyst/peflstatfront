export function UniqueObjectsOfTeamAndPlayer(object) {
    return object.reduce((acc, x) => acc.concat(acc.find(y => y.team === x.team && y.player === x.player) ? [] : [x]), []);
}