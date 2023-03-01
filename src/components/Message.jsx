
const Message = ({phrasesData}) => {

    console.log(phrasesData);
    
    return (
        <div>
            <p className="phrase">{phrasesData?.phrase}</p>
        </div>
    )
}

export default Message;