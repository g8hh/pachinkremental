/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Unlock Sapphire Balls': '解锁蓝宝石球',
    'Unlock Topaz Balls': '解锁黄玉球',
    'Unlock Turquoise Balls': '解锁绿松石球',
    'Upgrades\n\t\t\t\t\t\t': '升级\n\t\t\t\t\t\t',
    'Welcome to Pachinkremental!': '欢迎来到弹珠放置！',
    'Wheel Speed': '轮盘速度',
    'Your save file is below. Copy the text and keep it someplace safe.': '下面是您的保存文件。复制文本并把它放在安全的地方。',
    'source code': '源码',
    'Spin the wheel!': '转动轮盘！',
    'Stackable Buff': '可堆叠增益',
    'Stats\n\t\t\t\t\t': '统计\n\t\t\t\t\t',
    'Options\n\t\t\t\t\t': '选项\n\t\t\t\t\t',
    'Sapphire Exponent': '蓝宝石指数',
    'Sapphire Balls': '蓝宝石球',
    'Sapphire Ball Rate': '蓝宝石球几率',
    'Sapphire balls': '蓝宝石球',
    'Ruby balls': '红宝石球',
    'Ruby Balls': '红宝石球',
    'Ruby Ball Rate': '红宝石球几率',
    'Opal Ball': '蛋白石球',
    'Opal balls': '蛋白石球',
    'Opal Balls': '蛋白石球',
    'Opal Ball Rate': '蛋白石球几率',
    'Emerald Ball Rate': '翡翠球几率',
    'Emerald Ball': '翡翠球',
    'Emerald Balls': '翡翠球',
    'Emerald balls': '翡翠球',
    'Auto': '自动',
    'Point Multiplier': '点数倍数',
    'Popup text': '弹出文本',
    'NOTE: Unlocking one gemstone ball sharply increases the cost of unlocking the others!': '注意：解锁一颗宝石球会大幅增加解锁其他宝石球的成本！',
    'Normal Ball': '普通球',
    'Normal Balls': '普通球',
    'New!': '新!',
    'Max Balls': '球上限',
    'Multi-Spin': '批量旋转',
    'Try the beta!': '尝试测试版！',
    'Turquoise Ball': '绿松石球',
    'Turquoise Ball Rate': '绿松石球几率',
    'Turquoise Balls': '绿松石球',
    'Turquoise balls': '绿松石球',
    'Topaz Ball': '黄玉球',
    'Topaz Ball Rate': '黄玉球几率',
    'Topaz Balls': '黄玉球',
    'Topaz balls': '黄玉球',
    'Beach Ball Rate': '沙滩球几率',
    'Beach Ball': '沙滩球',
    'Beach Balls': '沙滩球',
    'Beach balls': '沙滩球',
    'Better Buff Multiplier': '更好的增益倍数',
    'Better Multi-Spin': '更好的批量旋转',
    'Better Point Values': '更好的点数值',
    'Board': '面板',
    'Bonus Wheel': '奖励轮盘',
    'Center Slot Value': '中心槽值',
    'changelog': '更新日志',
    'Click anywhere in the green box to drop a ball.': '点击绿色框中的任意位置以放下球。',
    'Congratulations!': '恭喜你!',
    'Emerald Exponent': '祖母绿指数',
    'Erase save file': '擦除存档文件',
    'Export save file': '导出存档文件',
    'Extra Spin Target': '额外旋转目标',
    'Favicon': '图标',
    'Game loaded': '游戏已加载',
    'Gold Ball': '黄金球',
    'Gold Balls': '黄金球',
    'Gold balls': '黄金球',
    'Gold Ball Value': '黄金球值',
    'Gold Ball Rate': '黄金球几率',
    'Highest buff multiplier': '最高增益倍数',
    'Loading...': '加载中...',
    'manual': '手动',
    'Unlock Amethyst Balls': '解锁紫水晶球',
    'Unlock Beach Balls': '解锁沙滩球',
    'Unlock Emerald Balls': '解锁翡翠球',
    'Unlock Amethyst balls. Amethyst balls have the bonuses of both ruby and sapphire balls.': '解锁紫水晶球。 紫水晶球具有红宝石球和蓝宝石球的优点。',
    'Unlock all 3 of Ruby, Sapphire, and Emerald Balls': '解锁所有 3 个红宝石、蓝宝石和翡翠球',
    'Unlock Emerald balls. Points scored by emerald balls are multiplied by the square of the gold ball multiplier.': '解锁翡翠球。 翡翠球得分乘以金球乘数的平方。',
    'Unlock Gold balls. Gold balls are worth double points and don\'t count towards the max balls limit.': '解锁金球。 金球价值双倍，不计入最大球数限制。',
    'Unlock Opal Balls': '解锁蛋白石球',
    'Unlock Sapphire balls. Sapphire balls are worth the same as a gold ball, plus the gold ball multiplier is also applied to the number of bonus wheel spins earned by sapphire balls."': '解锁蓝宝石球。 蓝宝石球的价值与金球相同，此外，金球乘数也适用于蓝宝石球获得的奖励轮旋转次数。',
    'Unlocked!': '已解锁!',
    'Ruby Ball': '红宝石球',
    'Uses 10% of your available spins at a time, multiplying any points you win from that spin. NOTE: Bonus gold ball drops are not multiplied.': '一次使用 10% 的可用旋转，乘以您从该旋转中赢得的任何积分。 注意：奖金金球掉落不会成倍增加。',
    'Rotation Multiplier': '旋转倍数',
    'Opacity': '透明度',
    'Next upgrade reveal at': '下一步升级显示在',
    'Maximum number of balls allowed on the board at once.': '允许同时在面板上显示的最大球数。',
    'Makes the ruby ball buff stackable. If a ruby ball falls in the center slot while the buff is already active, it extends the duration. Any time over 60 seconds is converted to a multiplier increase. The time extension is inversely proportional to the existing multiplier.': '使红宝石球 增益 可堆叠。 如果红宝石球在 增益 已经激活时落入中心槽，它会延长持续时间。 任何超过 60 秒的时间都会转换为乘数增加。 时间延长与现有乘数成反比。',
    'Auto-Drop': '自动掉落',
    'Auto-Drop Delay': '自动掉落延迟',
    'Auto-Spin': '自动旋转',
    'Automatically drops a ball when allowed. Click in the drop zone to move the drop position.': '在开启的情况下自动丢球。 单击拖放区以移动拖放位置。',
    'Automatically spin the Bonus Wheel.': '自动旋转奖励轮盘。',
    'Game saved': '游戏已保存',
    'Gemstone Balls': '宝石球',
    'Gemstone balls have the benefits of gold balls, plus additional bonuses.': '宝石球具有金球的好处，外加额外的奖励。',
    'Hover over an upgrade to see what it does.': '将鼠标悬停在升级上以查看它的作用。',
    'Import save file': '导入存档',
    'Perhaps just relax and watch the balls drop, if you like.\n\t\t\t': '如果你愿意，也许只是放松一下，看着球落下。\n\t\t\t',
    'Sapphire Ball': '蓝宝石球',
    'since you started playing on this save file.\n\t\t\t\t': '从你开始玩这个存档。\n\t\t\t\t',
    'Time-Based Multiplier': '基于时间的倍数',
    'Topaz Synergy': '黄玉协同作用',
    'Total balls dropped': '落球总数',
    'Total points earned': '总点数',
    'Turquoise Synergy': '绿松石协同作用',
    'Unlock 8-Balls': '解锁 8 球',
    'Back to live version': '返回线上版本',
    'Beach Ball Score Exponent': '沙滩球点数指数',
    'Balls dropped manually': '手动掉落的球',
    'Beach Ball Spin Exponent': '沙滩球旋转指数',
    'Increases point multiplier for gold balls.': '增加金球的点数乘数。',
    'Amethyst Ball': '紫水晶球',
    'Amethyst Ball Rate': '紫水晶球几率',
    'Amethyst Balls': '紫水晶球',
    'Amethyst balls': '紫水晶球',
    'Amethyst Synergy': '紫水晶协同作用',
    'Point value of the bottom center slot.': '底部中心槽的点数值。',
    '8-Ball Rate': '8球几率',
    '8-Ball': '8球',
    '8-Balls': '8球',
    '8-balls': '8球',
    '8-Ball Score Exponent': '8球点数指数',
    'It\'s been': '它已经',
    'Thanks for playing Pachinkremental! Please check back for more updates in the future.\n\t\t\t\t': '感谢您玩 弹珠放置！ 以后请回来查看更多更新。\n\t\t\t\t',
    'You can keep going as far as you want, but for now there are no more upgrades to discover or max out.\n\t\t\t\t': '你可以随心所欲地继续前进，但目前没有更多的升级可以发现或最大化。\n\t\t\t\t',
    'You\'ve maxed all the upgrades that can be maxed, as of': '你已经最大化了所有可以最大化的升级，截至',
    'Makes bonus wheel spins play out faster.': '使奖励轮盘旋转发挥得更快。',
    'Multipiles all point gains.': '乘以所有点数增益。',
    'source code': '源码',
    'Unlock Sapphire balls. Sapphire balls are worth the same as a gold ball, plus the gold ball multiplier is also applied to the number of bonus wheel spins earned by sapphire balls.': '解锁蓝宝石球。 蓝宝石球的价值与金球相同，此外，金球乘数也适用于蓝宝石球获得的奖励轮旋转次数。',
    'Adds an extra target that awards Bonus Wheel spins.': '添加一个奖励轮盘旋转的额外奖励目标。',
    'Change the \"Drop 3 gold balls\" space to \"Drop 3 gemstone balls\", which drops 1 Ruby, 1 Emerald, and 1 Sapphire ball.': '将“掉落 3 个金球”空间更改为“掉落 3 个宝石球”，即掉落 1 个红宝石球、1 个绿宝石球和 1 个蓝宝石球。',
    'Change the \"Drop 7 gold balls\" space to \"Drop 7 special balls\". One gemstone ball of each type you have unlocked replaces one of the gold balls. This automatically updates as you unlock more gemstone balls.': '将“掉落7个金球”空间改为“掉落7个特殊球”。 您解锁的每种类型的宝石球都会替换其中一个金球。 当您解锁更多宝石球时，这会自动更新。',
    'Decreases the auto drop delay.': '减少自动掉落延迟。',
    'Increases the exponent on the gold ball value multiplier for emerald balls.': '为绿宝石球增加金球价值乘数的指数。',
    'Increases the exponent on the gold ball value multiplier for sapphire balls. Note: The number of spins earned per sapphire ball is rounded down to the nearest whole number.': '增加蓝宝石球的金球值乘数的指数。 注意：每个蓝宝石球的旋转次数向下四舍五入到最接近的整数。',
    'Increases the probability of dropping Emerald balls.': '增加掉落翡翠球的概率。',
    'Increases the probability of dropping Gold balls.': '增加掉落金球的概率。',
    'Increases the probability of dropping Ruby balls.': '增加掉落红宝石球的概率。',
    'Increases the probability of dropping Sapphire balls.': '增加掉落蓝宝石球的概率。',
    'Unlock all 3 of Topaz, Turquoise, and Amethyst Balls': '解锁所有 3 颗黄玉、绿松石和紫水晶球',
    'Unlock Ruby balls. Ruby balls are worth the same as a gold ball, plus if a ruby ball falls in the center slot, it activates a buff that doubles all points scored for 60 seconds.': '解锁红宝石球。 红宝石球的价值与金球相同，而且如果红宝石球落入中心槽，它会激活一个增益效果，使所有得分加倍，持续 60 秒。',
    'Unlock Topaz balls. Topaz balls have the bonuses of both ruby and emerald balls.': '解锁黄玉球。 黄玉球具有红宝石球和祖母绿球的优点。',
    'Unlock Turquoise balls. Turquoise balls have the bonuses of both emerald and sapphire balls.': '解锁绿松石球。 绿松石球具有祖母绿球和蓝宝石球的优点。',
    'Unlocks the Bonus Wheel. Also adds 2 targets, which award a spin for each ball that passes through them. Point values on the wheel scale based on your upgrades.': '解锁奖励轮。 还添加了 2 个目标，每经过一个球就会旋转一次。 车轮刻度上的点值基于您的升级。',
    'Applies the score buff multiplier to spins earned by Amethyst balls. (Spins awarded are rounded down to the nearest whole number.': '将点数增益乘数应用于紫水晶球获得的旋转。 （授予的旋转数向下舍入到最接近的整数。',
    'Increases the probability of dropping Amethyst balls.': '增加掉落紫水晶球的概率。',
    'If a Turquoise ball hits a spin target, it also awards the value of the center slot, and if it lands in the center slot, it also awards the spins for a hitting a spin target.': '如果绿松石球击中旋转目标，它还会奖励中心槽的值，如果它落在中心槽中，它也会奖励击中旋转目标的旋转。',
    'Increases the probability of dropping Turquoise balls.': '增加掉落绿松石球的概率。',
    'Change the \"Drop 3 gemstone balls\" space to drop 1 Topaz, 1 Turquoise, and 1 Amethyst ball.': '更改“掉落 3 个宝石球”空间以掉落 1 个黄玉、1 个绿松石和 1 个紫水晶球。',
    'Increases the probability of dropping Topaz balls.': '增加掉落黄玉球的概率。',
    'Makes the score buff multiplier awarded by Topaz balls equal to the Emerald exponent, e.g. an Emerald exponent of 3 means a Topaz ball in the center slot awards a 3× scoring buff instead of just 2× scoring.': '使黄玉球授予的分数增益乘数等于翡翠指数，例如 翡翠 指数为 3 意味着中心槽中的黄玉球奖励 3 倍得分增益，而不仅仅是 2 倍得分。',
    'Unlock Opal Balls and Stackable Buff': '解锁蛋白石球和可堆叠增益',
    'Unlock Opal balls. Opal balls have the combined bonuses of all the other gemstone balls.': '解锁蛋白石球。 蛋白石球具有所有其他宝石球的综合奖励。',
    'Max Ruby, Sapphire, and Emerald Ball Rates (10%). Each one reveals a different upgrade when maxed.': '最大红宝石、蓝宝石和翡翠球率 (10%)。 当达到最大值时，每个都会显示不同的升级。',
    'Increases the probability of dropping Opal balls.': '增加掉落蛋白石球的概率。',
    'Increases the exponent on the 8× multiplier for points scored by 8-Balls.': '为8球的点数增加8×乘数指数。',
    'Increases the probability of dropping 8-balls.': '增加掉8球的概率。',
    'Unlock 8-balls. 8-Balls are like Opal balls, but are worth 8× the points and spins of Opal balls, and awards an 8× scoring buff instead of 2×. (Score buff stacks additively with the Ruby ball buff.': '解锁 8 球。 8球 就像蛋白石球，但价值是蛋白石球的 8 倍点数和旋转，并且奖励 8 倍的得分增益，而不是 2 倍。 （得分增益与红宝石球增益叠加。',
    'Unlock Beach balls. Beach balls are bouncier and floatier than other balls. They\'re worth double the points and spins of 8-balls, and award a 16× scoring buff.': '解锁沙滩球。 沙滩球比其他球更有弹性和漂浮性。 它们的价值是 8 球得分和旋转的两倍，并奖励 16 倍的得分增益。',
    "ago": "前",
    "As a reward, you've unlocked a new machine! Check it out in the Machines menu, between Upgrades and Stats.": "作为奖励，您解锁了一台新机器！ 在升级和统计之间的机器菜单中查看它。",
    "Balls counted": "计数的球",
    "Reset hit rates": "重置命中率",
    "seconds": "秒",
    "since you started playing on this save file. You can check how long it took you to reach this milestone, as well as any other milestones you've reached, in the Stats menu.": "从你开始玩这个保存文件。 您可以在“统计信息”菜单中查看达到此里程碑所需的时间，以及您已达到的任何其他里程碑。",
    "source code": "源码",
    "Spiral Power": "螺旋动力",
    "Upgrades": "升级 ",
    "You've maxed all the upgrades that can be maxed on the": "你已经最大化了所有可以在",
    "Hover over an upgrade to see what it does. Hold Shift to buy as many levels as you can, in one click.": "将鼠标悬停在升级上以查看它的作用。 按住 Shift 键可以一键购买尽可能多的关卡。",
    "Longest-lasting Beach Ball": "最持久的沙滩球",
    "machine!": "机器!",
    "Machines": "机器",
    "Most rotations by a Beach Ball": "沙滩球最多旋转",
    "Multiplier": "乘数",
    "Points scored by Bonus Wheel": "奖励轮盘获得的积分",
    "since you started playing on this save file.": "从你开始玩这个保存文件。",
    "Thanks for playing Pachinkremental! Please check back for more updates in the future.": "感谢您玩 Pachinkremental！ 请在以后查看更多更新。",
    "You can keep going as far as you want, but for now there are no more upgrades to discover or max out.": "您可以随心所欲地继续前进，但目前没有更多升级可以发现或最大化。",
    "Excellent!": "优秀！",
    "By the way, it's been": "顺便说一句，已经",
    "Perhaps just relax and watch the balls drop, if you like.": "如果你愿意，也许只是放松一下，看着球掉下来。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
