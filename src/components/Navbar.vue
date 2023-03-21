<template>
    <nav>
        <div class="logo">
            <img src="@/assets/logo.svg" alt="" width="50">
            <div class="brand">Todo List App Final</div>
        </div>
        <div class="links">
            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/addtodo">Add Todo</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
            </ul>
        </div>
    </nav>
</template>
<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    background-color: var(--navbar-color);
    align-items: center;
    padding: 10px;
    margin-bottom: 30px;
}

.brand {
    font-size: 30px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 20px;
}

.links ul {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
    list-style: none;
    margin: 0;
}

.links a {
    font-size: 30px;
    margin-left: 10px;
    text-decoration: none;
    color: var(--text-color);
}

a.router-link-active {
    color: var(--accent-color);
}
</style>