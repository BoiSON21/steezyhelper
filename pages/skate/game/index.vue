<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/skate' }">Skate</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/skate/game' }">Game</el-breadcrumb-item>
        </el-breadcrumb>
        <div v-if="!gameWinner">
            <TrickDisplay :trick="currentTrick" />
            <el-divider border-style="solid" />
            <p>Remember: on the last letter you get two attempts!</p>
            <p>If you want to swap the trick press this button</p>
            <el-button type="warning" @click="newTrick">GET NEW TRICK</el-button>
            <el-divider border-style="dashed" />
            <transition name="slide" mode="out-in">
                <PlayerMissMakeCard v-if="data.length > 0" :key="currentPlayer" :player="data[currentPlayer]" @miss="itsAMiss" @make="itsAMake" style="margin-top: 10px;"/>
            </transition>
        </div>
        <div v-else>
            <h2>Game Over!</h2>
            <h3>{{ gameWinner }} wins!</h3>
            <el-button type="primary" @click="restart">Restart</el-button>
            <el-button type="warning" @click="backToHomepage">Back to Menu</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Trick, SkatePlayer } from '@/types/types';
import { getTrick } from '@/utils/functions';
import TrickDisplay from '~/components/TrickDisplay.vue';
import PlayerMissMakeCard from '~/components/PlayerMissMakeCard.vue';

const letters = ['S', 'K', 'A', 'T', 'E'];

export default {
    components: {
        TrickDisplay,
        PlayerMissMakeCard
    },
    data() {
        return {
            data: [] as SkatePlayer[],
            players: [] as { name: string }[],
            stances: [] as string[],
            obstacles: [] as string[],
            levels: [] as string[],
            currentTrick: {} as Trick,
            currentPlayer: 0 as number,
            gameWinner: '' as string,
        }
    },
    mounted() {
        if(this.$route.query.players === undefined || this.$route.query.stances === undefined || this.$route.query.obstacles === undefined || this.$route.query.levels === undefined){
            this.$router.push('/skate');
            return;
        }

        this.players = JSON.parse(this.$route.query.players as string);

        this.players.forEach((player: { name: string; }) => {
            this.data.push({ name: player.name, letters: '', letterCount: 0, hasTried: false, isOut: false });
        });

        this.stances = JSON.parse(this.$route.query.stances as string);
        this.obstacles = JSON.parse(this.$route.query.obstacles as string);
        this.levels = JSON.parse(this.$route.query.levels as string);

        this.currentTrick = getTrick(this.stances, this.obstacles, this.levels);
    },
    methods: {
        itsAMake() {
            this.data[this.currentPlayer].hasTried = true;
            this.checkRound();
        },
        itsAMiss() {
            this.data[this.currentPlayer].letterCount++;
            this.data[this.currentPlayer].letters += letters[this.data[this.currentPlayer].letterCount-1];
            if(this.data[this.currentPlayer].letterCount !== 5) {
                this.data[this.currentPlayer].letters += '.';
            } else {
                this.data[this.currentPlayer].isOut = true;
            }

            this.data[this.currentPlayer].hasTried = true;
            this.checkRound();
        },
        checkRound(){
            let isOutCount = 0;
            let roundOver = true;
            this.data.forEach((player: { hasTried: boolean; isOut: boolean; }) => {
                if(!player.hasTried) {
                    roundOver = false;
                }
                if(player.isOut) {
                    isOutCount++;
                }
            });

            if(roundOver) {
                // check if only one player is left
                if((this.players.length === 1 && isOutCount === 1) || (this.players.length > 1 && isOutCount === this.players.length - 1)) {
                    const player = this.data.find((player: { isOut: boolean; }) => !player.isOut);
                    this.gameWinner = player? player.name : this.players[0].name;
                }

                this.data.forEach((player: { hasTried: boolean; isOut: boolean; }) => {
                    player.hasTried = player.isOut;
                });
                this.newTrick();
                this.currentPlayer = 0;
            } else {
                this.currentPlayer++;
                if(this.currentPlayer >= this.players.length) {
                    this.currentPlayer = 0;
                }
            }
        },
        restart(){
            // restart the game
            this.data.forEach((player: { letters: string; letterCount: number; hasTried: boolean; isOut: boolean; }) => {
                player.letters = '';
                player.letterCount = 0;
                player.hasTried = false;
                player.isOut = false;
            });

            this.gameWinner = '';
            this.currentPlayer = 0;
        },
        backToHomepage(){
            this.$router.push({ path: '/' });
        },
        newTrick(){
            this.currentTrick = getTrick(this.stances, this.obstacles, this.levels);
            this.$nextTick(() => {
                if (window.innerWidth <= 768) {
                    const headerElement = document.querySelector('.heading');
                    if (headerElement) {
                        headerElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        },
    }
}
</script>

<style>
.el-breadcrumb {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.el-table {
    font-size: 10pt;
}

@media screen and (max-width: 768px) {
    .el-table .el-button {
        margin: 0px 2px;
        width: 40px;
    }   
}
</style>