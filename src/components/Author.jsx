
const Author = ({phrasesData}) => {

    console.log(phrasesData);
    
    return (
        <div>
            <span className="author">{phrasesData?.author}</span>
        </div>
    )
}

export default Author;