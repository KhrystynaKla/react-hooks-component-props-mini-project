function Message (minutes){
    let message = minutes.minutes+' minutes ';
        if (minutes.minutes<30){
            let cups=Math.ceil(minutes.minutes/5)
            for (let i =0; i<cups; i++){
                message += '☕️'; 
            }
        } else {
            let cups=Math.ceil(minutes.minutes/10)
            for (let i =0; i<cups; i++){
                message += '🍱'; 
            }
        }

    return <p>{message}</p>
}

export default Message
