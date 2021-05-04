{
  // g是贪婪匹配
  // 横向模糊匹配
  let reg = /ab{2,5}c/g
  let str = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";

  console.log(str.match(reg))
}

{
  // 纵向模式匹配
  // 可以一定程度上替代||
  let reg = /a[123]b/g
  let str = "a0b a1b a2b a3b a4b"

  console.log(str.match(reg))
}

{
  // 案例1: 匹配颜色
  let reg = /#([a-zA-Z\d]{6}|[a-zA-Z\d]{3})/g
  let str = "#ffbbad #Fc01DF #FFF #ffE"
  console.log(str.match(reg))
}

{
  // 案例2: 匹配24小时时间
  let reg = /((0?|1)\d|2[0-3]):(0?|[1-5])\d/g
  let str = "23:59 01:01 1:1"
  console.log(str.match(reg))
}

{
  // 案例3: 匹配日期
  let reg = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/g
  let str = "2017-06-10"
  console.log(str.match(reg))
}
