# DrawStrifeWeapon.js
## contact: Soso#2822
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K1AQ3A3)
※Strife dev teamが作成したものではありません
# How to use
```
npm i canvas
```
```javascript
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
})                                     //buffer[image/png]
fs.writeFileSync('./output.png', buffer)
```
__*./output.png*__
![output.png](/example/output.png)
