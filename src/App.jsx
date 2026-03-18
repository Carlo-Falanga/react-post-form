import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    textBody: "",
    status: "",
  });

  console.log(formData);
  

  return (
    <>
      <section className="container">
        <form className="mt-5">
          {/* Name imput */}
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Author Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
          </div>
          {/* Title imput */}
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
              />
            </div>
          </div>

          {/* Text body imput */}
          <div className="row mb-3">
            <label className="form-label col-sm-2 col-form-label">Text body</label>

            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="textBody"
                name="textBody"
                rows="3"
              ></textarea>
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
                  name="status"
                  id="public"
                  value="public"
                />
                <label className="form-check-label">Public</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="draft"
                  value="draft"
                />
                <label className="form-check-label">Draft</label>
              </div>
            </div>
          </fieldset>

          {/* form button */}
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
