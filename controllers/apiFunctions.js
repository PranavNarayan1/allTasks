export const userDetails = (req, res) => {

    let m1 = req.body.m1;
    console.log(m1);
    res.json({ message: "User created successfully"});

}

export const getUser = (req, res) =>{

    res.json({
        userid:req.params.id,
        username:req.params.name,
        message:"User created successfully"
    });

}

export const updateUser = (req, res) => {

    res.json({
        userid: req.params.id,
        username:req.params.name,
        Message:"User updated Successfully"
    });

}

export const deleteUser = (req, res) => {

    console.log(req.params.id);
    res.json({

    });

}

export const arrayObj = (req, res) => {
    console.log(req.params.id);
    let array1 = [
        {id:"001", name:"Pranav"},
        {id:"002", name:"Sashank"},
        {id:"003", name:"Abdul"}
        ];

        res.json(array1);
        console.log(array1);
        console.log(array1[1]);


}