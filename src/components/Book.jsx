
function Book(props) {

    return(
        <div className="todo">
            <div className="author"><h4>{props.data.author}</h4></div>
            <div className="title">{props.data.title}</div>
            <img src={props.img} alt="Kojniu fabrikas uzdarytas"></img>
            <button className="btn" onClick={()=> props.buy(props.id)}><span class="noselect">Pirkti</span></button>
            <div className="price"><h4>Kaina:</h4>&nbsp;{props.data.price}</div>
            
        </div>
    );
};
  
  
export default Book;