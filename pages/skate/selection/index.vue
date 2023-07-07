<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/skate' }">Skate</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/skate/selection' }">Selection</el-breadcrumb-item>
        </el-breadcrumb>

        <p>Now select the tricks by choosing your stances, obstacles and levels.</p>
        <el-divider border-style="dashed" />

        <div class="multiselects">
            <CSelect id="stances" :label="stancesLabel" v-model:value="stancesValue" :options="stanceOptions" />
            <CSelect id="obstacles" :label="obstaclesLabel" v-model:value="obstaclesValue" :options="obstacleOptions" />
            <CSelect id="levels" :label="levelsLabel" v-model:value="levelsValue" :options="levelOptions" />
        </div>

        <el-button type="primary" id="btnStart" @click="() => startGame(stancesValue, obstaclesValue, levelsValue)">START GAME</el-button>
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
export default {
    data() {
        return {
            players: [] as { name: string }[],
        }
    },
    mounted() {
        if(this.$route.query.players === undefined){
            this.$router.push('/skate');
            return;
        }

        // get the players from the query
        this.players = JSON.parse(this.$route.query.players as string);
    },
    methods: {
        // Function to start the game
        startGame(stances: string[], obstacles: string[], levels: string[]) {
            // redirect to the game page
            this.$router.push({ path: '/skate/game', query: { players: JSON.stringify(this.players), stances: JSON.stringify(stances), obstacles: JSON.stringify(obstacles), levels: JSON.stringify(levels) } });
        },
    }
}
</script>

<style scoped>
.multiselects {
    margin: 0px 0px 25px 0px;
}

.el-breadcrumb {
    display: flex;
    justify-content: center;
}
</style>