// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('loading ae2 custom items...')


StartupEvents.registry("item", e=>{
    // certus quartz
    e.create("ae2:certus_quartz_seed", "basic")

    // skystone
    e.create("ae2:unstable_skystone_sediment", "basic")
    e.create("ae2:dry_skystone_sediment", "basic")
    e.create("ae2:clean_skystone_sediment", "basic")
    
})

StartupEvents.registry("fluid", f=>{
    f.create("ae2:unstable_skystone_solution").thickTexture(0X6c5c70).bucketColor(0X8c7591).noBlock()
})
