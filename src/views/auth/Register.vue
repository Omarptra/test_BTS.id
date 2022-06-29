<template>
    <h1>Register Page</h1>
    <form>
        <div class="form-control">
            <label for="email">email</label>
            <br>
            <input type="text" name="email" id="email" v-model="this.store.regEmail" placeholder="email">
        </div>
        <div class="form-control">
            <label for="username">username</label>
            <br>
            <input type="text" name="username" id="username" v-model="this.store.regUsername" placeholder="username">
        </div>
        <div class="form-control">
            <label for="password">password</label>
            <br>
            <input type="password" name="password" id="password" v-model="this.store.regPass" placeholder="password">
        </div>
        <br>
        <button @click.prevent="this.store.register()">Register</button><br>
        <br>
        <router-link to="/login">login</router-link>
    </form>
</template>

<script>
import { useStore } from '@/store'
export default {
    setup() {
        const store = useStore()

        return { store }
    },
}
</script>