import withLabel from "../hoc/withLabel"
function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#0">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

export default withLabel(Article);