<template>
    <div id="app">
        <div>
            <nav>
            <ul>
                <li><a href="" >Home</a></li>
                <li><a href="" >Blog</a></li>
                <li><a href="" >About us</a></li>
                <li><a href="" >Contact</a></li>
            </ul>
        </nav>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Navbar',
    data(){
        return{

        }
    }
}

</script>
<!-- 
Scope is used for accesing only that particular page with style -->
<style scoped>
    nav {
        text-align: center;
    }
    nav ul{
        padding: 0;
    }

    nav li{
        display: inline-block;
        list-style-type: none;
        text-decoration: none;
        margin: 0;
        padding: 8px;
    }



</style>