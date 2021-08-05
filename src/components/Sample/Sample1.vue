<template>
    <div class="alert alert-info">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <div>
            <input class = "from-control" type="text" v-model="input">
            <button class="btn btn-info mt-2" v-on:click="doAction">Click</button>
        </div>
    </div>
</template>

<script src="./Sample1.js"></script>