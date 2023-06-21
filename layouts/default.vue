<template>
    <div>
        <Header @trick-calculated="updateTrick" />
        <slot />
        <TrickDisplay :trick="calculatedTrick" class="content"/>
        <Footer />
    </div>
</template>

<script lang="ts">
import Header from '~/components/Header.vue';
import TrickDisplay from '~/components/TrickDisplay.vue';
import { Trick } from '~/types/types';

export default {
    components: {
        Header,
        TrickDisplay
    },
    data() {
    return {
      calculatedTrick: {} as Trick
    };
    },
    methods: {
        updateTrick(trick: Trick) {
        this.calculatedTrick = trick;
        }
    }
}
</script>

<style>
.content {
    text-align: center;
    font-size: 10pt;
    margin: 0px !important;
}
</style>