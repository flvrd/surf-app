import ReactMarkdown from "react-markdown";

const InfoBlock = ({ data }) => {
    const { headline, text, showImageRight, imageSrc, button } = data;
    return (
        <div className={`info ${showImageRight ? "info--reversed" : ""}`}>

            <div className="info__text">
                <h2 className="info__headline">{headline}</h2>
                <ReactMarkdown className="copy">{text}</ReactMarkdown>
                {button}
            </div>
        </div>
    );
};

export default InfoBlock;