import './App.css'

function TextColor(props) {
    const colorOfText = props.colorOfText;
    if (colorOfText == true) {
        return(
            <p className='greenText'>Correct!</p>
        ) 
    }
    else {
        return(
            <p className='redText'>Incorrect</p>
        )
    }
}

function WithColor() {
    return (
        <>
        <h1>THE BIBLE QUIZ</h1>
        <p>The Bible Consists of the Old and New Testaments</p>
        <TextColor colorOfText = {true}/>
        <p>Moses led the israelites out of Egpyt</p>
        <TextColor colorOfText = {true}/>
        <p>The Sermon on the mount is found in the Book of Luke.</p>
        <TextColor colorOfText = {false}/>
        </>
    )
}

function WithoutColor() {
    return (
        <>
        <h1>THE BIBLE QUIZ</h1>
        <p>The Bible Consists of the Old and New Testaments</p>
        <p>Moses led the israelites out of Egpyt</p>
        <p>The Sermon on the mount is found in the Book of Luke.</p>
        </>
    )
}


const BibleQuiz = (props) => {
    const isOn = props.isOn;

    if (isOn){
        return<WithColor/>
    }
    else{
        return<WithoutColor/>
    }
}

export default BibleQuiz;
