<template>
    <header>
        <h1 class="heading" @click="redirectToHome">Steezy Helper</h1>
        <p v-if="isHomePage">Steezy Helper helps you finding your next skateboarding trick to try</p>
        <el-button v-if="isHomePage" type="danger" @click="() => {redirectTo('/skate')}">Wanna play skate?</el-button>
    </header>
</template>

<script lang="ts">
export default {
    methods: {
        redirectToHome() {
            // check if we are already on the home page
            if (this.$route.path === '/') {
                // if so, reload the page
                window.location.reload()
            } else {
                // if not, redirect to the home page
                this.$router.push({ path: '/' })
            }
        },
        redirectTo(path: string){
            this.$router.push({ path: path })
        }
    },
    computed: {
        isHomePage() {
            return this.$route.path === '/'
        },
    }
}
</script>


<style>
.heading {
    text-shadow: -2px 2px 0px black, -4px 4px 0px var(--sh-optional-ft-color), -6px 6px 0px rgb(180, 83, 166);
}

.heading:hover {
    cursor: pointer;
}
</style>