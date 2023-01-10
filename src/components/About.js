import React,{useState} from 'react'


export default function About() {
    const [DarkMode, setDarkMode] = useState({
        color:'black',
        backgroundColor:'white'
    }); 
    const [btnText, setbtnText] = useState("Enable Dark Mode")
    const changeStyle=()=>{
        if(DarkMode.color ==='white'){
            setDarkMode({
                color:'black',
                backgroundColor:'white'
            });
            setbtnText("Enable Dark Mode");
        }
        else {
            setDarkMode({
                color:'white',
                backgroundColor:'#092c3b',
                border:'2px solid black'
            });
            setbtnText("Enable Light Mode");
        }
    }    
  
    return (
    <>
    <div className='container my-2' style={DarkMode}>
    <h2 className="my-2">About Text Master</h2>
    <p>Text Master is a project to provide as many online computer utilities (tools) to all users around the world as possible. The use of utilities is and will be free of charge. These utilities can be considered as accessories to Online Operating Systems (such as Chrome OS).

The founder of Text Master is Mladen Adamovic. Email: himanshupr7@gmail.com

This website started in December 2022. In January 2023, the website was updated with the second version of the software, making the website fully compliant with the Chrome Browser.

When we get a new good idea we like for any type of online computer program we will try to implement it. So you might contact us if you have an idea for any online utility.

But, remember, this site is pointless if people don't know about it. So, if you do like the site or any particular utility on the site, you might help us in some of the following ways :
</p>
    <ol>
        <li>If you have your own websites you might put the link to our site or particular utility. We prefer the link to a particular utility from related pages. For example, if you have site about English language we would prefer a link to the English language utilities</li>
        <li>If you are a journalist, writer or you have your own blog, you could write the article about our site</li>
        <li>Tell your friends or colleagues about the site or particular utility, if you think that they might be interested in them</li>
    </ol>
    <input onClick={changeStyle} className="btn btn-primary my-2 mx-1" value={btnText} type="button" id="flexSwitchCheckDefault"/>
    <a href='https://connectit000.000webhostapp.com/himanshu/' target="_blank"><input className="btn btn-danger my-2 mx-1" value="Click to see Developer's Profile" type="button" id="flexSwitchCheckDefault"/></a>
    </div>
    </>
  )
}

