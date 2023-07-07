import data from '~/static/data/tricks.json';
import { Trick } from '@/types/types';

export function getTrick(stances: string[], obstacles: string[], levels: string[]){
    let stance: string, obstacle: string, level: string | null;
    stance = stances.length > 0 ? stances[Math.floor(Math.random() * stances.length)] : "Regular";

    obstacle = obstacles.length > 0? obstacles[Math.floor(Math.random() * obstacles.length)] : "on Flat";
    level = levels.length > 0? levels[Math.floor(Math.random() * levels.length)] : null;

    const tricks = data as Trick[];
    const filteredTricks = tricks.filter(trick => {
        if (level !== null && level.toLocaleLowerCase() !== trick.level.toLocaleLowerCase()) {
            return false;
        }
        return true;
    });

    const selectedTrick = filteredTricks[Math.floor(Math.random() * filteredTricks.length)];
    const side = selectedTrick.noSides? "" : Math.random() < 0.3? "Frontside " :  Math.random() < 0.5? "Backside " : "";
    const trickToDo = {
        name: stance + " " + side + selectedTrick.name + " " + obstacle,
        description: selectedTrick.description,
        level: selectedTrick.level,
        mentions: selectedTrick.mentions,
    };

    return trickToDo;
}