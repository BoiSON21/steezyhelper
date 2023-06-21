<template>
    <header>
        <h1 class="heading">Steezy Helper</h1>
        <p>Steezy Helper helps you finding your next skateboarding trick to try</p>

        <div class="multiselects">
            <CSelect id="stances" :label="stancesLabel" v-model:value="stancesValue" :options="stanceOptions" />
            <CSelect id="obstacles" :label="obstaclesLabel" v-model:value="obstaclesValue" :options="obstacleOptions" />
            <CSelect id="levels" :label="levelsLabel" v-model:value="levelsValue" :options="levelOptions" />
        </div>

        <el-button type="warning" @click="() => clickHandler(stancesValue, obstaclesValue, levelsValue)">GET YOUR TRICK</el-button>
        <el-divider border-style="dashed" />
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const stancesLabel = "Stances";
const stancesValue = ref(['regular', 'fakie', 'switch', 'nollie']);

const stanceOptions = [
    { value: 'regular', label: 'regular' },
    { value: 'fakie', label: 'fakie' },
    { value: 'switch', label: 'switch' },
    { value: 'nollie', label: 'nollie' }
    
]

const obstaclesLabel = "Obstacles";
const obstaclesValue = ref(['flat', 'ledge', 'rail', 'gap', 'stair', 'manual', 'transition']);

const obstacleOptions = [
    { value: 'flat', label: 'flat' },
    { value: 'ledge', label: 'ledge' },
    { value: 'rail', label: 'rail' },
    { value: 'gap', label: 'gap' },
    { value: 'stair', label: 'stair' },
    { value: 'manual', label: 'manual' },
    { value: 'transition', label: 'transition' }
]

const levelsLabel = "Levels";
const levelsValue = ref([]);

const levelOptions = [
    { value: 'beginner', label: 'beginner' },
    { value: 'intermediate', label: 'intermediate' },
    { value: 'advanced', label: 'advanced' }
]
</script>

<script lang="ts">
import data from '~/static/data/tricks.json';
import { Trick } from '@/types/types';

export default {
    methods: {
        clickHandler(stances: string[], obstacles: string[], levels: string[]) {
            let stance: string, obstacle: string, level: string | null;
            if (stances.length > 0) {
                stance = stances[Math.floor(Math.random() * stances.length)];
            } else {
                return;
            }
            obstacle = obstacles.length > 0? obstacles[Math.floor(Math.random() * obstacles.length)] : "flat";
            level = levels.length > 0? levels[Math.floor(Math.random() * levels.length)] : null;

            const tricks = data as Trick[];
            const filteredTricks = tricks.filter(trick => {
                if (level !== null && level !== trick.level) {
                    return false;
                }
                return true;
            });

            const selectedTrick = filteredTricks[Math.floor(Math.random() * filteredTricks.length)];
            const side = selectedTrick.noSides? "" : Math.random() < 0.3? "frontside " :  Math.random() < 0.3? "backside " : "";
            const trickToDo = {
                name: stance + " " + side + selectedTrick.name + " on " + obstacle,
                description: selectedTrick.description,
                level: selectedTrick.level
            };

            this.$emit('trick-calculated', trickToDo);
        }
    }
}
</script>