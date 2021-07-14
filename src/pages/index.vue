<template>
    <div>
        index
    </div>
</template>

<script>
export default {
    props: {

    },
    components: {

    },
    data() {
        return {

        };
    },
    watch: {

    },
    computed: {

    },
    created() {
        console.log(this.$api.shzl.part_person_all);
        console.log(11);
        this.$api.shzl.part_person_all().then(res=>{
            console.log(res);
        })
        
    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped>

</style>
