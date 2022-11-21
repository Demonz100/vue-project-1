<template>
    <div>
        <div class="parent-branch">
            <span  @click="toggleShow">{{currentLevel == 0 ? '' : show ? '-' : '+'}}</span>
            <input type="checkbox">
            <div class="branch-text">
                {{trees.text}}
            </div>
        </div>
        <div class="child-branch" v-if="show">
            <RecursiveTree 
                v-for="child in trees.nodes"
                :key="child.text"
                :trees="child"
                :level="currentLevel++"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Ref } from 'vue';

export default defineComponent({
    name: 'RecursiveTree',
    props: {
        trees: Array,
        level: Number
    },
    setup(props){
        let show: Ref<Boolean> = ref(true)
        let currentLevel: Ref<any> = ref(0)

        return {show, currentLevel}
    },
    methods:{
        toggleShow(){
            this.show = !this.show
        }
    }
})
</script>

<style>
    .parent-branch{
        cursor: pointer;
        display: flex;
    }
    .parent-branch .branch-text{
        margin: 5px 0px;
    }
    .parent-branch input{
        margin: 0 10px;
    }
    .child-branch{
        border-left: 1px solid #ccc;
        padding-left: 20px;
    }
</style>