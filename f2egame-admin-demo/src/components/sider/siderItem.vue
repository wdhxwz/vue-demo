<template>
    <li :class="{'treeview':!!routeitem.children}">
        <router-link :to="path" :key="routeitem.name" v-if="!routeitem.children">
            <i class="fa" :class="!!routeitem.meta.icon ? routeitem.meta.icon: 'fa-circle-o'"></i> <span>{{routeitem.name}}</span>
        </router-link>
        <a v-if="!!routeitem.children" :key="routeitem.name">
            <i class="fa" :class="!!routeitem.meta.icon ? routeitem.meta.icon: 'fa-circle-o'"></i> <span>{{routeitem.name}}</span>
            <span class="pull-right-container" >
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu" v-if="!!routeitem.children" >
            <sider-item v-for="item in routeitem.children" :key="item.name" :routeitem="item"  :depth="depth + 1" :path=" path +'/'+ item.path" v-if="!item.hidden">        
            </sider-item>   
        </ul>
    </li>   
</template>    
<script>      
export default {         
    props: [ 'routeitem', 'depth','path' ],        
    name: 'siderItem',      
    mounted(){
        console.log(this.depth,this.routeitem.name)
    },  
    computed: {          
        indent() {            
            return {
                transform: `translate(${this.depth * 50}px)` 
                }          
            }        
        }  
}
</script>