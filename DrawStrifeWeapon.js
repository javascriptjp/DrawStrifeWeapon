const Canvas = require("canvas")
const colors = require("./lib/colors.json")
const Scolor = require("./lib/strife-colors.json")

module.exports = (config={}) => {
    if(config==null)throw new Error("Syntax error")
    const CCFG = {}
    const ADDED = {M:false,E:false,O:false,A:false,AD:false,S:false}
    CCFG.width = 300
    CCFG.height= 35

    if(config.name == undefined){
        config.name = {"value":"<No name>","color":colors.f,"bullet":0}
    }else{
        if(config.name.value == undefined)config.name.value = "Any weapon"
        if(config.name.color == undefined)config.name.color = colors.f
        if(config.name.bullet == undefined)config.name.bullet = 0
    }

    if(config.Mod == undefined){
        config.Mod = false
    }else {
        if(config.Mod.Lv == undefined)config.Mod.Lv = 1
        if(config.Mod.name == undefined)config.Mod.name = "Any mod"
        if(config.Mod.color == undefined)config.Mod.color = false
        CCFG.height = CCFG.height + 32
    }
    
    if(config.Ench == undefined){
        config.Ench = false
    } else {
        if(!config.Mod&&!ADDED.M) {CCFG.height = CCFG.height + 32;ADDED.M = true}
        if(config.Ench.Lv == undefined)config.Ench.Lv = 1
        if(config.Ench.name == undefined)config.Ench.name = "Any ench"
        if(config.Ench.color == undefined)config.Ench.color = false
        CCFG.height = CCFG.height + 24
    }
    
    if(config.OE == undefined){
        config.OE = false
    } else {
        if(!config.Mod&&!ADDED.M) {CCFG.height = CCFG.height + 32;ADDED.M = true}
        if(!config.Ench&&!ADDED.E) {CCFG.height = CCFG.height + 24;ADDED.E = true}
        if(config.OE.Lv == undefined)config.OE.Lv = 1
        if(config.OE.name == undefined)config.OE.name = "Any ench"
        if(config.OE.color == undefined)config.OE.color = false
        CCFG.height = CCFG.height + 24
    }
    
    if(config.AE == undefined){
        config.AE = false
    } else {
        if(!config.Mod&&!ADDED.M) {CCFG.height = CCFG.height + 32;ADDED.M = true}
        if(!config.Ench&&!ADDED.E) {CCFG.height = CCFG.height + 24;ADDED.E = true}
        if(!config.OE&&!ADDED.O) {CCFG.height = CCFG.height + 24;ADDED.O = true}
        if(config.AE.Lv == undefined)config.AE.Lv = 1
        if(config.AE.name == undefined)config.AE.name = "Any AE"
        if(config.AE.color == undefined)config.AE.color = false
        CCFG.height = CCFG.height + 24
    }
    
    if(config.Addon == undefined){
        config.Addon = false
    } else {
        if(!config.Mod&&!ADDED.M) {CCFG.height = CCFG.height + 32;ADDED.M = true}
        if(!config.Ench&&!ADDED.E) {CCFG.height = CCFG.height + 24;ADDED.E = true}
        if(!config.OE&&!ADDED.O) {CCFG.height = CCFG.height + 24;ADDED.O = true}
        if(!config.AE&&!ADDED.A) {CCFG.height = CCFG.height + 24;ADDED.A = true}
        if(config.Addon.Lv == undefined)config.Addon.Lv = 1
        if(config.Addon.name == undefined)config.Addon.name = "Addon"
        if(config.Addon.color == undefined)config.Addon.color = false
        CCFG.height = CCFG.height + 24
    }
    
    if(config.Scope == undefined){
        config.Scope = false
    } else {
        if(!config.Mod&&!ADDED.M) {CCFG.height = CCFG.height + 32;ADDED.M = true}
        if(!config.Ench&&!ADDED.E) {CCFG.height = CCFG.height + 24;ADDED.E = true}
        if(!config.OE&&!ADDED.O) {CCFG.height = CCFG.height + 24;ADDED.O = true}
        if(!config.AE&&!ADDED.A) {CCFG.height = CCFG.height + 24;ADDED.A = true}
        if(!config.Addon&&!ADDED.AD) {CCFG.height = CCFG.height + 24;ADDED.AD = true}
        if(config.Scope.Lv == undefined)config.Scope.Lv = 1
        if(config.Scope.name == undefined)config.Scope.name = "Any Scope"
        if(config.Scope.color == undefined)config.Scope.color = false
        CCFG.height = CCFG.height + 24
    }

    const Field = Canvas.createCanvas(CCFG.width,CCFG.height)
    const ctx = Field.getContext('2d');
    Canvas.registerFont('./lib/minecraft_font.ttf', { family: 'minecraft' });

    ctx.fillStyle = colors.sl;
    ctx.fillRect(0, 0, Field.width, Field.height);
    ctx.fillStyle = colors.bg;
    ctx.fillRect(2.5, 2.5, Field.width-5, Field.height-5);

    ctx.fillStyle = config.name.color;
    ctx.font = "bold 16px minecraft";
    ctx.fillText(`${config.name.value} - <${config.name.bullet}>`, 7, 23);

    if(config.Mod){
        ctx.fillStyle = Scolor.Mod[''+config.Mod.Lv];
        if(config.Mod.color){
            ctx.fillStyle = config.Mod.color
        }
        ctx.font = "bold 16px minecraft";
        ctx.fillText(`Mod:  ${config.Mod.name}  Mod`, 7, 55);
    }
    if(config.Ench){
        ctx.fillStyle = Scolor.Ench[''+config.Ench.Lv];
        if(config.Ench.color){
            ctx.fillStyle = config.Ench.color
        }
        ctx.font = "bold 16px minecraft";
        ctx.fillText(`Ench:  ${config.Ench.name}  ${"I".repeat(+config.Ench.Lv)}`, 7, 79);
    }
    if(config.OE){
        ctx.fillStyle = Scolor.Ench[''+config.OE.Lv];
        if(config.OE.color){
            ctx.fillStyle = config.OE.color
        }
        ctx.font = "bold 16px minecraft";
        ctx.fillText(`Ench:  ${config.OE.name}  ${"I".repeat(+config.OE.Lv)}`, 7, 103);
    }
    if(config.AE){
        ctx.fillStyle = Scolor.AE[''+config.AE.Lv];
        if(config.AE.color){
            ctx.fillStyle = config.AE.color
        }
        ctx.font = "bold 16px minecraft";
        ctx.fillText(`AE:  ${config.AE.name}`, 7, 127);
    }
    if(config.Addon){
        ctx.fillStyle = Scolor.Addon[''+config.Addon.Lv];
        if(config.Addon.color){
            ctx.fillStyle = config.Addon.color
        }
        ctx.font = "bold 16px minecraft";
        ctx.fillText(`Addon:  ${config.Addon.name}  ${config.Addon.Lv>1?"+".repeat(+config.Addon.Lv-1):""}`, 7, 151);
    }
    if(config.Scope){
        ctx.fillStyle = Scolor.Scope[''+config.Scope.Lv];
        if(config.Scope.color){
            ctx.fillStyle = config.Scope.color
        }
        ctx.font = "bold 16px minecraft";
        ctx.fillText(`Scope:  ${config.Scope.name}`, 7, 175);
    }
    return Field.toBuffer('image/png')
}