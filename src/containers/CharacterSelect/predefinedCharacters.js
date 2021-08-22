const predefinedCharacters = [
    {
        name: "Payal",
        gender: "Female",
        className: "warrior",
        avatar: "MALE1",
        lvl: 4,
        hp: 257,
        maxHp: 257,
        ap: 10,
        maxAp: 10,
        attributes: {
            str: 11,
            dex: 11,
            int: 2,
            wis: 6,
            ten: 7,
            luc: 3,
        },
        stats: {
            criticalMod: 1.6,
            criticalChance: 16,
            chanceToMiss: 29,
        },
        defense: {
            physical: 6,
            magic: 12,
            poison: 14,
            bleeding: 6,
        },
        effects: [],
        utilityEffects: [],
        abilities: [
            {
                id: 'ATTACK_DOUBLE_STRIKE',
                type: 'ATTACK',
                damageType: 'PHYSICAL',
                name: 'Attack',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                damageMin: 21,
                damageMax: 42,
                apCost: 4,
                usesPerBattle: Infinity,
            },
            {
                id: 'ATTACK_CYCLONE',
                type: 'ATTACK',
                damageType: 'PHYSICAL',
                name: 'Power Attack',
                description: "Lorem ipsum dolor sid tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                damageMin: 30,
                damageMax: 50,
                apCost: 5,
                usesPerBattle: Infinity,
                effects: [
                    { id: "BLEEDING", label: "bleeding", turnsDuration: 2, chance: 50, useValue: 33, use: "ENEMY" },
                ],
            },
            {
                id: 'SPEC_ATTACK_POISON_FOG',
                type: 'SPEC_ATTACK',
                damageType: 'MAGIC',
                name: 'Surrender',
                description: "Lorem ipsumlore magna aliqua. Ut enim ad minim veniam",
                damageMin: 15,
                damageMax: 30,
                apCost: 7,
                usesPerBattle: 1,
                effects: [
                    { id: "POISON", label: "poison", turnsDuration: 2, chance: 100, useValue: 70, use: "ENEMY" },
                    { id: "LOOSE_NEXT_TURN", label: "lose next turn", turnsDuration: 1, chance: 40, use: "ENEMY" },
                ],
            },
            
            {
                id: 'UTILITY_POTION_HEAL',
                type: 'UTILITY',
                name: 'Potion of Healing',
                label: "healing",
                description: "You regain health points when you drink this potion.",
                useValue: 40,
                apCost: 2,
                usesPerBattle: 1,
                turnsDuration: 1,
                effects: [
                    { id: "HEALING", label: "healing", turnsDuration: 2, chance: 100, useValue: 20, use: "SELF" }
                ],
            }
            
        ],
        baseStatsCopy: {
            stats: {
                criticalMod: 1.6,
                criticalChance: 16,
                chanceToMiss: 29,
            },
            defense: {
                physical: 6,
                magic: 12,
                poison: 14,
                bleeding: 6,
            },
        }
    }
    
]

export default predefinedCharacters;