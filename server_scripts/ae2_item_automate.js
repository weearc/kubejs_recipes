console.info('Loading ae2 automate recipes...')

console.info('Loading custom recipes...')
ServerEvents.recipes(event => {
    const create = event.recipes.create
    const createSequenced = event.recipes.createSequencedAssembly

    // 赛特斯石英再生
    // 粉碎轮
    // 赛特斯石英种子
    create.crushing(
        [Item.of('ae2:certus_quartz_seed', 1), Item.of('ae2:certus_quartz_seed', 1).withChance(0.1)], 
        Item.of('minecraft:quartz', 1)
    )
    create.crushing(
        Item.of('ae2:certus_quartz_seed', 2),
        Item.of('ae2:certus_quartz_dust', 1)
    )
    create.crushing(
        Item.of('ae2:certus_quartz_dust', 1),
        Item.of('ae2:certus_quartz_crystal', 1)
    )
    create.milling(
        Item.of('ae2:certus_quartz_dust', 1),
        Item.of('ae2:certus_quartz_crystal', 1)
    )

    create.filling('ae2:small_quartz_bud', [Item.of('ae2:certus_quartz_seed', 1), Fluid.water(FluidAmounts.BOTTLE * 1)])
    create.filling('ae2:medium_quartz_bud', [Item.of('ae2:small_quartz_bud', 1), Fluid.water(FluidAmounts.BOTTLE * 1)])
    create.filling('ae2:large_quartz_bud', [Item.of('ae2:medium_quartz_bud', 1), Fluid.water(FluidAmounts.BOTTLE * 1)])
    create.milling(Item.of('ae2:certus_quartz_dust', 1), 'ae2:large_quartz_bud')
    create.filling('ae2:certus_quartz_crystal', [Item.of('ae2:certus_quartz_dust', 1), Fluid.water(FluidAmounts.BOTTLE * 2)])

    // 陨石
    // 搅拌器
    create.mixing(
        Fluid.of('ae2:unstable_skystone_solution', FluidAmounts.BUCKET * 1), 
        [Fluid.water(FluidAmounts.BUCKET * 1), Item.of('ae2:sky_dust', 1), Item.of('minecraft:redstone', 1), Item.of('ae2:certus_quartz_dust', 1)]
    )
    // “干燥”
    create.mixing(
        Item.of('ae2:unstable_skystone_sediment', 1),
        Fluid.of('ae2:unstable_skystone_solution', FluidAmounts.BUCKET * 1)
    ).heated()
    // 洗涤
    create.splashing(
        [Item.of('ae2:clean_skystone_sediment', 1), Item.of('ae2:clean_skystone_sediment', 1).withChance(0.5)], 
        Item.of('ae2:unstable_skystone_sediment', 1)
    )
    // 烧炼
    event.blasting('ae2:dry_skystone_sediment', 'ae2:clean_skystone_sediment', 0.35, 300)
    create.filling('ae2:sky_dust', [Item.of('ae2:dry_skystone_sediment', 1), Fluid.lava(FluidAmounts.BOTTLE * 2)])



})