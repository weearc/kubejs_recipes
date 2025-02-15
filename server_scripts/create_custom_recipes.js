// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loading custom recipes...')
ServerEvents.recipes(event => {
    const create = event.recipes.create


    // 粉碎轮
    create.crushing(
        [Item.of('create:cinder_flour', 3), Item.of('create:cinder_flour', 1).withChance(0.3)], 
        Item.of('minecraft:nether_bricks', 1)
    )
})

