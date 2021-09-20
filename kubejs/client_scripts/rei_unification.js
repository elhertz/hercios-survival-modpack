const DELETED_ITEMS = [
    "slimeology:bleaching_brush",
    "bosses_of_mass_destruction:levitation_block",
    "blockus:redstone_sand",
    "blockus:sugar_block",
    "blockus:polished_basalt_bricks",
    "blockus:obsidian_bricks",
    "architects_palette:rotten_flesh_block",
    "architects_palette:osseous_brick",
    "architects_palette:ender_pearl_block",
    "architects_palette:basalt_tiles",
    "architects_palette:charcoal_block",
    "charm:oak_bookshelf",
    "charm:crimson_chest",
    "charm:warped_chest",
    "charm:warped_ladder",
    "charm:crimson_ladder",
    "charm:gold_chain",
    "betterend:charcoal_block",
    "betternether:soul_sandstone",
    "decorative:stone_path",
    "architects_palette:olivestone_bricks",
    "minecraft:barrel",
    "charm:spruce_barrel",
    "kibe:angel_ring",
    "kibe:light_ring",
    "kibe:light_ring",
    "kibe:magnet",
    "kibe:magma_ring",
    "kibe:water_ring",
    "kibe:diamond_ring",
    "kibe:cobblestone_generator_mk1",
    "kibe:cobblestone_generator_mk2",
    "kibe:cobblestone_generator_mk3",
    "kibe:cobblestone_generator_mk4",
    "kibe:cobblestone_generator_mk5",
    "kibe:basalt_generator_mk1",
    "kibe:basalt_generator_mk2",
    "kibe:basalt_generator_mk3",
    "kibe:basalt_generator_mk4",
    "kibe:basalt_generator_mk5",
    "decorative:white_bath_tire",
    "decorative:orange_bath_tire",
    "decorative:magenta_bath_tire",
    "decorative:light_blue_bath_tire",
    "decorative:yellow_bath_tire",
    "decorative:lime_bath_tire",
    "decorative:pink_bath_tire",
    "decorative:gray_bath_tire",
    "decorative:light_gray_bath_tire",
    "decorative:cyan_bath_tire",
    "decorative:purple_bath_tire",
    "decorative:blue_bath_tire",
    "decorative:brown_bath_tire",
    "decorative:green_bath_tire",
    "decorative:red_bath_tire",
    "decorative:black_bath_tire",
    "decorative:duck_bath_tire",
    "architects_palette:osseous_bricks",
    "blockus:ender_block",
    "allarmor:ender_eye_helmet",
    "allarmor:ender_eye_chestplate",
    "allarmor:ender_eye_leggings",
    "allarmor:ender_eye_boots",
    "allarmor:slime_ball_helmet",
    "allarmor:slime_ball_chestplate",
    "allarmor:slime_ball_leggings",
    "allarmor:slime_ball_boots",
    "allarmor:bedrock_helmet",
    "allarmor:bedrock_chestplate",
    "allarmor:bedrock_leggings",
    "allarmor:bedrock_boots",
    "allarmor:dragon_breath_helmet",
    "allarmor:dragon_breath_chestplate",
    "allarmor:dragon_breath_leggings",
    "allarmor:dragon_breath_boots",
    "allarmor:enchanting_table_helmet",
    "allarmor:enchanting_table_chestplate",
    "allarmor:enchanting_table_leggings",
    "allarmor:enchanting_table_boots",
    "allarmor:emerald_helmet",
    "allarmor:emerald_chestplate",
    "allarmor:emerald_leggings",
    "allarmor:emerald_boots",
    "allarmor:bone_meal_helmet",
	"allarmor:bone_meal_chestplate",
	"allarmor:bone_meal_leggings",
	"allarmor:bone_meal_boots",
    "magicfungi:cadentis_glyph",
    "magicfungi:pluviam_glyph",
    "magicfungi:magical_fungi_alloy",
    "magicfungi:magical_fungi_helmet",
    "magicfungi:magical_fungi_chestplate",
    "magicfungi:magical_fungi_leggings",
    "magicfungi:magical_fungi_boots",
    "magicfungi:impetus_sword",
    "charm:totem_of_preserving",
	"moretotems:teleporting_totem_of_undying",
	"more_gems:citrine_hammer",
	"more_gems:tourmaline_hammer",
	"more_gems:kunzite_hammer",
	"more_gems:emerald_hammer",
	"more_gems:topaz_hammer",
	"more_gems:alexandrite_hammer",
	"more_gems:corundum_hammer",
	"more_gems:sapphire_hammer",
	"more_gems:ruby_hammer",
	"more_gems:carbonado_hammer",
	"more_gems:citrine_excavator",
	"more_gems:tourmaline_excavator",
	"more_gems:kunzite_excavator",
	"more_gems:emerald_excavator",
	"more_gems:topaz_excavator",
	"more_gems:alexandrite_excavator",
	"more_gems:corundum_excavator",
	"more_gems:sapphire_excavator",
	"more_gems:ruby_excavator",
	"more_gems:carbonado_excavator",
    "slotlink:multi_dim_remote",
    "slotlink:unlimited_remote",
    "slotlink:limited_remote"
];

onEvent('rei.hide.items', event => {
    DELETED_ITEMS.forEach(id => event.hide(id));
	for(let lvl = 0; lvl < 6; lvl++) {
		event.hide(Item.of('minecraft:enchanted_book').enchant('more_gems:stupify', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('fabricenchantments:tank', lvl));
        event.hide(Item.of('minecraft:enchanted_book').enchant('gobber2:rebuffing', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('gobber2:smithblade', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('charm:collection', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('charm:aerial_affinity', lvl));
        event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:priming', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:selfish', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:jousting', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:launching', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:legacy', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:monogamous', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:phase_leap', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:polygamous', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:rampage', lvl));;
	    event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:cave_in', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:hearty', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:impersonal', lvl));
        event.hide(Item.of('minecraft:enchanted_book').enchant('spellbound:red_alert', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:sniper', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:soulbound', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:stalwart', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:terraforming', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:thunderbolt', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:tough', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:turbo', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:weighted', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:windstep', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:featherweight', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:launching', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:leaping', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:lunging', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:magic_guard', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:magnetic', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:night_vision', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:propelling', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:sharpshooter', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:ace', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:cleaving', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:core_of_neptune', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:core_of_the_blood_god', lvl));
        event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:core_of_purity', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:core_of_the_warp', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:curse_of_instability', lvl));
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:dextrous', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:dwarven', lvl));;
		event.hide(Item.of('minecraft:enchanted_book').enchant('extra_enchants:exposing', lvl));;
	};
});