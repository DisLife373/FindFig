function clickCheck(event, e, func, title) {
    func(event.target.checked, e, title);
  }
  
  export default function (props) {
    return (
      <div className="filter">
        <div className="flex filter-container">
          <p className="filter-title bold500">{props.title}</p>
        </div>
        <div
          className="checkbox-wrapper-24">
          {props.list.map((e, index) => (
            <div key={index} className="form-check">
              <input
                type="checkbox"
                id={`check-${index}-${props.title}`}
                name="check"
                value=""
                onChange={(event) =>
                  clickCheck(event, e, props.filterHandler, props.title)
                }
              />
              <label htmlFor={`check-${index}-${props.title}`}>
                <span></span>
                {e}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
  