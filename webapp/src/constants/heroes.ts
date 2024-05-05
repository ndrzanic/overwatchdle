import { Gender } from '../interfaces/enums/gender';
import { Occupation } from '../interfaces/enums/occupation';
import { Role } from '../interfaces/enums/role';
import { WeaponType } from '../interfaces/enums/weapon-type';
import { Hero } from '../interfaces/hero';
import { HeroName } from './hero-names';

export const heroes: Record<HeroName, Hero> = {
  Lifeweaver: {
    name: 'Lifeweaver',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/39d4514f1b858bc228035b09d5a74ed41f8eeefc9a0d1873570b216ba04334df.png',
    emoji: '🌹🌲🪷',
    trivia: {
      gender: Gender.MALE,
      role: Role.SUPPORT,
      occupation: [
        Occupation.SCIENTIST,
        Occupation.ARTIST,
        Occupation.ACTIVIST,
        Occupation.ADVENTURER,
      ],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Healing Blossom',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a3ccff02b44507df5c9bdaced0ecd56ac80b33285ad8a60e6c454acf90560579.png',
      },
      {
        name: 'Petal Platform',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f64582890d92e968d79c54f9bb8cf1b9b1cc8da6dca7b8bdc647512957cac89f.png',
      },
      {
        name: 'Rejuvenating Dash',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1df0e1d8798e26772880ac0fcd27cf00c280adff88dbd6a66881f78cd9f69791.png',
      },
      {
        name: 'Life Grip',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/36969bea55419b7ff963f2fb0ff7f80e37ecbe810bcd7dae0c7c835270c938a8.png',
      },
      {
        name: 'Tree of Life',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/105495a0c2ea708de307204b47c90915782256cffd83fc8dff8abcc508e0ef5a.png',
      },
    ],
  },
  Ana: {
    name: 'Ana',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
    emoji: '😴💉👵',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.SUPPORT,
      occupation: [
        Occupation.SHARPSHOOTER,
        Occupation.OVERWATCH,
        Occupation.CAPTAIN,
        Occupation.BOUNTY_HUNTER,
      ],
      weaponType: [WeaponType.HITSCAN, WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Sleep Dart',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/20707fd82265412fdc6d2353daa88ec7558cd71c89aa3ac6cf0e78bbbfcabd80.png',
      },
      {
        name: 'Biotic Grenade',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c8190b234bf0a0e28eecffe162d0c942e6b8656e95f4688c6ca3b025fa5a487d.png',
      },
      {
        name: 'Nano Boost',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6fda18b343f3fd0e8dc50fa5a91589e1ca9ed7471a354f61dfc9f22b27b19497.png',
      },
    ],
  },

  Ashe: {
    name: 'Ashe',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.DPS,
      occupation: [Occupation.THIEF, Occupation.GANG_LEADER],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Coach Gun',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e18f7b6e464f0cf34789babf7a76b7e1d851e62102dccfe10769bcf8716e5554.png',
      },
      {
        name: 'Dynamite',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a326b202a821ab3e196d1faab6144460f470001b26a8b6f2ab96cb3af5f325b3.png',
      },
      {
        name: 'B.O.B.',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e788b12d476e896dac3831bbc0842fb3b4d07a89b3c337959d9a6cd6ea5a7df5.png',
      },
    ],
  },
  Baptiste: {
    name: 'Baptiste',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.SUPPORT,
      occupation: [
        Occupation.SHARPSHOOTER,
        Occupation.OVERWATCH,
        Occupation.CAPTAIN,
        Occupation.BOUNTY_HUNTER,
      ],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Regenerative Burst',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d887d165f7b0eb98a30af8f274ff740c6c7735af719b93e95dd9da17558815d8.png',
      },
      {
        name: 'Immortality Field',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d66d82bab88fc813080dd15e31629cc3aa7c8b41cfb41d5b962b628dd345e433.png',
      },
      {
        name: 'Amplification Matrix',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/0a31371b55e4007e67a86f8495949970d20f64b2f0166e78d3fd16217e090a83.png',
      },
      {
        name: 'Exo boots',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/0d598afba5a03761d617d735d5435323c56108655b5017ddf8c36c4af36b9b73.png',
      },
    ],
  },
  Bastion: {
    name: 'Bastion',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
    emoji: '🧢🦜🤖',
    trivia: {
      gender: Gender.OMNIC,
      role: Role.DPS,
      occupation: [Occupation.BATTLE_AUTOMATON, Occupation.WORKSHOP_ASSISTANT],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'A-36 Tactical Grenda',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/22f9f8c043e1746011d7dcee2e811e0d24470bd0eb5128fca9c3aea2f2dcfe69.png',
      },
      {
        name: 'Reconfigure',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/56bef8912e83cac59dc0acb08bcaef591ff2ed52385424e8d753c03bbb77e4e9.png',
      },
      {
        name: 'Configuration: Artillery',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/06c377aef476bfb21ee1dca3d4d1151f8a4131b388a5489f3dfce6fb232a2711.png',
      },
    ],
  },
  Brigitte: {
    name: 'Brigitte',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png',
    emoji: '🇸🇪🔨👱🏼‍♀️',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.SUPPORT,
      occupation: [
        Occupation.MECHANICAL_ENGINEER,
        Occupation.ADVENTURER,
        Occupation.SQUIRE,
      ],
      weaponType: [WeaponType.MELEE],
    },
    abilities: [
      {
        name: 'Repair Pack',

        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5f9f1e00af992f4a090cafc8e83821dd2848f22cb9e0205fafcedacb26bd7335.png',
      },
      {
        name: 'Whip Shot',

        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/50af1a0bc61a1f022fe2ee69aa460f151aba3c0ccde41377bfb0d5c45b2c55a3.png',
      },
      {
        name: 'Barrier Shield',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2b1bb6338180161e55c5f2184879dce395eca9e58f974befe729293fcc3dfdca.png',
      },
      {
        name: 'Shield Bash',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/79f145b07b35e744fd0400dceff5fb11a06f9a73c48809f1cfb462fe82fe1185.png',
      },
      {
        name: 'Rally',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/08552423da53faa55238bd66a2a72d32d1038e42f2eebc911921bc9d5d575432.png',
      },
      {
        name: 'Inspire',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/487545fb37163e4029e1e8483266180fbcc59b7e8482062563168998774615f8.png',
      },
    ],
  },

  Cassidy: {
    name: 'Cassidy',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png',
    emoji: '🕛🔫💣🤠',
    trivia: {
      gender: Gender.MALE,
      role: Role.DPS,
      occupation: [
        Occupation.OVERWATCH,
        Occupation.BOUNTY_HUNTER,
        Occupation.MERCENARY,
        Occupation.CRIMINAL,
        Occupation.FARMHAND,
        Occupation.FACTORY_WORKER,
      ],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Combat Roll',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/24a3f2f619859812bba6b6374513fa971b6b19ccb34950c02118b41cc4f93142.png',
      },
      {
        name: 'Magnetic Grenade',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/47a593ad7f83394b011161e67a6f414e49f2221c5e014ea909fdcd9df4f94371.png',
      },
      {
        name: 'Deadeye',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/346cb576a19f978a7b2c52859c5639423f076d66ca740658da0d46955ab2c97d.png',
      },
    ],
  },

  'D.Va': {
    name: 'D.Va',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png',
    emoji: '🤖🎮💣👧🏻',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.TANK,
      occupation: [
        Occupation.PROFESSIONAL_GAMER,
        Occupation.MECH_PILOT,
        Occupation.ACTOR,
      ],
      weaponType: [WeaponType.SHOTGUN, WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Boosters',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/89d6beb25b21eacd5a181b96438436692d9ad403fcef19873e506f6d46ed37a3.png',
      },
      {
        name: 'Defense Matrix',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2713a8ef6742f4009da072d66d382eb8ff3dd8e00828deadb5af1a93b0d8ce4b.png',
      },
      {
        name: 'Micro Missiles',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1787326d46d04aa10872fc30fe512ab3575781735110dfb178ff38da352facb7.png',
      },
      {
        name: 'Self-Destruct',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f76e4b710ceb71f2e260029fc8d0ad15b227e3f006ab1b6c0c4e44da98c2d614.png',
      },
      {
        name: 'Call Mech',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/848d8cd24eb0327a023a564447d79dd8b367c21a378d328cd92896a21b775219.png',
      },
      {
        name: 'Eject!',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/692a603c9945e600b195d1fd56364979363926f42d950b95c4811e7047e94c97.png',
      },
    ],
  },
  Doomfist: {
    name: 'Doomfist',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png',
    emoji: '👊🥊🤜🤛',
    trivia: {
      gender: Gender.MALE,
      role: Role.TANK,
      occupation: [
        Occupation.MARTIAL_ARTIST,
        Occupation.MERCENARY,
        Occupation.CEO,
        Occupation.TALON,
      ],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Rocket Punch',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/aa2a067fe151ac2795fe77546711c07be5f0880d9ae5dce554cab0c933d927f0.png',
      },
      {
        name: 'Seismic Slam',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/20f721d5fd05f91e203d6e0007a137bdc90a161356f85d5aa88b2ab02b8da22b.png',
      },
      {
        name: 'Power Block',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/56267df764931eadeae09513e0f1b9594ae238eebba84878c501ba4b69acb71f.png',
      },
      {
        name: 'Meteor Strike',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa96b2650987b3784a725a0fb1704f7191a686a4f42c9ccf61c404e2f08b158c.png',
      },
    ],
  },
  Echo: {
    name: 'Echo',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png',
    trivia: {
      gender: Gender.OMNIC,
      role: Role.DPS,
      occupation: [Occupation.ROBOT],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Sticky Bombs',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dcaa626e367b80b5bcd2425e26e0075b5343990785bc96e1705325904f73fe96.png',
      },
      {
        name: 'Flight',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/711f211c988ff1fafe99276bddefa3a861789e4b27859260e8ad87df5b879337.png',
      },
      {
        name: 'Focusing Beam',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6552feeb85a32ae7131df50f61a9c0fa24bf347bf007e208a356a940561129ae.png',
      },
      {
        name: 'Duplicate',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/457d6ebcb2b92d1e7f7a7174b426903879e131422196825589adbc5e5d9f7efb.png',
      },
      {
        name: 'Glide',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e90772df1f7e55d4ea6e639ce909773ae2e28172d06afd8afa00e85bbef0a20d.png',
      },
    ],
  },
  Genji: {
    name: 'Genji',
    emoji: '🐉🗡️🥷',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png',
    trivia: {
      gender: Gender.MALE,
      role: Role.DPS,
      occupation: [Occupation.ADVENTURER],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Deflect',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9e46bda733749ddd6512b61c021b4487b6201338a9ff39c716e4ee06e5d63a58.png',
      },
      {
        name: 'Swift Strike',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a6639d5240b77967a734fc5e2af960fd38dccd834430a4a3409add345bb7e21e.png',
      },
      {
        name: 'Dragonblade',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e9c3c82c08ce1a6006dbdf6905591040ed83ddceba81efb2e526c217cd57c931.png',
      },
    ],
  },
  Hanzo: {
    name: 'Hanzo',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png',
    emoji: '🐉🏹',
    trivia: {
      gender: Gender.MALE,
      role: Role.DPS,
      occupation: [Occupation.ASSASSIN],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Storm Arrows',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/92c56621ba267d94f16baacda3f10ba7777b475935981b02e5026449d8e3d79c.png',
      },
      {
        name: 'Sonic Arrow',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6a71d18cc52e49380aa9eb57f979524033a3e79bd3153900a12bb553d5a0e6f0.png',
      },
      {
        name: 'Lunge',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd1390347345e7825dff95758b3d5ed02a3497a013400a4faaefb2c77f07ee14.png',
      },
      {
        name: 'Dragonstrike',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f2d63b8f0e19e91d2c1199ed3ac0f20bb180dabe9ad1ffc7d1f1e880e58f0220.png',
      },
    ],
  },
  'Junker Queen': {
    name: 'Junker Queen',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cef2406b2244b80506f83b8fb9ebaf214f41fa8795cbeef84026cd8018561d04.png',
    emoji: '🗡️🫅',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.TANK,
      occupation: [Occupation.GLADIATOR, Occupation.RULER_OF_JUNKERTOWN],
      weaponType: [WeaponType.SHOTGUN],
    },
    abilities: [
      {
        name: 'Jagged Blade',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7aff09649e4e2daeec13cfcca4d5e369b4ddc0160587637bb607761ecf89f16c.png',
      },
      {
        name: 'Commanding Shout',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1809c57884dafcfd1aab89eb80d2ad8fe0c64ce0036646a3e19c05f48c322c9d.png',
      },
      {
        name: 'Carnage',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/74c40565f02f550ed362d8a5aaed21de94a3ff1915185cb4b93d6ce6207f03ab.png',
      },
      {
        name: 'Rampage',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/68b7d33215b777410b834ba2e9e7202d5ecff15fe012712facd974ec32895c36.png',
      },
      {
        name: 'Adrenaline Rush',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e1706243e4996af6844e7f8233bbd3f98f04583a223cd3ad926d40ef6c4c8557.png',
      },
    ],
  },
  Junkrat: {
    name: 'Junkrat',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png',
    emoji: '🪤🤪💣🧨💥',
    trivia: {
      gender: Gender.MALE,
      role: Role.DPS,
      occupation: [
        Occupation.ANARCHIST,
        Occupation.THIEF,
        Occupation.DEMOLITIONIST,
        Occupation.MERCENARY,
        Occupation.SCAVENGER,
      ],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Concussion mine',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1d6135a3089363cf2c59d5157740cf5dc4ad572bc215553672a79812c397dbd2.png',
      },
      {
        name: 'Steel Trap',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/425136ea32c08355f33df230d900a8cc8010ee7a2b27314f6a1e395bd78eb5aa.png',
      },
      {
        name: 'Rip-Tire',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d16b5c6c337b1c0ecee3e5bf0760c870927e921fed8f0caed12dcb996b5347ae.png',
      },
      {
        name: 'Total Mayhem',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/82e123991088b3c13edb1158d0bc4281f752896f8f3ddb76d4e3407e8f52f88d.png',
      },
    ],
  },
  Kiriko: {
    name: 'Kiriko',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png',
    emoji: '🦊👘',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.SUPPORT,
      occupation: [Occupation.VIGILANTE, Occupation.SHRINE_CARETAKER],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Healing Ofuda',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6b8830bd7173de38016ef129e117ac6f418026a6ec4501ab5cb7cdd99bd6f5b8.png',
      },
      {
        name: 'Swift Step',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e6ed3a36c4ed15b2127d6ca74756b25e0db7cf33ce7e26d9a79fd821526f055f.png',
      },
      {
        name: 'Protection Suzu',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3775c37a363e1aaf02a6df4cdfb611f18e38bb69ce42dd59abddb4140cea9790.png',
      },
      {
        name: 'Kitsune Rush',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f29fd68592d73f20da39d783e0e2f86dcc65c311912d3284062d2bd1a8aa1c52.png',
      },
    ],
  },
  Lúcio: {
    name: 'Lúcio',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png',
    emoji: '🎵🎧🇧🇷',
    trivia: {
      gender: Gender.MALE,
      role: Role.SUPPORT,
      occupation: [Occupation.DJ, Occupation.FREEDOM_FIGHTER],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Crossfade',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/89cb0bd63ff5e3a2a2a9e2874b52a94ff7e69cf521486f7d35227d98a1e305d5.png',
      },
      {
        name: 'AMP it up',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/023a4fcb7ff780b15f62a894fa4ee07f13428c3f1cee17d575884dbe820e0c13.png',
      },
      {
        name: 'Soundwave',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a8e254a309bf77a5c8b98f5a5893fcd252a17775e48db367028982989185bed2.png',
      },
      {
        name: 'Sound Barrier',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/21c5a17be341a3c0da2dcc9372f4f3c88ef622c80776360bd844d0fba3eb88a7.png',
      },
      {
        name: 'Wall Ride',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c14b2c5652526a006233965b176fb2b5af9e7c5d44045fad3844267303f07091.png',
      },
    ],
  },
  Mei: {
    name: 'Mei',
    emoji: '🧊🥶❄️',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.DPS,
      occupation: [Occupation.ADVENTURER, Occupation.CLIMATOLOGIST],
      weaponType: [WeaponType.BEAM, WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Cryo-Freeze',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/183591c8c22fa134b6826555caf28481a4a3a22ec96d53a935612e0e45425378.png',
      },
      {
        name: 'Ice Wall',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd63b2d05e4a2aa8615b7cad828fd05427f07e69c7611a662c5cb0d726b82627.png',
      },
      {
        name: 'Blizzard',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/892fd12cc3f8bd3b54bbc175b6d8caecdedaa819c819c5fc216c3c2b4f486a3f.png',
      },
    ],
  },
  Mercy: {
    name: 'Mercy',
    emoji: '🪽😇✈️🇩🇪👩‍🔬',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.SUPPORT,
      occupation: [Occupation.FIELD_MEDIC, Occupation.FIRST_RESPONDER],
      weaponType: [WeaponType.BEAM, WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Guardian Angel',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e6d6f1f8288bb9a61fcfb85db90a49d3228277d18ac190898567bed4e7799ddc.png',
      },
      {
        name: 'Resurrect',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d26768cf459611eedc4fdcc9096ad3b196e8b2babb0782cf24d56f108325e3bb.png',
      },
      {
        name: 'Angelic Descent',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d53b51360a83f35c450211d4a38859c839ad5720379d2e275a4f5826f3fe9967.png',
      },
      {
        name: 'Valkyrie',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/0f5455a8a464e85370365bc954dc6c1cca11f4f5c09e7e6eee7a3dde29170c9e.png',
      },
    ],
  },
  Moira: {
    name: 'Moira',
    emoji: '💅🎾👩‍🔬',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.SUPPORT,
      occupation: [
        Occupation.GENETICIST,
        Occupation.MINISTER_OF_GENETICS,
        Occupation.TALON,
      ],
      weaponType: [WeaponType.BEAM],
    },
    abilities: [
      {
        name: 'Biotic Orb',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a5a235623aeb7fce1ce8e545e5be2d95b48fddf609c174fc5067efd7681ac72f.png',
      },
      {
        name: 'Fade',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ba44615a7e3799d50bc2194079dd88177f98d4050a28acba6cd33ad1daaf7b5b.png',
      },
      {
        name: 'Coalescence',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/23d3ef53fd21d04e7e7b137b38e87c61b3d65394393dc00759ceb65d406e37b9.png',
      },
    ],
  },
  Orisa: {
    name: 'Orisa',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png',
    trivia: {
      gender: Gender.OMNIC,
      role: Role.TANK,
      occupation: [Occupation.GUARDIAN_ROBOT],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Energy Javelin',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/0cf93f55a30fe7ec769c5f2eebd284c92851d6b1dbaca0e2c39eae908a9b35c6.png',
      },
      {
        name: 'Fortify',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d697fa90726cf683222920822d2ee00a85e0420c6cbc6ec2365573f313d06357.png',
      },
      {
        name: 'Javelin Spin',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/804f9775ecfbc3ac2b84514e429cd8bc4e88027b00cb09126880d7f2c7759b59.png',
      },
      {
        name: 'Terra Surge',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8d8892b56df62b068343e5029a2ae1e2fa54f7568febac7141ffa945d02e214c.png',
      },
    ],
  },
  Pharah: {
    name: 'Pharah',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png',
    emoji: '✈️🚀🇪🇬',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.DPS,
      occupation: [Occupation.SECURITY_CHIEF],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Jump Jet',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ab8ffe4008a1c257f1014d55a5306fcd3d81cde8ffad569b240f74c4c13a4130.png',
      },
      {
        name: 'Concussive Blast',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9747b440730824756ae2d17e4d1f38468f36c985c35f56cf1f175a613279479a.png',
      },
      {
        name: 'Barrage',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/0708775beda1d200b586ae1d019522ea5ad8baa9bdcbbe076854102830f9fdae.png',
      },
      {
        name: 'Hover Jets',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c14b2c5652526a006233965b176fb2b5af9e7c5d44045fad3844267303f07091.png',
      },
    ],
  },
  Ramattra: {
    name: 'Ramattra',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png',
    trivia: {
      gender: Gender.OMNIC,
      role: Role.TANK,
      occupation: [
        Occupation.MILITARY_LEADER,
        Occupation.SHAMBALI_MONK,
        Occupation.LEADER_OF_NULL_SECTOR,
        Occupation.INVENTOR,
      ],
      weaponType: [WeaponType.PROJECTILE, WeaponType.MELEE],
    },
    abilities: [
      {
        name: 'Void Barrier',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/0a40466f823f39910c8453a42d9338e434d8d36d120c540a381c6a9a1557da78.png',
      },
      {
        name: 'Ravenous Vortex',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7a7334480013e1d2eccd7df8b4b1e2f484ca81dfe5719fd3506d1055ba79908c.png',
      },
      {
        name: 'Annihilation',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dbffca5b7b1e0dcc7a0cceaffe1fedb1a6bf7af73e71218a15df2779fc97805f.png',
      },
    ],
  },
  Reaper: {
    name: 'Reaper',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png',
    emoji: '😡⚰️💀',
    trivia: {
      gender: Gender.MALE,
      role: Role.DPS,
      occupation: [
        Occupation.POLICE_OFFICER,
        Occupation.SOLDIER,
        Occupation.STRIKE_COMMANDER,
        Occupation.BLACKWATCH,
        Occupation.TALON,
      ],
      weaponType: [WeaponType.SHOTGUN],
    },
    abilities: [
      {
        name: 'Shadow Step',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bad9345de1f04a46f219364952464c38d2b2a9afa335df6894cde81565816fa4.png',
      },
      {
        name: 'Wraith Form',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dbcceb2a764dcf8bb808078f7a32a039fd259c72e557dcde3fb70b2041247c9a.png',
      },
      {
        name: 'Death Blossom',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e35595575880a304e14d427a0f9f5f04dc0886ba0f4cadd731ac935174f031e2.png',
      },
      {
        name: 'The Reaping',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/21fb34e5a009987c73f686336cd61d4e4b771a8a2d9b6753e62f65b41e6b6c51.png',
      },
    ],
  },
  Reinhardt: {
    name: 'Reinhardt',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png',
    emoji: '🔨🛡️🇩🇪',
    trivia: {
      gender: Gender.MALE,
      role: Role.TANK,
      occupation: [
        Occupation.CRUSADER,
        Occupation.OVERWATCH,
        Occupation.ADVENTURER,
      ],
      weaponType: [WeaponType.MELEE],
    },
    abilities: [
      {
        name: 'Rocket Hammer',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/40c9f1c060033e58120c9ec174008b8f5d833412923f7f351a32e5df47fe8166.png',
      },
      {
        name: 'Fire Strike',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/568a5f49875557f735af36dce68474a923f7e8582a7be20fb68b6ee66ac077e6.png',
      },
      {
        name: 'Barrier Field',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/121f13903665417446ee4673d9740080a3bc117e285cf3dcf6547861a0bc7d43.png',
      },
      {
        name: 'Earthshatter',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a63041a68d81c202a47a95035878edcfa75d5aa3f72414a7e84e1b1a68594bed.png',
      },
    ],
  },
  Roadhog: {
    name: 'Roadhog',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png',
    emoji: '👺🪝🐷',
    trivia: {
      gender: Gender.MALE,
      role: Role.TANK,
      occupation: [Occupation.ENFORCER, Occupation.BODYGUARD],
      weaponType: [WeaponType.SHOTGUN],
    },
    abilities: [
      {
        name: 'Chain Hook',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/139deabeb3d62c451b558367bf5e64641583355d99ed90fe42107a5716fdca3b.png',
      },
      {
        name: 'Take a Breather',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9cb8d867671bf917a9ba5d4a28ab6cb6ceeb10de2813567fcad97aca32c58499.png',
      },
      {
        name: 'Whole Hog',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/78faa90f268424c6e770168ec15f5bb880d0b14e5d10f22c30bfbb64ffe244a8.png',
      },
    ],
  },
  Sigma: {
    name: 'Sigma',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png',

    trivia: {
      gender: Gender.MALE,
      role: Role.TANK,
      occupation: [Occupation.SCIENTIST, Occupation.TALON_LIVING_WEAPON],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Kinetic Grasp',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a7401d18a391bc0eafddd8fc47a31ccc7f277190ab61ed14ae98408f576d6a23.png',
      },
      {
        name: 'Accretion',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/594b0ecbb34b41b288c08bc7b040b273f25289ef0afc2d00828d6a30a0687236.png',
      },
      {
        name: 'Experimental Barrier',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ae2c31f159331f73739932e85dc21bdfa8eb4f2b2d2de4e89c1488445da34ffb.png',
      },
      {
        name: 'Gravitic Flux',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7140d3eaf82e580ab465dcdb04bd1faaf77ac54550a12d17ecde7c4e87e963e0.png',
      },
    ],
  },
  Sojourn: {
    name: 'Sojourn',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.DPS,
      occupation: [
        Occupation.INFANTRYWOMAN,
        Occupation.SPECIAL_FORCES_OPERATIVE,
        Occupation.OVERWATCH,
        Occupation.ACTING_COMMANDER,
      ],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Power Slide',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5e94ae14aee5e5054a6347e25f1c7ddd284b0cb73925dbc716e358970ec94f0d.png',
      },
      {
        name: 'Disruptor Shot',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7e903d13474df377216191c5b5c128fc6d20befdc611af9f7baedfdfa3b59295.png',
      },
      {
        name: 'Overclock',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/83bd9d101e779075fadaed194d1964897794c49ce56c59ccc34799753b55efeb.png',
      },
    ],
  },
  'Soldier:76': {
    name: 'Soldier:76',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png',
    trivia: {
      gender: Gender.MALE,
      role: Role.DPS,
      occupation: [
        Occupation.SOLDIER,
        Occupation.OVERWATCH,
        Occupation.VIGILANTE,
      ],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Sprint',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8408bacddfb4ac7b971dd14f6d8c9d211459fb159b459c3e6eaf06bc0a38bcb2.png',
      },
      {
        name: 'Biotic Field',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/aaadd3dee89ac8797ecb7a1e647f574a034b1930726296fd17946d343254bdf0.png',
      },
      {
        name: 'Helix Rockets',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8fedb348952552227b6e2ec85cf14214106b901afce2a9657267153bb2a8cac3.png',
      },
      {
        name: 'Tactical Visor',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5e8d4b8fb5cd1271314b8462012e9894c811a7c4857739e73bde53f2431e673d.png',
      },
    ],
  },
  Sombra: {
    name: 'Sombra',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.DPS,
      occupation: [Occupation.HACKER],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Hack',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3ebcefc44a278d93afa8339e7e8758e6d471566fdd122d20d9b8ab7269a12017.png',
      },
      {
        name: 'Stealth',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/270bcdf26d66cda1f488e9b3286c3cb467c6e622d729420406ce69218380ae1a.png',
      },
      {
        name: 'Translocator',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e81f286184e24512c724af16a960a1faca6ade164238b025d19da64226f05f4d.png',
      },
      {
        name: 'EMP',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6104a559ac558db8f7356a10b419d1330e98758ba9f8099666d694c088c64265.png',
      },
      {
        name: 'Opportunist',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a30c48c19f3f5af06d1602e0fbd3a19f55d2b0845b76be8fa381a42c38fff09d.png',
      },
    ],
  },
  Symmetra: {
    name: 'Symmetra',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.DPS,
      occupation: [Occupation.ARCHITECH],
      weaponType: [WeaponType.BEAM, WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Sentry Turret',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6ca1ad903ec0121026994bd2318dd5f2488ba40e5dbf5bdb2d5fad8474359253.png',
      },
      {
        name: 'Teleporter',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/13b45663f441144ded977e8ccf9ed180c213176206a9f6f9e189e29f09a03b64.png',
      },
      {
        name: 'Photon Barrier',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/366a8cb1fd0718d4e2307674c713277b2a6c095c1997ddb7f4b9d9779063adb1.png',
      },
    ],
  },
  Torbjörn: {
    name: 'Torbjörn',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png',
    emoji: '🇸🇪🔥🛠️',
    trivia: {
      gender: Gender.MALE,
      role: Role.DPS,
      occupation: [Occupation.CHIEF_ENGINEER, Occupation.WEAPONS_DESIGNER],
      weaponType: [WeaponType.PROJECTILE, WeaponType.SHOTGUN, WeaponType.MELEE],
    },
    abilities: [
      {
        name: 'Deploy Turret',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a3791d6155a72f1dd4109d99a7d730b5f489f0442abd6582b429bcca36a2dc75.png',
      },
      {
        name: 'Overload',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/b59687c0dd86bbc41b754388e7b21deba5397c61808c0d9b375c062c9eaf85ac.png',
      },
      {
        name: 'Molten Core',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/640e2363d97cfe133716bb2811d5dedb18faddb50ebbf77c415163ea50e87b41.png',
      },
    ],
  },
  Tracer: {
    name: 'Tracer',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png',
    emoji: '💨⌛️🏃‍♀️',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.DPS,
      occupation: [
        Occupation.ADVENTURER,
        Occupation.PILOT,
        Occupation.OVERWATCH,
      ],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Blink',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f0dcf74b87793e8b56fc56c62974846a769b2d62cb5dc69bdc92cc7ee3a1d025.png',
      },
      {
        name: 'Recall',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/30939502a8576da1fdcad8c7d21881e32066fb28847fc7df874b1436689e3425.png',
      },
      {
        name: 'Pulse Bomb',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/383e9b039efb93da77bb91fbeb3654ef50724e0cea0de76b2cc1c4db43de9a6d.png',
      },
    ],
  },
  Widowmaker: {
    name: 'Widowmaker',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png',
    emoji: '🎯🕷️😈',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.DPS,
      occupation: [Occupation.BALLET_DANCER, Occupation.ASSASSIN],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Grappling Hook',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/72fec7acac37ad840835839e72f368134498583686e91f7e30fe5d48aa44f7a1.png',
      },
      {
        name: 'Venom Mine',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/82bb61b02224901170d8dc2fae143e695649cdfd7f5173a0e63a7742fd45bd84.png',
      },
      {
        name: 'Infra-Sight',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/b7783e8f83afc45dac37b80d0801a5b8200727e3dde299510d2f1886e0c7237b.png',
      },
    ],
  },
  Winston: {
    name: 'Winston',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png',
    emoji: '👓⚡️😡🦧',
    trivia: {
      gender: Gender.MALE,
      role: Role.TANK,
      occupation: [
        Occupation.TEST_SUBJECT,
        Occupation.SCIENTIST,
        Occupation.ADVENTURER,
      ],
      weaponType: [WeaponType.BEAM, WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Jump pack',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dbad1fe535da5b932ad706a0ca06373d530f1210cbbb095ef1bc8b3a7cc64172.png',
      },
      {
        name: 'Barrier Projector',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/469c290ded9fd33ce4ed927fc2da12c97483711e155f73bd7eaa05a399d5dbff.png',
      },
      {
        name: 'Primal Rage',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/685608721cb914e0412a090eb1e89c0f5d10edfb3dbc34218ba3acd35611c990.png',
      },
    ],
  },
  'Wrecking Ball': {
    name: 'Wrecking Ball',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png',
    emoji: '🐹',
    trivia: {
      gender: Gender.MALE,
      role: Role.TANK,
      occupation: [
        Occupation.TEST_SUBJECT,
        Occupation.MECH_PILOT,
        Occupation.BODYGUARD,
      ],
      weaponType: [WeaponType.HITSCAN],
    },
    abilities: [
      {
        name: 'Grappling Claw',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e81e6ba9fb3391f29528021e453a0d3c16da1fc5e378994e6d00783356e0f2c9.png',
      },
      {
        name: 'Roll',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/b7f7e90bf3c3f26704133263896bded18e523e29dad2fe04c5f3c1bfa4472579.png',
      },
      {
        name: 'Piledriver',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e884373721448d109c1646599cfe651a5bccdbc7a12d5062372c91b28acd80c.png',
      },
      {
        name: 'Adaptive Shield',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa65af9c692405f968fafbeedcdfc9092b38a050dc3562bd41280390ccd7a21d.png',
      },
      {
        name: 'Minefield',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/17a54a345b715bc4301b330d8eb394f57e1c66308a8cba67f426de76a71ba868.png',
      },
    ],
  },
  Zarya: {
    name: 'Zarya',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png',
    trivia: {
      gender: Gender.FEMALE,
      role: Role.TANK,
      occupation: [Occupation.SOLDIER],
      weaponType: [WeaponType.BEAM, WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Particle Barrier',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2d462e28ae2fc60b3ef9c32702bbc88936885dd7d20746a31dd2e3c51c20f199.png',
      },
      {
        name: 'Projected Barrier',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e42984ee8329a50e9c2460ae2df7670d7be9846a093c336e4576d1eea1fb2f1.png',
      },
      {
        name: 'Graviton Surge',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e58e60f939026f3d0ee95cf3a0b5fc8091da3c35a178d34c358700f3720a70d3.png',
      },
    ],
  },
  Zenyatta: {
    name: 'Zenyatta',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png',
    emoji: '⚾️🦿🤖🧘‍♂️',
    trivia: {
      gender: Gender.OMNIC,
      role: Role.SUPPORT,
      occupation: [Occupation.WANDERING_GURU, Occupation.ADVENTURER],
      weaponType: [WeaponType.PROJECTILE],
    },
    abilities: [
      {
        name: 'Orb of Discord',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f416ae3c602c4f920551057176a3618441f943a0faea5e3cf77dc5db0e5128a5.png',
      },
      {
        name: 'Orb of Harmony',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/999f5d34dd3c8dfb045bc69129d1b6aac547b98e252b68f2599b878d15d841cb.png',
      },
      {
        name: 'Transcendence',
        icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6ac5d4f08023cafc9f5412e45141cddecfdb2cb43ecf8415c12d1d161cce4678.png',
      },
    ],
  },
};
