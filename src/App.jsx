function App() {


  return (
    <>
    <section className="container">

      <form className="mt-5">
        {/* Name imput */}
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            Author Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" name="name" />
          </div>
        </div>
        {/* Title imput */}
        <div className="row mb-3">
          <label  className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="title" name="title" />
          </div>
        </div>
        {/* Checkboxes */}
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0"></legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="public"
                id="public"
                value="option1"

              />
              <label className="form-check-label">
                Public
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label">
                Draft
              </label>
            </div>
          </div>
        </fieldset>
       {/* form button */}
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>

    </section>
    </>
  );
}

export default App;
