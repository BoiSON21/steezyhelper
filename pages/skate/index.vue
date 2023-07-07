<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/skate' }">Skate</el-breadcrumb-item>
        </el-breadcrumb>
        <p>Regular skate with a catch: The tricks are provided by the computer.</p>
        <p>Choose your stances, obstacles and levels and let the computer decide which trick you have to do.</p>
        <p>Have fun!</p>
        <el-divider border-style="dashed" />
        
        <p>Who is playing?</p>
        <el-input v-model="playerName" placeholder="" @keyup.enter="addPlayer"></el-input>

        <el-table stripe :data="players" max-height="250" empty-text="no players yet">
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column label="" fixed="right" width="50">
                <template #default="scope">
                    <el-icon><CircleCloseFilled style="color: var(--sh-primary-remove-color); cursor: pointer;" @click="removePlayer(scope.$index)"/></el-icon>
                </template> 
            </el-table-column>
        </el-table>
        <el-button type="primary" id="btnStart" @click="startGame">SELECT TRICKS</el-button>
    </div>
</template>

<script lang="ts">
import { CircleCloseFilled } from '@element-plus/icons-vue';

export default {
    components: {
        CircleCloseFilled
    },
    data() {
        return {
            playerName: '',
            players: [] as { name: string }[],
        }
    },
    methods: {
        addPlayer() {
            // adds the playerName to the players array and resets the playerName
            if(this.playerName === '') return;
            this.players.push({ name: this.playerName });
            this.playerName = '';
        },
        removePlayer(index: number) {
            // removes the player at the given index
            this.players.splice(index, 1);
        },
        startGame() {
            if(this.players.length < 1) {
                return;
            }

            // redirect to the game page
            this.$router.push({ path: '/skate/selection', query: { players: JSON.stringify(this.players) } });
        },
    },
}
</script>

<style scoped>
div > .el-input, div > .el-button, div > .el-table, div > .el-alert {
    margin-bottom: 15px;
}

.el-table, .el-input, .el-alert {
    display: flex;
    margin: 0 auto;
}

#btnStart {
    margin-bottom: 0;
}

.el-alert {
    width: 50vw;
}

.el-input {
    padding: 0 10px 0 0px;
    width: 30vw;
    font-size: 12pt;
    font-weight: bold;
}

.el-breadcrumb {
    display: flex;
    justify-content: center;
}

.el-table {
    font-size: 12pt;
}

@media screen and (max-width: 768px) {
    .el-input {
        width: 80vw;
    }
}
</style>