//    测试版
    'Activate Hyper System': '激活超级系统',
    'ago\n\t\t\t\t\t\t': '之前\n\t\t\t\t\t\t',
    'Apply opacity settings to pop-up text: ': '将不透明度设置应用于弹出文本：',
    'Basic': '基础',
    'Basic machine maxed': '基础机器最大化',
    'Bumpers': '缓冲器',
    'Bumpers machine maxed': '缓冲器机器最大化',
    'Highest combo': '最高连击',
    'Hyper System activations': '超级系统激活',
    'Machines\n\t\t\t\t\t\t': '机器\n\t\t\t\t\t\t',
    'Normal balls': '普通球',
    'NOTE: Each gemstone ball unlocked sharply increases the cost of unlocking the others!': '注意：每个宝石球解锁都会大幅增加解锁其他宝石球的成本！',
    'Save file started': '存档文件开始于',
    'Stats by ball type': '按球类型统计',
    'Time taken to reach milestones': '达到里程碑所需的时间',
    'Total points scored': '总点数得分',
    'You can switch machines here whenever you like. Each machine has its own separate points, upgrades, and stats. You can only play one machine at a time, but you can always return to a previous machine and pick up where you left off.': '您可以随时在这里切换机器。 每台机器都有自己独立的积分、升级和统计数据。 您一次只能玩一台机器，但您可以随时返回上一台机器并从上次停止的地方继续。',
    '\t\t\t\tApply opacity settings to pop-up text': '\t\t\t\t将不透明度设置应用于弹出文本',
    '\t\t\t| Multi‑Spin: ×': '\t\t\t| 批量旋转: ×',
    '\t\tSpins: ': '\t\t旋转: ',
    'Ruby Ball Value': '红宝石球值',
    'Sapphire Ball Value': '蓝宝石球值',
    'Unlock Combos': '解锁组合',
    'Unlock Opal balls. Opal balls have the combined bonuses of all the other gemstone balls. (The three multipliers stack additively.': '解锁蛋白石球。 蛋白石球具有所有其他宝石球的综合奖励。 （三个乘数相加叠加。',
    'Unlock Topaz balls. Topaz balls have the bonuses of both ruby and emerald balls. (The two multipliers stack additively.': '解锁黄玉球。 黄玉球具有红宝石球和祖母绿球的优点。 （两个乘数相加叠加。',
    'Maxed!': '已最大!',
    'Hyper Multiplier': '超级乘数',
    'Increases the Hyper System score multiplier.': '增加了超级系统得分乘数。',
    'Hyper System active!': '超级系统激活！',
    'Hyper System charging...': '超级系统充电...',
    'Gemstone balls have the benefits of gold balls, plus an additional point value multiplier. Each type of gemstone ball has its own way to increase its multiplier.': '宝石球具有金球的优点，加上额外的点值乘数。 每种类型的宝石球都有自己的增加乘数的方法。',
    'Active': '激活',
    'Add Score Targets': '添加分数目标',
    'Auto-Hyper': '自动超级',
    'Bottom Slot Value': '底部槽值',
    'Bumper Value': '缓冲器值',
    'Charge Rate': '充电速率',
    'Combo Timeout': '组合超时',
    'Combos': '组合',
    'Emerald Ball Value': '翡翠球价值',
    'GP System': 'GP系统',
    'Hyper System': '超级系统',
    'Middle Target Value': '中间目标值',
    'None yet, please wait for the next beta update.': '还没有，请等待下一个测试版更新。',
    'Unlock Emerald balls. An Emerald ball gets +10% value (upgradable) each time it hits a green bumper.': '解锁翡翠球。 翡翠球每次击中绿色缓冲器时都会获得 +10% 的价值（可升级）。',
    'The base value of each bumper or target hit is added to the base value of all subsequent hits in the combo.': '每个缓冲器或目标命中的基值都添加到组合中所有后续命中的基值中。',
    'Unlock Amethyst balls. Amethyst balls have the bonuses of both ruby and sapphire balls. (The two multipliers stack additively.': '解锁紫水晶球。 紫水晶球具有红宝石球和蓝宝石球的优点。 （两个乘数相加叠加。',
    'Unlock Ruby balls. A Ruby ball gets +10% value (upgradable) per second.': '解锁红宝石球。 红宝石球每秒获得 +10% 的价值（可升级）。',
    'Unlock Sapphire balls. A Sapphire ball gets +50% value (upgradable) each time it hits a blue score target.': '解锁蓝宝石球。 蓝宝石球每次击中蓝色得分目标时都会获得 +50% 的价值（可升级）。',
    'Unlock the Hyper System, which is charged by combos. The more hits in a combo, the more charge it\'s worth. When it\'s fully charged, activate the Hyper System to gain 10× scoring for 15 seconds!': '解锁超级系统，这是通过组合充电。 一个组合中的点击次数越多，它的价值就越高。 充满电后，激活超级系统可获得 10 倍积分，持续 15 秒！',
    'Unlock Turquoise balls. Turquoise balls have the bonuses of both emerald and sapphire balls. (The two multipliers stack additively.': '解锁绿松石球。 绿松石球具有祖母绿球和蓝宝石球的优点。 （两个乘数相加叠加。',
    'Unlocks combos. A ball that hits multiple bumpers and/or score targets in quick succession starts a combo, which multiplies the point values of everything hit in the combo. The 2nd hit is worth 2× points, the 3rd thing hit is 3×, and so on.': '解锁连击。 一个快速连续击中多个缓冲器和/或得分目标的球会启动一个组合，它会乘以组合中所有击中的点值。 第 2 次命中值 2× 点，第 3 次命中值 3×，依此类推。',
    'Points awarded by bumpers when hit.': '撞击时由缓冲器奖励的点数。',
    'Point value increase per second for Ruby balls.': '红宝石球每秒增加的点数。',
    'Point value increase per green bumper hit for Emerald balls.': '翡翠球每次击中绿色缓冲器的点值都会增加。',
    'Point value increase per blue target hit for Sapphire balls.': '蓝宝石球击中每个蓝色目标的点值增加。',
    'Multiplies the value of the score targets in the middle section (below the bumpers).': '将中间部分（缓冲器下方）的分数目标值相乘。',
    'Multiplies the value of the bottom slots.': '乘以底部插槽的值。',
    'Makes the Hyper System charge faster.': '使得超系统充电速度更快。',
    'Increase the time a ball can go without hitting a bumper or target before its combo breaks.': '增加球在连击中断前不击中缓冲器或目标的时间。',
    'Example: Hitting a 1000-point target, a 100-point bumper, then a 500-point target in a combo awards 1000 points for the 1st hit, (1000+100)×2 points for the 2nd hit, and (1000+100+500)×3 points for the 3rd hit.': '示例：击中 1000 点目标，击中 100 点缓冲器，然后在组合中击中 500 点目标，第一次击中奖励 1000 点，第二次击中获得 (1000+100)×2 点，以及 (1000+100) +500)×3 点为第 3 击。',
    'Automatically activates the Hyper System when it\'s fully charged.': '充满电后自动激活超级系统。',
    'Adds 5 more high-value blue score targets in hard-to-hit places.': '在难以命中的地方再增加 5 个高价值蓝色得分目标。',
    'Unlock Bonus Wheel': '解锁奖励轮盘',
    'Unlock Gold Balls': '解锁金球',
    'Unlock Ruby Balls': '解锁红宝石球',
    '1K Center Slot Value': '1K 中间插槽值',
    '2 Max Balls': '2个球上限',
    'Beta version save files are separate from the live version.': 'Beta 版保存文件与线上版本是分开的。',
    'beta version saves cannot be imported back into the live version.': '测试版保存无法导入到实时版本中。',
    'CAUTION: Beta save files may occasionally be wiped or archived!': '注意：Beta 版保存文件有时可能会被擦除或存档！',
    'For your convenience, your save file from the live version is below.': '为方便起见，下面是实时版本的保存文件。',
    'Welcome to the beta version of Pachinkremental!': '欢迎使用 弹珠放置 测试版！',
    'You can import a live version save into the beta, but': '您可以将实时版本保存到测试版中，但是',
    'Unlock any 2 of Ruby, Sapphire, and Emerald Balls': '解锁红宝石、蓝宝石和翡翠球中的任意 2 个',
    'Error: Beta version save files are incompatible with the live version.': '错误：测试版保存文件与线上版本不兼容。',
    'Highest Hyper Combo': '最高超级组合',
    'Hyper Combo': '超级组合',
    'Error: Save file appears to be corrupted!': '错误：保存文件似乎已损坏！',
    'Change the \"Drop 3 gemstone balls\" space to \"Drop 3 special balls\", which drops 1 Opal ball, 1 8-Ball, and 1 Beach ball.': '将“掉落 3 个宝石球”空间更改为“掉落 3 个特殊球”，即掉落 1 个蛋白石球、1 个 8 球和 1 个沙滩球。',
    'current': '当前',
    'highest': '最高了',
    'Increases the exponent on the time-based multiplier for points scored by Beach Balls.': '增加沙滩球得分的基于时间的乘数的指数。',
    'Increases the exponent on the time-based multiplier for spins earned by Beach Balls. Note: The number of spins earned per ball is rounded down to the nearest whole number.': '增加沙滩球获得的旋转的基于时间的乘数的指数。 注意：每个球获得的旋转次数四舍五入到最接近的整数。',
    'Increases the probability of dropping Beach balls.': '增加掉落沙滩球的概率。',
    'Instead of applying the': '而不是应用',
    'Makes the highest point value on the wheel scale to the value of emerald balls instead of gold balls.': '使轮盘刻度上的最高点值变为翡翠球而不是金球的值。',
    'multiplier you have ever achieved is applied.': '应用您曾经实现的乘数。',
    '': '',
    'None! Congratulations, you\'ve maxed everything that can be maxed on this machine! Check the Machines section below for a new machine!': '啥都没有！ 恭喜你，你已经把这台机器上可以最大化的所有东西都最大化了！ 检查下面的机器部分以获取新机器！',
    'Refunds additional spins consumed by Multi-Spin when landing on a ball drop space. (Note: ZONK still wastes all spins consumed.': '当降落在落球空间时，返还 批量旋转 消耗的额外旋转。 （注意：ZONK 仍然浪费所有消耗的旋转。',
    'score multiplier buff to points won from wheel spins, the': '从轮盘旋转中获得的分数乘数增益，',
    'The more a beach ball rotates, the more points it\'s worth. Stacks multiplicatively with Time-Based Multiplier.': '沙滩球旋转得越多，它的价值就越高。 与基于时间的乘数相乘叠加。',
    'The more time a beach ball spends bouncing around, the more points and spins it\'s worth.': '沙滩球花在弹跳上的时间越多，它的积分和旋转就越多。',
    'Unlock Beach Balls.': '解锁沙滩球。',
    'None! Congratulations, you\'ve reached the current endgame!': '没有了！ 恭喜，您已进入当前的残局！',
    "\t\t\t| Multi‑Spin: ×": "\t\t\t| 批量旋转: ×",
    '\"Veemo!\"': '“保险！”',
    'Gemstone balls have the benefits of gold balls (including not counting towards the max balls limit), plus additional bonuses.': '宝石球具有金球的好处（包括不计入最大球数限制），以及额外的奖励。',
    'Gemstone balls have the benefits of gold balls (including not counting towards the max balls limit), plus an additional point value multiplier. Each type of gemstone ball has its own way to increase its multiplier.': '宝石球具有金球的优点（包括不计入最大球数限制），以及额外的点值乘数。 每种类型的宝石球都有自己的增加乘数的方法。',
    'OD Lunatic Red Eyes': '超速疯狂的红眼',
    'OD Rainbow UFO': '超速彩虹飞碟',
    'OD Perfect Freeze': '超速完美冻结',
    'OD Midas': '超速迈达斯',
    'OD Accelerator': '超速加速器',
    'OD Green-Eyed Monster': '超速绿眼怪物',
    'Overdrive': '超速',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //树游戏
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\t\t\t\t\t": "\t\t\t\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\t\t\t": "\t\t\t",
    "\t\t": "\t\t",
    "\t": "\t",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme": "主题",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Upgrade levels bought": "已购买的等级升级",
    "Style": "样式",
    "Quality": "质量",
    "Pachinkremental": "弹珠放置",
    "Dark Mode": "深色模式",
    "April Fools": "愚人节",
    "Auto Save": "自动保存",
    "Pop-up text": "弹出文本",
    "Better Ball Drops": "更好的球掉下",
    "Scientific Notation": "科学计数法",
    "\t\t\t\t": "\t\t\t\t",
    '\t\tSpins:': '\t\t可旋转次数: ',
    '\t\t\t| Multi‑Spin: ×': '\t\t\t| 批量旋转次数: ×',
    "Bought: ": "已购买: ",
    "Score multiplier:": "点数倍数:",
    'Maxed upgrades': '最大升级',
    "Notation": "符号",
    "Show combos": "显示组合",
    "Board glow: ": "板发光:",
    "Show hit rates: ": "显示命中率: ",
    "Opal ball upgrade button style: ": "蛋白石球升级按钮样式：",
    "Combos: ": "组合: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n\t\t\t\t\t|\n\t\t\t\t\t": "\n\t\t\t\t\t|\n\t\t\t\t\t",
    "\n\t\t\t\t\t\t": "\n\t\t\t\t\t\t",
    "\n\t\t\t\t": "\n\t\t\t\t",
    "\n\t\t\t": "\n\t\t\t",
    "\n": "",
    "Hide": "隐藏",
    "Disabled": "已禁用",
    "Enable All": "全部启用",
    'OFF': '关闭',
    'ON': '打开',
    'High': '高',
    'Default': '默认',
    "8-Ball\+ only": "仅8球\+",
    "Disable All": "全部禁用",
    "Gemstone+ only": "仅宝石\+",
    "Gold+ only": "仅黄金\+",
    "Low": "低",
    "Show": "显示",
    "Medium": "中",
    'Scientific': '科学计数法',
    "Engineering": "工程符号",
    "English": "英文",
    "Full Size": "全尺寸",
    "Enabled": "已启用",
    'Shrink': '缩小',
    "balls/min": "球/分钟",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) undecillion$/,
    /^([\d\.]+) billion$/,
    /^([\d\.]+) trillion$/,
    /^([\d\.]+) quadrillion$/,
    /^([\d\.,]+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^All scoring ×(.+) for (.+) seconds!$/, '$2 秒内全部点数 ×$1！'],
    [/^Points scored in last (.+) seconds$/, '过去 $1 秒内获得的点数得分'],
    [/^Points earned in last (.+) seconds$/, '过去 $1 秒内获得的点数'],
    [/^(.+) Bumper Value$/, '$1 保险值'],
    [/^(.+) balls\/min\) \(MAX$/, '$1 球\/分钟\) \(最大'],
    [/^(.+)\% \(MAX$/, '$1\% \(最大'],
    [/^(.+) \(MAX$/, '$1 \(最大'],
    [/^Cost: (.+)$/, '成本: $1'],
    [/^Points: (.+)$/, '点数: $1'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);