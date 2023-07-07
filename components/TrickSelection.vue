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
import { stanceOptions, obstacleOptions, levelOptions } from '@/utils/options';

const stancesLabel = "Stances";
const stancesValue = ref(['Regular', 'Fakie', 'Switch', 'Nollie']);

const obstaclesLabel = "Obstacles";
const obstaclesValue = ref(['on Flat']);

const levelsLabel = "Levels";
const levelsValue = ref([]);
</script>

<script lang="ts">
import { getTrick } from '@/utils/functions';

export default {
    methods: {
        clickHandler(stances: string[], obstacles: string[], levels: string[]) {
            this.$emit('trick-calculated', getTrick(stances, obstacles, levels));
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