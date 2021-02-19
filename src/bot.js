"use strict";
exports.__esModule = true;
require('dotenv').config();
var discord_js_1 = require("discord.js");
var converter_1 = require("./converter");
var client = new discord_js_1.Client();
var prefix = "$";
client.on("ready", function () {
    var _a;
    console.log(((_a = client.user) === null || _a === void 0 ? void 0 : _a.username) + " has logged in");
});
client.on("message", function (msg) {
    var _a;
    if (msg.author.bot)
        return;
    if ((_a = msg.content) === null || _a === void 0 ? void 0 : _a.startsWith(prefix)) {
        var cmd = msg.content
            .trim()
            .substring(prefix.length);
        console.log(cmd);
        var result = converter_1.converter(cmd);
        console.log(result);
    }
});
client.login(process.env.DISCORD_BOT_TOKEN);
