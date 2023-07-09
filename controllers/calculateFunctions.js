export const exponent = (req , res) => {

    let e1 = Number(req.body.e1);
    let e2 = Number(req.body.e2);
    let ans  = e1 ** e2;
    res.send(`${e1} ^ ${e2} = ${ans}`);

}

export const modulas = (req , res) => {

    let mod1 = Number(req.body.mod1);
    let mod2 = Number(req.body.mod2);
    let modulas = mod1 % mod2;
    res.send(`modulas = ${modulas}`);

}

export const divide = (req , res) => {

    let d1 = Number(req.body.d1);
    let d2 = Number(req.body.d2);
    let divide = d1 / d2;
    res.send(`dividation = ${divide}`);

}

export const multiply = (req , res) => {

    let m1 = Number(req.body.m1);
    let m2 = Number(req.body.m2);
    let multiplication = m1 * m2;
    res.send(`multiplication = ${multiplication}`);

}

export const subtract = (req , res) => {

    let s1 = Number(req.body.s1);
    let s2 = Number(req.body.s2);
    let sub = s1 - s2;
    res.send(`subtraction = ${sub}`);

}

export const add = (req,res)=>{
    let a1=Number(req.body.a1);
    let a2=Number(req.body.a2);
    let sum = a1 + a2;
    res.send(`sum = ${sum}`);
}

export const logrithm = (req , res) => {

    let l1 = (req.body.l1);
    let ans  = Math.log10(l1);
    res.send(`log of ${l1} is ${ans}`)

}