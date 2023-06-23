<template>
    <div class="trick-selection">
        <div class="multiselects">
            <CSelect id="stances" :label="stancesLabel" v-model:value="stancesValue" :options="stanceOptions" />
            <CSelect id="obstacles" :label="obstaclesLabel" v-model:value="obstaclesValue" :options="obstacleOptions" />
            <CSelect id="levels" :label="levelsLabel" v-model:value="levelsValue" :options="levelOptions" />
        </div>

        <el-button type="warning" @click="() => clickHandler(stancesValue, obstaclesValue, levelsValue)">GET YOUR TRICK</el-button>
        <el-divider border-style="dashed" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const stancesLabel = "Stances";
const stancesValue = ref(['Regular', 'Fakie', 'Switch', 'Nollie']);

const stanceOptions = [
    { value: 'Regular', label: 'Regular' },
    { value: 'Fakie', label: 'Fakie' },
    { value: 'Switch', label: 'Switch' },
    { value: 'Nollie', label: 'Nollie' }
    
]

const obstaclesLabel = "Obstacles";
const obstaclesValue = ref(['on Flat']);

const obstacleOptions = [
    { value: 'on Flat', label: 'Flat' },
    { value: 'on a Ledge', label: 'Ledge' },
    { value: 'on a Rail', label: 'Rail' },
    { value: 'over a Gap', label: 'Gap' },
    { value: 'on Stairs', label: 'Stairs' },
    { value: 'on a Manual Pad', label: 'Manual Pad' },
    { value: 'on a Hubba', label: 'Hubba' },
    { value: 'over a Hip', label: 'Hip' }
]

const levelsLabel = "Levels";
const levelsValue = ref([]);

const levelOptions = [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' }
]
</script>

<script lang="ts">
import data from '~/static/data/tricks.json';
import { Trick } from '@/types/types';

export default {
    methods: {
        clickHandler(stances: string[], obstacles: string[], levels: string[]) {
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

            this.$emit('trick-calculated', trickToDo);
        }
    }
}
</script>

<style>
.trick-selection {
    text-align: center;
}

.multiselects {
    margin: 0px 0px 25px 0px;
}
</style>