
function Book(props) {

    return(
        <div className="todo">
            <div className="author"><h4>{props.data.author}</h4></div>
            <div className="title">{props.data.title}</div>
            <img src={props.img}></img>
            <button className="status" onClick={()=> props.buy(props.id)}>Pirkti</button>
            <div className="price"><h4>Kaina:  </h4>{props.data.price}</div>   
        </div>
    );
};
  
  
export default Book;