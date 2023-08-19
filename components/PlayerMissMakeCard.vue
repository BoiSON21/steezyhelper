<template>
    <el-card :body-style="{padding: '0px'}">
        <div class="card-container">
            <div class="player-miss-make-info">
                <div class="player-miss-make-info-body">
                    <span class="playername">{{player.name}}</span>
                    <el-divider/>
                    <span>{{player.letters}}</span>
                </div>
            </div>
            <div class="player-miss-make-div" id="left-card-side" @click="miss">
                It's a miss! :(
            </div>
            <div class="player-miss-make-div" id="right-card-side" @click="make">
                It's a make!
            </div>
        </div>
    </el-card>
</template>

<script lang="ts">
import { SkatePlayer } from '@/types/types';

function transition(el: HTMLElement, itsAMake: boolean) {
    el.style.transform = itsAMake? 'translateX(300%) rotate(30deg)' : 'translateX(-300%) rotate(-30deg)';
}

export default {
    props: {
        player: {
            type: Object as () => SkatePlayer,
            required: true
        }
    },
    methods: {
        make() {
            this.$emit('make');
            transition(this.$el, true);
        },
        miss() {
            this.$emit('miss');
            transition(this.$el, false);
        },
    }
}
</script>

<style scoped>
.el-card {
    width: 250px;
    height: 250px;
    margin: auto;
    --el-card-border-color: unset;
    color: var(--sh-primary-ft-color);
    transition: transform 0.7s;
}

.card-container {
    position: relative;
}

.player-miss-make-info {
    position: absolute;
    line-height: 40px;
    width: 100%;
}

.player-miss-make-info-body {
    margin: 10px;
    background: #ffffff22;
    border-radius: 8px;
    backdrop-filter: blur(20px);
}

.player-miss-make-div{
    width: 50%;
    height: 250px;
    line-height: 250px;
}

.playername {
    font-size: 20px;
    text-shadow: -2px 2px 0px black, -4px 4px 0px var(--sh-optional-ft-color), -6px 6px 0px rgb(180, 83, 166);
}

.el-divider {
    margin: 0px;
}

#left-card-side {
    background-color: var(--el-color-danger);;
    float: left;
}

#left-card-side:hover {
    background-color: var(--el-color-danger-light-3);
}

#right-card-side {
    background-color: var(--el-color-primary);
    float: right;
}

#right-card-side:hover {
    background-color: var(--el-color-primary-light-3);
}

@media screen and (max-width: 768px) {
    .el-card {
        transition: transform 1s;
    }
}

</style>