<template>
    <div class="trick-display">
      <div class="trick-selected">Your trick: 
        <div class="trick-name"> {{ Object.keys(trick).length > 0? trick.name : "" }} </div>
      </div>
      <client-only>
        <div class="trick-display-description">
            <div class="trick-display-part" v-for="(part, index) in splitDescription(trick.description)" :key="index">
                <span v-if="part.type === 'text'">{{ part.content }}</span>
                <TrickTooltip v-else :trick="part.content" />
            </div>
        </div>
      </client-only>
      <p>{{ Object.keys(trick).length > 0? "Level: " + trick.level : "" }}</p>
    </div>
</template>

<script lang="ts">
import { Trick } from '~/types/types';
import { PropType } from 'vue';
import data from '~/static/data/tricks.json';

export default {
    methods: {
        splitDescription(description: string) {
            if(description === undefined){
                return [];
            }

            const result = [];
            for(const trickMentioned of this.trickList){
                const trickIndex = description.lastIndexOf(trickMentioned.name);
                if(trickIndex > 0){
                    const textBeforeTrick = description.substring(0, trickIndex);
                    const textAfterTrick = description.substring(trickIndex + trickMentioned.name.length);
                    result.push({ type: 'text', content: textBeforeTrick });
                    result.push({ type: 'trick', content: trickMentioned });
                    description = textAfterTrick;
                }
            }
            result.push({ type: 'text', content: description });

            return result;
        }
    },
    props: {
        trick: {
            type: Object as PropType<Trick>,
            default: {} as Trick
        }
    },
    computed: {
        trickList(): Trick[]{
            const trickList: Trick[] = [];
            if(Object.keys(this.trick).length > 0 && this.trick.mentions && this.trick.mentions.length > 0){
                for(const mentionedTrick of this.trick.mentions){
                    const foundTrick = data.find(trick => trick.name === mentionedTrick);
                    if (foundTrick) {
                        trickList.push(foundTrick as Trick);
                    }
                }
            }
            return trickList;
        }
    }
}
</script>

<style>
.trick-display {
    text-align: center;
    font-size: 10pt;
    margin: 0px !important;
}

.trick-selected {
    font-size: 16pt;
    margin: 0px !important;
}

.trick-display-description {
    margin-top: 10px;
    line-height: 2;
}

.trick-display-part {
    display: inline;
}

.trick-name {
    font-size: 20pt;
    background: var(--sh-button-primary-bg);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>