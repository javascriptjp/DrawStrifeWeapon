const fs = require("fs")
const MakeWeapon = require("./DrawStrifeWeapon.min")
const $ = require("./lib/colors.json")

const buffer = MakeWeapon({
    name : {
        value : "WeaponName",
        color : $.f,                   //$.<code>
        bullet : "10 / 20"             //str||Int
    },
    Mod   : {Lv:"3",name:"ModName"},   //Lv:1-3
    Ench  : {Lv:"3",name:"EnchName"},  //Lv:1-3
    OE    : {Lv:"3",name:"OEName"},    //Lv:1-3
    AE    : {Lv:"1",name:"AEName"},    //Lv:1
    Addon : {Lv:"4",name:"AddonName"}, //Lv:1-4
    Scope : {Lv:"1",name:"ScopeName"}  //Lv:1-2
})
fs.writeFileSync('./output.png', buffer)