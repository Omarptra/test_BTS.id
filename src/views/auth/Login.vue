<template>
    <h1>Login Page</h1>
    <form>
        <div class="form-control">
            <label for="username">username</label>
            <br>
            <input type="text" name="username" id="username" v-model="this.store.loginUsername" placeholder="username">
        </div>
        <div class="form-control">
            <label for="password">password</label>
            <br>
            <input type="password" name="password" id="password" v-model="this.store.loginPass" placeholder="password">
        </div>
        <br>
        <button @click.prevent="this.store.login()">Login</button><br>
        <br>
        <router-link to="/register">Register</router-link>
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